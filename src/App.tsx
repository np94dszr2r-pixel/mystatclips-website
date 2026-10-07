import Homepage from "./pages/Homepage";
import Support from "./pages/Support";
import HowTo from "./pages/HowTo";
import QuickStartGuide from "./pages/QuickStartGuide";
import CompleteUserGuide from "./pages/CompleteUserGuide";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import type { SitePage } from "./site-config";

export interface AppProps {
  page?: SitePage;
}

function inferPage(): SitePage {
  if (typeof window === "undefined") return "index";
  const path = window.location.pathname.toLowerCase().replace(/\/index\.html$/, "/");
  if (/\/support(?:\.html|\/)?$/.test(path)) return "support";
  if (/\/(?:how-to\/)?quick-start(?:\.html|\/)?$/.test(path)) return "quick-start";
  if (/\/(?:how-to\/)?complete-guide(?:\.html|\/)?$/.test(path)) return "complete-guide";
  if (/\/how-to(?:\.html|\/)?$/.test(path)) return "how-to";
  if (/\/privacy(?:\.html|\/)?$/.test(path)) return "privacy";
  if (/\/terms(?:\.html|\/)?$/.test(path)) return "terms";
  return "index";
}

function App({ page = inferPage() }: AppProps) {
  switch (page) {
    case "support":
      return <Support />;
    case "how-to":
      return <HowTo />;
    case "quick-start":
      return <QuickStartGuide />;
    case "complete-guide":
      return <CompleteUserGuide />;
    case "privacy":
      return <Privacy />;
    case "terms":
      return <Terms />;
    default:
      return <Homepage />;
  }
}

export default App;
