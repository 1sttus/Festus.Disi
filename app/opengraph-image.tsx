import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: 64,
          background:
            "linear-gradient(135deg, rgba(248,250,252,1) 0%, rgba(255,255,255,1) 45%, rgba(236,254,249,1) 100%)",
          color: "#0f172a",
          fontFamily: "Inter, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(15,23,42,0.12)",
            borderRadius: 40,
            padding: 56,
            background: "rgba(255,255,255,0.72)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  display: "inline-flex",
                  width: 112,
                  height: 44,
                  borderRadius: 999,
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#0f172a",
                  color: "#ffffff",
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "-0.06em"
                }}
              >
                DISI
              </div>
              <div style={{ fontSize: 22, color: "#14b8a6", fontWeight: 600, letterSpacing: "0.18em" }}>
                FESTUS DISI
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 160,
                height: 160,
                borderRadius: 36,
                background: "linear-gradient(135deg, rgba(20,184,166,0.16), rgba(15,23,42,0.06))",
                color: "#0f172a",
                fontSize: 72,
                fontWeight: 700
              }}
            >
              FD
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 860 }}>
            <div style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 700, letterSpacing: "-0.06em" }}>
              Designing Brands, Products &amp; Experiences That Matter.
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.5, color: "rgba(15,23,42,0.76)" }}>
              {siteConfig.description}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
