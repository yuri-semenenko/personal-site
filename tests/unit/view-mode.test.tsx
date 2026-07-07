import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useViewMode, ViewModeProvider, ViewModeToggle, type ViewModeCopy } from "@/components/view-mode";

const copy: ViewModeCopy = {
  label: "View mode",
  vertical: "Vertical",
  horizontal: "Horizontal",
  switchToVertical: "Switch to vertical view",
  switchToHorizontal: "Switch to horizontal view",
};

function stubMatchMedia(matches: boolean) {
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

function Probe() {
  const { effectiveMode, preference } = useViewMode();
  return (
    <output>
      {preference}:{effectiveMode}
    </output>
  );
}

function renderViewMode() {
  render(
    <ViewModeProvider>
      <Probe />
      <ViewModeToggle copy={copy} />
    </ViewModeProvider>,
  );
}

describe("view mode", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it("defaults to vertical mode on desktop", async () => {
    stubMatchMedia(true);
    renderViewMode();

    await waitFor(() => expect(screen.queryByText("vertical:vertical")).not.toBeNull());
  });

  it("persists horizontal preference on desktop", async () => {
    stubMatchMedia(true);
    renderViewMode();

    fireEvent.click(screen.getByRole("button", { name: copy.switchToHorizontal }));

    await waitFor(() => expect(screen.queryByText("horizontal:horizontal")).not.toBeNull());
    expect(localStorage.getItem("view-mode")).toBe("horizontal");
  });

  it("keeps the effective mode vertical below the desktop breakpoint", async () => {
    stubMatchMedia(false);
    localStorage.setItem("view-mode", "horizontal");

    renderViewMode();

    await waitFor(() => expect(screen.queryByText("horizontal:vertical")).not.toBeNull());
  });
});
