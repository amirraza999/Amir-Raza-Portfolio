import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // One canonical host: send www.amirraza.me to amirraza.me (301) so search engines see a single site.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.amirraza.me" }],
        destination: "https://amirraza.me/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
