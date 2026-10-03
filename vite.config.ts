import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig, type PluginOption, type UserConfig } from "vite";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async ({ command, isSsrBuild }): Promise<UserConfig> => {
  const base = process.env.WEBSITE_BASE_PATH ?? process.env.BASE_PATH ?? "/";
  if (!/^\/(?:[A-Za-z0-9._-]+\/)*$/.test(base)) {
    throw new Error("Website base must be / or a slash-delimited path such as /repository-name/.");
  }
  const rawPort = process.env.PORT ?? "5173";
  const port = Number(rawPort);
  if (!Number.isInteger(port) || port <= 0 || port > 65535) throw new Error("Invalid PORT.");
  const inReplit = command === "serve" && process.env.REPL_ID !== undefined;
  const devTools: PluginOption[] = [];
  if (inReplit) {
    const banner = (await import("@replit/vite-plugin-dev-banner")).devBanner();
    const originalConfigure = banner.configureServer;
    const originalTransform = banner.transformIndexHtml;
    const scriptPath = "/@replit/vite-plugin-dev-banner/banner-script.js";
    // The supplied banner assumes a root-mounted server. Keep it inside this artifact.
    banner.configureServer = function (server) {
      server.middlewares.use((request, _response, next) => {
        if (request.url === `${base}${scriptPath.slice(1)}`) request.url = scriptPath;
        next();
      });
      if (typeof originalConfigure === "function") return originalConfigure.call(this, server);
    };
    banner.transformIndexHtml = {
      order: "post",
      async handler(html, context) {
        const transform = typeof originalTransform === "function" ? originalTransform : originalTransform?.handler;
        const result = transform ? await transform.call(this, html, context) : html;
        return Array.isArray(result) ? result.map(tag => tag.attrs?.id === "replit-dev-banner"
          ? { ...tag, attrs: { ...tag.attrs, src: `${base}${scriptPath.slice(1)}` } } : tag) : result;
      },
    };
    devTools.push(
      runtimeErrorOverlay(),
      (await import("@replit/vite-plugin-cartographer")).cartographer({ root: import.meta.dirname }),
      banner,
    );
  }
  return {
    base,
    root: import.meta.dirname,
    plugins: [
      react(),
      ...devTools,
    ],
    resolve: { alias: { "@": path.resolve(import.meta.dirname, "src") }, dedupe: ["react", "react-dom"] },
    build: {
      outDir: "dist",
      emptyOutDir: true,
      rollupOptions: isSsrBuild ? undefined : {
        input: Object.fromEntries(["index", "support", "how-to", "privacy", "terms"].map(page =>
          [page, path.resolve(import.meta.dirname, `${page}.html`)])),
      },
    },
    server: { port, strictPort: true, host: "0.0.0.0", allowedHosts: true },
    preview: { port, host: "0.0.0.0", allowedHosts: true },
  };
});