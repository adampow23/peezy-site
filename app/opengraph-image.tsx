import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { hero } from "@/content/landing";

export const alt = "Peezy — Moving has a hundred hidden tasks. Peezy finds yours.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const archivo = await readFile(join(process.cwd(), "app/fonts/Archivo-ExtraBold.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F3F2F2",
          color: "#201E1D",
          padding: 80,
          fontFamily: "Archivo",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 22, height: 22, backgroundColor: "#FFC233" }} />
          <div style={{ fontSize: 44, letterSpacing: "-0.02em" }}>Peezy</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 56,
            letterSpacing: "-0.02em",
            lineHeight: 1.06,
          }}
        >
          <div>{hero.h1Line1}</div>
          <div style={{ marginLeft: 34 }}>{hero.h1Line2}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Archivo", data: archivo, weight: 800, style: "normal" }],
    }
  );
}
