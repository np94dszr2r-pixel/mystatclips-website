import { useEffect, useRef, useState } from "react";

// Public embed supplied by the website owner, not an API credential.
export const KIT_FORM_UID = "948b6bef5f";
export const KIT_EMBED_URL = "https://mystatclips.kit.com/948b6bef5f/index.js";
export const KIT_FORM_PAGE_URL = "https://mystatclips.kit.com/948b6bef5f";

export function KitSignup() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    setState("loading");
    // Kit owns this empty subtree. Insert after hydration so its DOM is not
    // replaced by React; never intercept its form, requests, or confirmation.
    host.replaceChildren();
    let timeout: ReturnType<typeof setTimeout>;
    const observer = new MutationObserver(() => {
      if (host.querySelector("form")) {
        clearTimeout(timeout);
        setState("ready");
        observer.disconnect();
      }
    });
    observer.observe(host, { childList: true, subtree: true });
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", KIT_FORM_UID);
    script.src = KIT_EMBED_URL;
    script.onerror = () => {
      clearTimeout(timeout);
      setState("error");
    };
    timeout = setTimeout(() => setState("error"), 30000);
    host.appendChild(script);
    return () => {
      clearTimeout(timeout);
      observer.disconnect();
      script.onerror = null;
      host.replaceChildren();
    };
  }, [attempt]);

  return <div className="msc-kit-signup">
    <div id="msc-kit-signup" className="msc-kit-host" ref={hostRef} />
    {state === "loading" && <p className="msc-form-note" role="status">Loading the signup form…</p>}
    {state === "error" && <div className="msc-kit-status" role="status">
      <p>The embedded signup form couldn’t load. Try again, or open the signup page directly on Kit.</p>
      <div className="msc-kit-actions">
        <button className="msc-btn msc-btn-primary" type="button" onClick={() => setAttempt(value => value + 1)}>Try loading again</button>
        <a className="msc-kit-direct-link" href={KIT_FORM_PAGE_URL} target="_blank" rel="noopener noreferrer" aria-label="Open signup on Kit (opens in a new tab)">Open signup on Kit</a>
      </div>
    </div>}
    <p className="msc-form-note msc-kit-disclosure">Signups are handled by Kit. Your information is sent directly to Kit, not stored on this website.</p>
    <noscript>Enable JavaScript to load the embedded form, or <a href={KIT_FORM_PAGE_URL}>open the signup page on Kit</a>.</noscript>
  </div>;
}