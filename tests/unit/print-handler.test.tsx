import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { PrintHandler } from "@/components/print-handler";

function fireWindowEvent(name: "beforeprint" | "afterprint") {
  window.dispatchEvent(new Event(name));
}

beforeEach(() => {
  document.body.innerHTML = "";
  delete document.documentElement.dataset.printing;
  // happy-dom does not implement document.getAnimations() — stub it.
  Object.defineProperty(document, "getAnimations", {
    configurable: true,
    value: vi.fn(() => []),
  });
});

// RTL's auto-cleanup is opt-in under Vitest with globals: false. Without this,
// previous renders' useEffect-attached `beforeprint` listeners stay on window
// and accumulate across tests, making each fire run the handler N times.
afterEach(() => cleanup());

describe("PrintHandler — beforeprint", () => {
  it("sets data-printing on <html> and clears it on afterprint", () => {
    render(<PrintHandler />);

    expect(document.documentElement.dataset.printing).toBeUndefined();
    fireWindowEvent("beforeprint");
    expect(document.documentElement.dataset.printing).toBe("true");
    fireWindowEvent("afterprint");
    expect(document.documentElement.dataset.printing).toBeUndefined();
  });

  it("force-opens closed <details> and remembers it (so afterprint can close them)", () => {
    document.body.innerHTML = `
      <details id="closed-by-print"><summary>x</summary></details>
      <details id="user-opened" open><summary>x</summary></details>
    `;
    render(<PrintHandler />);

    fireWindowEvent("beforeprint");
    const closed = document.getElementById("closed-by-print")!;
    const userOpened = document.getElementById("user-opened")!;
    expect(closed.hasAttribute("open")).toBe(true);
    expect(closed.hasAttribute("data-print-opened")).toBe(true);
    expect(userOpened.hasAttribute("data-print-opened")).toBe(false);

    fireWindowEvent("afterprint");
    expect(closed.hasAttribute("open")).toBe(false);
    expect(closed.hasAttribute("data-print-opened")).toBe(false);
    expect(userOpened.hasAttribute("open")).toBe(true); // untouched by handler
  });

  it("wraps each section's heading + first content into a break-inside box", () => {
    document.body.innerHTML = `
      <section id="s1"><div data-print-section><h2>Heading 1</h2><p>Body 1</p><p>Body 2</p></div></section>
      <section id="s2"><div data-print-section><h2>Heading 2</h2><ul><li>x</li></ul></div></section>
    `;
    render(<PrintHandler />);
    fireWindowEvent("beforeprint");

    const wrappers = document.querySelectorAll("[data-print-wrap]");
    expect(wrappers).toHaveLength(2);
    for (const w of wrappers) {
      expect((w as HTMLElement).style.breakInside).toBe("avoid");
      expect(w.children).toHaveLength(2);
      expect(w.children[0].tagName).toBe("H2");
    }
  });

  it("unwraps print wrappers on afterprint, preserving original child order", () => {
    document.body.innerHTML = `
      <section><div data-print-section><h2>H</h2><p>Body</p><p>Tail</p></div></section>
    `;
    render(<PrintHandler />);
    fireWindowEvent("beforeprint");
    fireWindowEvent("afterprint");

    expect(document.querySelectorAll("[data-print-wrap]")).toHaveLength(0);
    const inner = document.querySelector("section > div")!;
    expect(Array.from(inner.children).map((c) => c.tagName)).toEqual(["H2", "P", "P"]);
  });

  it("calls finish() on every running WAAPI animation before printing", () => {
    const finish = vi.fn();
    Object.defineProperty(document, "getAnimations", {
      configurable: true,
      value: vi.fn(() => [{ finish }, { finish }, { finish }]),
    });
    render(<PrintHandler />);
    fireWindowEvent("beforeprint");
    expect(finish).toHaveBeenCalledTimes(3);
  });

  it("does nothing when a [data-print-section] block has no first/second elements", () => {
    document.body.innerHTML = `<section><div data-print-section><h2>Only heading</h2></div></section>`;
    render(<PrintHandler />);
    fireWindowEvent("beforeprint");
    expect(document.querySelectorAll("[data-print-wrap]")).toHaveLength(0);
  });

  it("removes window listeners on unmount", () => {
    const { unmount } = render(<PrintHandler />);
    unmount();
    fireWindowEvent("beforeprint");
    expect(document.documentElement.dataset.printing).toBeUndefined();
  });
});
