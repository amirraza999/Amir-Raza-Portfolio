// Images are served from jsDelivr (a free global CDN that mirrors the public GitHub repo) instead of the
// Hostinger origin. Pages load dozens of images; sending them all to amirraza.me triggered the host's
// rate limit (HTTP 429). The ref is the deployed commit, so new images are available as soon as they are pushed.
// If a CDN image ever fails, the inline script in layout.tsx reloads it from amirraza.me.
const ref = process.env.NEXT_PUBLIC_ASSET_REF || "main";
export const assetCdnBase = `https://cdn.jsdelivr.net/gh/amirraza999/Amir-Raza-Portfolio@${ref}/public`;

/** Rewrites a local /images/... path to the CDN copy. Other paths are returned unchanged. */
export function cdn(path: string): string;
export function cdn(path: string | undefined): string | undefined;
export function cdn(path: string | undefined) {
  if (!path || !path.startsWith("/images/")) return path;
  return assetCdnBase + path;
}

/** Inline script: if a CDN image fails to load, retry the same file from this site. */
export const cdnFallbackScript = `document.addEventListener("error",function(e){var t=e.target;if(t&&(t.tagName==="IMG"||t.tagName==="VIDEO")&&!t.dataset.fb){var s=t.getAttribute("src")||t.getAttribute("poster")||"";var m=s.match(/^https:\\/\\/cdn\\.jsdelivr\\.net\\/gh\\/amirraza999\\/Amir-Raza-Portfolio@[^/]+\\/public(\\/.*)$/);if(m){t.dataset.fb="1";t.setAttribute(t.getAttribute("src")?"src":"poster",m[1]);}}},true);`;
