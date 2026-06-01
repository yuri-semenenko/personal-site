import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 32,
        height: 32,
        background: "#0b0f15",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
      }}
    >
      <span
        style={{
          color: "#f5f5f5",
          fontSize: 12,
          fontWeight: 700,
          fontFamily: "sans-serif",
          letterSpacing: "-0.5px",
        }}
      >
        YS
      </span>
    </div>,
    { ...size },
  );
}
