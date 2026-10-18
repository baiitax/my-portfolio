import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 85,
        background: "#f2f7f4",
        color: "#142d3c",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 22,
          letterSpacing: 4,
          color: "#137b68",
          marginBottom: 35,
        }}
      >
        MUJAHID YAKUBU BAITA
      </div>
      <div style={{ fontSize: 68, lineHeight: 1.12, letterSpacing: -3 }}>
        Building Intelligent Systems.
      </div>
      <div
        style={{
          fontSize: 68,
          lineHeight: 1.12,
          letterSpacing: -3,
          color: "#137b68",
        }}
      >
        Automating Business.
      </div>
      <div style={{ fontSize: 68, lineHeight: 1.12, letterSpacing: -3 }}>
        Connecting Markets.
      </div>
      <div style={{ fontSize: 18, marginTop: 45, color: "#62717c" }}>
        TECHNOLOGY · SYSTEMS · STRATEGY
      </div>
    </div>,
    size,
  );
}
