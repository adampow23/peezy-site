import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Peezy — The app that makes moving manageable.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const switzer = await readFile(join(process.cwd(), "app/fonts/Switzer-Semibold.otf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FBFAF6",
          color: "#17150E",
          padding: 80,
          fontFamily: "Switzer",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 22, height: 22, borderRadius: 7, backgroundColor: "#FFC233" }} />
          <div style={{ fontSize: 44, letterSpacing: "-0.02em" }}>Peezy</div>
        </div>
        <div
          style={{
            fontSize: 88,
            letterSpacing: "-0.02em",
            lineHeight: 1.04,
            maxWidth: 1000,
          }}
        >
          The app that makes moving manageable.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Switzer", data: switzer, weight: 600, style: "normal" }],
    }
  );
}
