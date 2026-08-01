import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          background: "#0f172a",
          color: "#ffffff",
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "-0.06em"
        }}
      >
        D
      </div>
    ),
    { ...size }
  );
}
