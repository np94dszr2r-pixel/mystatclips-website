import { readFile, writeFile, rm, mkdir } from "node:fs/promises";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import App from "../.prerender/App.js";

for (const page of ["index", "support", "how-to", "quick-start", "complete-guide", "privacy", "terms", "partners"]) {
  const target = new URL(`../dist/${page}.html`, import.meta.url);
  const template = await readFile(target, "utf8");
  if (!template.includes('<div id="root"></div>')) throw new Error(`Missing static render slot for ${page}.`);
  const markup = renderToString(createElement(App, { page }));
  const html = template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  await writeFile(target, html);
  const directory = { "how-to": "how-to", "quick-start": "how-to/quick-start", "complete-guide": "how-to/complete-guide", partners: "partners" }[page];
  if (directory) {
    const destination = new URL(`../dist/${directory}/`, import.meta.url);
    await mkdir(destination, { recursive: true });
    await writeFile(new URL("index.html", destination), html);
  }
}
await writeFile(new URL("../dist/.nojekyll", import.meta.url), "");
await rm(new URL("../.prerender", import.meta.url), { recursive: true, force: true });
console.log("Eight static pages plus four clean directory routes generated; no server or SPA fallback required.");