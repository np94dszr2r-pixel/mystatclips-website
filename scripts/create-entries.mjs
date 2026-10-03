import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const pages = [
  ["index", "MyStatClips — Record. Track Stats. Capture Highlights.", "Record the game, track your athlete's stats, and keep the highlights. MyStatClips is coming soon for iPhone."],
  ["support", "Support & Contact — MyStatClips", "Contact MyStatClips support and find getting-started resources for recording games and organizing highlights."],
  ["how-to", "How-To Guide — MyStatClips", "Explore MyStatClips getting-started topics. Detailed instructions, screenshots and video are coming soon."],
  ["privacy", "Privacy Policy — MyStatClips", "MyStatClips privacy policy structure. Final reviewed policy text is pending; this is not a final policy."],
  ["terms", "Terms of Use — MyStatClips", "MyStatClips terms of use structure. Final reviewed terms are pending; this page contains clearly marked placeholders."],
];
const escape = value => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
for (const [page, title, description] of pages) {
  await writeFile(`${root}${page}.html`, `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escape(title)}</title>
  <meta name="description" content="${escape(description)}">
  <meta name="robots" content="noindex, follow">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escape(title)}">
  <meta property="og:description" content="${escape(description)}">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${escape(title)}">
  <meta name="twitter:description" content="${escape(description)}">
  <link rel="icon" type="image/x-icon" href="./favicon.ico?v=app-store">
  <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png?v=app-store">
  <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png?v=app-store">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Barlow+Condensed:wght@500;600;700;800;900&display=swap" rel="stylesheet">
</head>
<body data-page="${page}">
  <div id="root"></div>
  <script type="module" src="./src/main.tsx"></script>
</body>
</html>
`);
}