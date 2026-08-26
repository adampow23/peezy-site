import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/promise", destination: "/", permanent: true },
      // HeyCatch short links: single-char paths carry channel attribution.
      // No real single-character routes exist in this app.
      {
        source: "/:l([a-z0-9])",
        destination: "/?utm_source=heycatch&utm_campaign=:l",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
