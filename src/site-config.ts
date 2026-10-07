export const SITE_BASE = import.meta.env?.BASE_URL ?? process.env.WEBSITE_BASE_PATH ?? "/";

export type SitePage = "index" | "support" | "how-to" | "quick-start" | "complete-guide" | "privacy" | "terms";

const pageFiles: Record<SitePage, string> = {
  index: "index.html",
  support: "support.html",
  "how-to": "how-to/",
  "quick-start": "how-to/quick-start/",
  "complete-guide": "how-to/complete-guide/",
  privacy: "privacy.html",
  terms: "terms.html",
};

function normalizedBase() {
  const base = SITE_BASE || "/";
  return base.endsWith("/") ? base : `${base}/`;
}

export function assetUrl(path: string) {
  return `${normalizedBase()}${path.replace(/^\/+/, "")}`;
}

export function sitePageUrl(page: SitePage) {
  if (page === "privacy" || page === "terms" || page === "support") {
    return `https://mystatclips.com/${page}`;
  }
  return assetUrl(pageFiles[page]);
}