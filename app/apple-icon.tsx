import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 180,
  height: 180
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 42,
          background:
            "linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(20,184,166,1) 100%)",
          color: "#ffffff",
          fontSize: 90,
          fontWeight: 700,
          letterSpacing: "-0.08em"
        }}
      >
        D
      </div>
    ),
    { ...size }
  );
}
