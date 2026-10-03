import { createRoot, hydrateRoot } from "react-dom/client";

import App from "./App";
import { ErrorBoundary } from "@/components/error-boundary";

import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Missing #root element.");
}

const application = (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, application);
} else {
  createRoot(rootElement).render(application);
}
