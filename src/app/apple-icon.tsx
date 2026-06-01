import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: 180,
        height: 180,
        background: "#0b0f15",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <span
          style={{
            color: "#f5f5f5",
            fontSize: 60,
            fontWeight: 700,
            fontFamily: "sans-serif",
            letterSpacing: "-2px",
            lineHeight: 1,
          }}
        >
          YS
        </span>
        <div
          style={{
            width: 80,
            height: 3,
            background: "linear-gradient(90deg, oklch(0.68 0.16 245), oklch(0.65 0.21 340))",
            borderRadius: 2,
            display: "flex",
          }}
        />
      </div>
    </div>,
    { ...size },
  );
}
