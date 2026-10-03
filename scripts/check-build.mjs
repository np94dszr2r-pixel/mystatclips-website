import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dist = path.resolve(fileURLToPath(new URL("../dist/", import.meta.url)));
const base = process.env.WEBSITE_BASE_PATH ?? process.env.BASE_PATH ?? "/";
const pages = ["index", "support", "how-to", "privacy", "terms"];
const documents = new Map();
const titles = new Set();
let localLinks = 0;
for (const page of pages) {
  const html = await readFile(path.join(dist, `${page}.html`), "utf8");
  documents.set(`${page}.html`, html);
  assert(html.includes("<main"), `${page}: missing static content`);
  assert(html.includes("MyStatClips"), `${page}: missing branding`);
  assert(!html.includes("__mockup"), `${page}: sandbox link escaped into build`);
  assert(!html.includes("Replit Agent is building"), `${page}: scaffold content remains`);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert(title && !titles.has(title), `${page}: missing or repeated title`);
  titles.add(title);
  assert(/name="description" content="[^"]+"/.test(html), `${page}: missing description`);
  assert(/property="og:title" content="[^"]+"/.test(html), `${page}: missing social metadata`);
}
for (const [file, html] of documents) {
  for (const [, raw] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = raw.replaceAll("&amp;", "&");
    if (/^(?:https?:|mailto:|data:|tel:)/.test(value)) continue;
    const url = new URL(value, `https://website.test${base}${file}`);
    assert(url.pathname.startsWith(base), `${file}: URL escapes website base: ${value}`);
    const relative = decodeURIComponent(url.pathname.slice(base.length)) || "index.html";
    const target = path.resolve(dist, relative);
    assert(target.startsWith(`${dist}${path.sep}`), `${file}: path escapes output folder`);
    assert((await stat(target)).isFile(), `${file}: missing local target ${relative}`);
    if (url.hash) {
      const destination = documents.get(relative);
      assert(destination, `${file}: anchor targets a non-page ${relative}`);
      const id = decodeURIComponent(url.hash.slice(1));
      assert(destination.includes(`id="${id}"`), `${file}: missing anchor ${id} in ${relative}`);
    }
    localLinks++;
  }
}
const homepage = documents.get("index.html");
assert(homepage.includes("AI-generated athlete"), "Demo athlete label missing.");
assert(homepage.includes("Alex Taylor") && homepage.includes("7/12") && homepage.includes("2/4") && homepage.includes("2/3"), "Approved demo card details missing.");
assert(homepage.includes('id="msc-kit-signup"'), "Kit's hydration-safe embed container missing.");
assert(homepage.includes("Signups are handled by Kit."), "Kit data handling must be disclosed.");
assert(homepage.includes('href="https://mystatclips.kit.com/948b6bef5f"'), "Owner-supplied public Kit form link missing.");
assert(!homepage.includes("Kit signup is not connected"), "Retired placeholder disclosure remains.");
assert(!homepage.includes('aria-label="Launch list signup, not connected"'), "Retired placeholder form remains.");
const entry = homepage.match(/<script[^>]+src="([^"]+\.js)"/)?.[1];
assert(entry, "Missing website script.");
const entryPath = new URL(entry, `https://website.test${base}index.html`).pathname.slice(base.length);
const javascript = await readFile(path.join(dist, entryPath), "utf8");
assert(javascript.includes("https://mystatclips.kit.com/948b6bef5f/index.js"), "Owner-supplied Kit embed URL missing.");
assert(javascript.includes('data-uid') && javascript.includes("948b6bef5f"), "Kit embed identity missing.");
assert(documents.get("privacy.html").includes("not a final policy"), "Privacy draft warning missing.");
assert(documents.get("terms.html").includes("not final terms"), "Terms draft warning missing.");
await stat(path.join(dist, ".nojekyll"));
console.log(`Verified ${pages.length} static pages, unique metadata, ${localLinks} local links/assets/anchors, demo details, Kit embed wiring, and legal placeholders at base ${base}.`);