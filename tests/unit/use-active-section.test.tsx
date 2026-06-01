import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { renderHook, act, cleanup } from "@testing-library/react";
import { useActiveSection } from "@/hooks/use-active-section";

type ObserverCallback = (entries: IntersectionObserverEntry[]) => void;

class FakeIntersectionObserver {
  static instances: FakeIntersectionObserver[] = [];
  callback: ObserverCallback;
  observed: Element[] = [];
  disconnected = false;
  rootMargin: string;
  thresholds: ReadonlyArray<number>;

  constructor(cb: ObserverCallback, init?: IntersectionObserverInit) {
    this.callback = cb;
    this.rootMargin = init?.rootMargin ?? "";
    const t = init?.threshold ?? 0;
    this.thresholds = Array.isArray(t) ? t : [t];
    FakeIntersectionObserver.instances.push(this);
  }
  observe(el: Element) {
    this.observed.push(el);
  }
  unobserve(el: Element) {
    this.observed = this.observed.filter((e) => e !== el);
  }
  disconnect() {
    this.disconnected = true;
    this.observed = [];
  }
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
  fire(entries: Array<{ id: string; isIntersecting: boolean; intersectionRatio: number }>) {
    const formatted = entries.map((e) => {
      const target = this.observed.find((el) => (el as HTMLElement).id === e.id);
      if (!target) throw new Error(`No observed element with id="${e.id}"`);
      return {
        isIntersecting: e.isIntersecting,
        intersectionRatio: e.intersectionRatio,
        target,
      } as unknown as IntersectionObserverEntry;
    });
    this.callback(formatted);
  }
}

function mountSections(ids: string[]) {
  document.body.innerHTML = ids.map((id) => `<section id="${id}"></section>`).join("");
}

describe("useActiveSection", () => {
  beforeEach(() => {
    FakeIntersectionObserver.instances = [];
    document.body.innerHTML = "";
    vi.stubGlobal("IntersectionObserver", FakeIntersectionObserver);
  });

  // RTL's auto-cleanup is opt-in under Vitest with globals: false.
  afterEach(() => cleanup());

  it("starts with the first section id", () => {
    mountSections(["about", "experience", "contact"]);
    const { result } = renderHook(() => useActiveSection(["about", "experience", "contact"]));
    expect(result.current).toBe("about");
  });

  it("returns undefined when given an empty list", () => {
    const { result } = renderHook(() => useActiveSection([]));
    expect(result.current).toBeUndefined();
  });

  it("updates to the most-intersecting section when entries fire", () => {
    mountSections(["about", "experience", "contact"]);
    const { result } = renderHook(() => useActiveSection(["about", "experience", "contact"]));

    const observer = FakeIntersectionObserver.instances[0];
    expect(observer.observed).toHaveLength(3);

    act(() => {
      observer.fire([
        { id: "about", isIntersecting: true, intersectionRatio: 0.2 },
        { id: "experience", isIntersecting: true, intersectionRatio: 0.8 },
        { id: "contact", isIntersecting: false, intersectionRatio: 0 },
      ]);
    });
    expect(result.current).toBe("experience");
  });

  it("ignores non-intersecting entries", () => {
    mountSections(["about", "experience"]);
    const { result } = renderHook(() => useActiveSection(["about", "experience"]));
    const observer = FakeIntersectionObserver.instances[0];

    act(() => {
      observer.fire([
        { id: "about", isIntersecting: false, intersectionRatio: 0 },
        { id: "experience", isIntersecting: false, intersectionRatio: 0 },
      ]);
    });
    // No intersecting entries → state stays at the initial value.
    expect(result.current).toBe("about");
  });

  it("skips section ids whose DOM nodes don't exist", () => {
    mountSections(["about"]);
    renderHook(() => useActiveSection(["about", "missing-from-dom"]));
    const observer = FakeIntersectionObserver.instances[0];
    expect(observer.observed).toHaveLength(1);
    expect((observer.observed[0] as HTMLElement).id).toBe("about");
  });

  it("disconnects on unmount", () => {
    mountSections(["about"]);
    const { unmount } = renderHook(() => useActiveSection(["about"]));
    const observer = FakeIntersectionObserver.instances[0];
    expect(observer.disconnected).toBe(false);
    unmount();
    expect(observer.disconnected).toBe(true);
  });

  it("uses rootMargin and threshold tuned for header offset", () => {
    mountSections(["about"]);
    renderHook(() => useActiveSection(["about"]));
    const observer = FakeIntersectionObserver.instances[0];
    expect(observer.rootMargin).toBe("-25% 0% -65% 0%");
    expect(observer.thresholds).toEqual([0, 0.25, 0.5, 0.75, 1]);
  });
});
