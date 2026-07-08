import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Header } from "@/components/header";
import { ViewModeProvider } from "@/components/view-mode";
import { enContent } from "@/content/en";

vi.mock("next-themes", () => ({
  useTheme: () => ({
    resolvedTheme: "dark",
    setTheme: vi.fn(),
  }),
}));

class FakeIntersectionObserver {
  observe() {}
  disconnect() {}
  unobserve() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

function renderHeader() {
  render(
    <ViewModeProvider>
      <Header
        navigation={enContent.navigation}
        a11y={enContent.ui.a11y}
        locale="en"
        localeSwitcher={enContent.ui.localeSwitcher}
        viewMode={enContent.ui.viewMode}
      />
    </ViewModeProvider>,
  );
}

describe("Header", () => {
  beforeEach(() => {
    vi.stubGlobal("IntersectionObserver", FakeIntersectionObserver);
    vi.stubGlobal("matchMedia", (query: string) => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it("places desktop section navigation in its own row below the top controls", () => {
    renderHeader();

    const primaryNav = screen.getByRole("navigation", { name: enContent.ui.a11y.primaryNav });
    const navigationRow = primaryNav.closest("[data-slot='header-navigation-row']");
    const topRow = screen.getByRole("banner").querySelector("[data-slot='header-top-row']");

    expect(topRow).not.toBeNull();
    expect(navigationRow).not.toBeNull();
    expect(topRow!.compareDocumentPosition(navigationRow!)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(topRow!.contains(screen.getByRole("link", { name: enContent.navigation.actions[0]!.ariaLabel }))).toBe(true);
    expect(topRow!.contains(screen.getByRole("button", { name: enContent.ui.a11y.openMenu }))).toBe(true);
  });

  it("uses one shared primary nav indicator that moves to the hovered item", () => {
    renderHeader();

    const primaryNav = screen.getByRole("navigation", { name: enContent.ui.a11y.primaryNav });
    const aboutLink = screen.getByRole("link", { name: "About" });
    const experienceLink = screen.getByRole("link", { name: "Experience" });

    expect(primaryNav.querySelectorAll("[data-slot='primary-nav-indicator']")).toHaveLength(1);
    expect(aboutLink.querySelector("[data-slot='primary-nav-indicator']")).not.toBeNull();

    fireEvent.pointerEnter(experienceLink);

    expect(primaryNav.querySelectorAll("[data-slot='primary-nav-indicator']")).toHaveLength(1);
    expect(experienceLink.querySelector("[data-slot='primary-nav-indicator']")).not.toBeNull();
    expect(aboutLink.className).toContain("text-primary");

    fireEvent.pointerLeave(primaryNav);

    expect(aboutLink.querySelector("[data-slot='primary-nav-indicator']")).not.toBeNull();
  });
});
