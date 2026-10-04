import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, Menu, X, CircleHelp, Mail } from "lucide-react";
import { assetUrl, sitePageUrl, type SitePage } from "../../site-config";

const logo = assetUrl("images/official-lockup.png");

const nav = [
  ["Home", "index", "#top"], ["How It Works", "index", "#how-it-works"],
  ["Features", "index", "#features"], ["Sports", "index", "#sports"],
  ["Create", "index", "#create"], ["Premium", "index", "#premium"],
  ["How-To", "how-to", ""], ["About", "index", "#about"], ["Support", "support", ""],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="msc-header"><div className="msc-shell msc-navrow">
    <a href={`${sitePageUrl("index")}#top`} className="msc-brand" aria-label="MyStatClips home"><img src={logo} alt="MyStatClips — Record. Track Stats. Capture Highlights." /></a>
    <button className="msc-mobile-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={19}/> : <Menu size={19}/>}</button>
    <nav className={`msc-nav${open ? " is-open" : ""}`} aria-label="Main navigation">
      {nav.map(([label, page, hash]) => <a key={label} onClick={() => setOpen(false)} href={`${sitePageUrl(page as SitePage)}${hash}`}>{label}</a>)}
      <a className="msc-btn msc-btn-primary" href={`${sitePageUrl("index")}#launch`} onClick={() => setOpen(false)}>Join launch list <ArrowRight size={14}/></a>
    </nav>
  </div></header>;
}

export function Footer() {
  return <footer className="msc-footer"><div className="msc-shell">
    <div className="msc-footer-top">
      <div><img className="msc-footer-logo" src={logo} alt="MyStatClips — Record. Track Stats. Capture Highlights."/><p>Track Stats. Capture Highlights. Build Your Story.</p><a href="mailto:mystatclips@gmail.com" style={{color:"#c4d2df",fontSize:12,textDecoration:"none"}}><Mail size={14} style={{verticalAlign:"middle",marginRight:7}}/>mystatclips@gmail.com</a></div>
      <div className="msc-footer-links" aria-label="Explore"><a href={`${sitePageUrl("index")}#top`}>Home</a><a href={`${sitePageUrl("index")}#how-it-works`}>How It Works</a><a href={`${sitePageUrl("index")}#features`}>Features</a><a href={`${sitePageUrl("index")}#sports`}>Sports</a><a href={`${sitePageUrl("index")}#create`}>Create</a><a href={sitePageUrl("how-to")}>How-To</a><a href={`${sitePageUrl("index")}#about`}>About</a><a href={sitePageUrl("support")}>Support</a></div>
      <div className="msc-footer-links" aria-label="Information"><a href={sitePageUrl("privacy")}>Privacy Policy</a><a href={sitePageUrl("terms")}>Terms of Use</a><a href="https://www.instagram.com/mystatclips/" target="_blank" rel="noopener noreferrer" style={{color:"#aebfd0",fontSize:11}}>Instagram · @MyStatClips</a><span style={{color:"#aebfd0",fontSize:11}}>App Store · Coming soon</span></div>
    </div>
    <div className="msc-footer-bottom"><span>© 2026 MyStatClips. All rights reserved.</span><span>Made for the moments worth keeping.</span></div>
  </div></footer>;
}

export function Layout({children}: {children: ReactNode}) {
  useEffect(() => {
    if (!window.location.hash) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }, []);
  return <div className="msc-site"><Header/>{children}<Footer/></div>;
}

export function ScreenshotPlaceholder({label}: {label: string}) {
  return <div className="msc-placeholder" role="img" aria-label={`${label} screenshot placeholder — real app image to be added`}><CircleHelp size={16}/><span>Real app screenshot · {label}</span></div>;
}

export function DocHero({eyebrow, title, intro}: {eyebrow: string; title: string; intro: string}) {
  return <section className="msc-doc-hero"><div className="msc-shell"><span className="msc-eyebrow" style={{color:"#22d0e8"}}>{eyebrow}</span><h1>{title}</h1><p>{intro}</p></div></section>;
}

export function PageLinks() {
  return <div className="msc-page-cta"><a className="msc-btn msc-btn-primary" href={sitePageUrl("how-to")}>View How-To guide <ArrowRight size={15}/></a><a className="msc-btn msc-btn-outline" href={sitePageUrl("support")}>Contact support</a></div>;
}