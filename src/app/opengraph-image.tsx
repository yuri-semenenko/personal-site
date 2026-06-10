import { ImageResponse } from "next/og";
import { getContent } from "@/content";
import { STATUS_CATALOG } from "@/content/statuses";
import { SITE_HOST } from "@/lib/site";

export const alt = "Yuri Semenenko — Senior Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const { profile } = getContent("en");

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        background: "#0b0f15",
        color: "#f5f5f5",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          // sRGB hex, not OKLCH: Satori (the next/og engine) has no oklch()
          // support and silently drops the stops, rendering the bar invisible.
          background: "linear-gradient(90deg, #4c84ff, #dc64c8)",
          display: "flex",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(76, 132, 255, 0.25), transparent 70%)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -160,
          left: -100,
          width: 460,
          height: 460,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(220, 100, 200, 0.15), transparent 70%)",
          display: "flex",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8aa3cf",
            fontFamily: "monospace",
          }}
        >
          &lt;YURI SEMENENKO /&gt;
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <span
          style={{
            fontSize: 28,
            color: "#9aa6b5",
            fontFamily: "monospace",
          }}
        >
          {profile.location}
        </span>
        <h1
          style={{
            fontSize: 110,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            margin: 0,
            color: "#f5f5f5",
          }}
        >
          {profile.name}
        </h1>
        <p
          style={{
            fontSize: 40,
            color: "#c5cdd9",
            margin: 0,
            maxWidth: 900,
            lineHeight: 1.25,
          }}
        >
          {profile.headline}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 16 }}>
          {profile.statuses
            .filter((s) => s.enabled)
            .map((s) => {
              const { label, variant } = STATUS_CATALOG[s.key];
              return (
                <span
                  key={s.key}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 18px",
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.12)",
                    fontFamily: "monospace",
                    fontSize: 20,
                    color: "#e5e7eb",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: variant === "success" ? "#10b981" : variant === "secondary" ? "#c084fc" : "#4c84ff",
                      display: "flex",
                    }}
                  />
                  {label}
                </span>
              );
            })}
        </div>
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 22,
            color: "#6b7280",
          }}
        >
          {SITE_HOST}
        </span>
      </div>
    </div>,
    { ...size },
  );
}
