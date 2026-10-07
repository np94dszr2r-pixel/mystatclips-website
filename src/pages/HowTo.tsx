import "./_group.css";
import "./how-to.css";
import { ArrowRight, BookOpen, Zap } from "lucide-react";
import { Layout, DocHero } from "./_shared/Site";
import { sitePageUrl } from "../site-config";

export function HowTo() {
  return (
    <Layout>
      <main className="msc-guide-page msc-guide-landing">
        <DocHero
          eyebrow="MyStatClips · How-To"
          title="Choose your guide."
          intro="Start with the basics, or look up a feature. Both guides are made for game day."
        />
        <section className="msc-choice-section" aria-labelledby="guide-choice-title">
          <div className="msc-guide-shell">
            <div className="msc-choice-intro">
              <span className="msc-guide-kicker">Choose your guide</span>
              <h2 id="guide-choice-title">Start simple. Go deeper whenever you need.</h2>
              <p>Made for parents who want a quick answer between warm-ups, or a detail to look up later.</p>
            </div>
            <div className="msc-guide-options">
              <a className="msc-guide-option msc-guide-option-quick" href={sitePageUrl("quick-start")}>
                <span className="msc-option-index">01 <Zap size={19} aria-hidden="true" /></span>
                <span className="msc-option-type">A few minutes · 10 steps</span>
                <span className="msc-option-title">Quick Start</span>
                <span className="msc-option-copy">New to MyStatClips? Start here.</span>
                <span className="msc-option-bottom"><span>Get ready for your first game</span><ArrowRight size={19} aria-hidden="true" /></span>
              </a>
              <a className="msc-guide-option msc-guide-option-complete" href={sitePageUrl("complete-guide")}>
                <span className="msc-option-index">02 <BookOpen size={19} aria-hidden="true" /></span>
                <span className="msc-option-type">Detailed reference · every feature</span>
                <span className="msc-option-title">Complete Guide</span>
                <span className="msc-option-copy">Learn every feature and troubleshooting option.</span>
                <span className="msc-option-bottom"><span>Browse the full reference</span><ArrowRight size={19} aria-hidden="true" /></span>
              </a>
            </div>
            <div className="msc-guide-help">
              <span className="msc-help-mark" aria-hidden="true">?</span>
              <p>Looking for something specific? The Complete Guide has a quick topic list at the top so you can jump straight to it.</p>
              <a href={sitePageUrl("complete-guide")}>Browse topics <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default HowTo;
