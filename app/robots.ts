import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Allow-all. This file is the noindex fix — nothing in this repo may emit a
 *  noindex directive. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
