import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const switzer = await readFile(join(process.cwd(), "app/fonts/Switzer-Semibold.otf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFC233",
          color: "#17150E",
          fontFamily: "Switzer",
          fontSize: 112,
          paddingBottom: 10,
        }}
      >
        P
      </div>
    ),
    { ...size, fonts: [{ name: "Switzer", data: switzer, weight: 600, style: "normal" }] }
  );
}
