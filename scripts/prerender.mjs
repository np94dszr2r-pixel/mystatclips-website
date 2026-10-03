import { readFile, writeFile, rm } from "node:fs/promises";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import App from "../.prerender/App.js";

for (const page of ["index", "support", "how-to", "privacy", "terms"]) {
  const target = new URL(`../dist/${page}.html`, import.meta.url);
  const template = await readFile(target, "utf8");
  if (!template.includes('<div id="root"></div>')) throw new Error(`Missing static render slot for ${page}.`);
  const markup = renderToString(createElement(App, { page }));
  await writeFile(target, template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`));
}
await writeFile(new URL("../dist/.nojekyll", import.meta.url), "");
await rm(new URL("../.prerender", import.meta.url), { recursive: true, force: true });
console.log("Five complete static HTML pages generated; no server or SPA fallback required.");