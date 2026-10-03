import Homepage from "./pages/Homepage";
import Support from "./pages/Support";
import HowTo from "./pages/HowTo";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import type { SitePage } from "./site-config";

export interface AppProps {
  page?: SitePage;
}

function inferPage(): SitePage {
  if (typeof window === "undefined") return "index";
  const path = window.location.pathname.toLowerCase();
  if (path.endsWith("/support.html")) return "support";
  if (path.endsWith("/how-to.html")) return "how-to";
  if (path.endsWith("/privacy.html")) return "privacy";
  if (path.endsWith("/terms.html")) return "terms";
  return "index";
}

function App({ page = inferPage() }: AppProps) {
  switch (page) {
    case "support":
      return <Support />;
    case "how-to":
      return <HowTo />;
    case "privacy":
      return <Privacy />;
    case "terms":
      return <Terms />;
    default:
      return <Homepage />;
  }
}

export default App;
