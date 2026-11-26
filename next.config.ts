import type { NextConfig } from "next";
import { execSync } from "node:child_process";

// Commit used for jsDelivr image URLs (see app/asset.ts). Falls back to "main" if git is unavailable.
function commitRef() {
  const fromEnv = process.env.NEXT_PUBLIC_ASSET_REF || process.env.GIT_COMMIT || process.env.COMMIT_SHA;
  if (fromEnv) return fromEnv;
  try { return execSync("git rev-parse HEAD", { stdio: ["ignore", "pipe", "ignore"] }).toString().trim(); } catch { return "main"; }
}

const nextConfig: NextConfig = {
  env: { NEXT_PUBLIC_ASSET_REF: commitRef() },
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
