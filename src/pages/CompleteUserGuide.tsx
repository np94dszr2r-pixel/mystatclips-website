import "./_group.css";
import "./how-to.css";
import { ArrowRight, ChevronUp } from "lucide-react";
import { Layout, DocHero } from "./_shared/Site";
import { assetUrl, sitePageUrl } from "../site-config";
import { guideScreenshots, guideSections } from "./how-to-content";

export function CompleteUserGuide() {
  return (
    <Layout>
      <main className="msc-guide-page msc-complete-page" id="guide-top">
        <DocHero
          eyebrow="MyStatClips · Complete User Guide"
          title="The full game-day reference."
          intro="Find the control, feature, or answer you need. Use the topic index to jump right to it."
        />
        <section className="msc-complete-body">
          <div className="msc-guide-shell">
            <a className="msc-quick-link" href={sitePageUrl("quick-start")}>
              <span>Just getting started?</span><strong>View Quick Start</strong><ArrowRight size={16} aria-hidden="true" />
            </a>
            <div className="msc-complete-layout">
              <nav className="msc-topic-nav" aria-label="Complete guide topics">
                <details className="msc-topic-picker">
                <summary>Browse all {guideSections.length} topics</summary>
                <div className="msc-topic-list">
                  {guideSections.map((section, index) => (
                    <a href={`#${section.id}`} key={section.id}>
                      <span>{String(index + 1).padStart(2, "0")}</span>{section.title}
                    </a>
                  ))}
                </div>
                </details>
              </nav>
              <div className="msc-guide-sections">
                {guideSections.map((section, index) => {
                  const screenshot = guideScreenshots.find((image) =>
                    (image.topic === "Setup" && section.id === "player-roster")
                    || (image.topic === "Record" && section.id === "recording-controls")
                    || (image.topic === "Clips" && section.id === "clips-library"),
                  );
                  return (
                    <section className="msc-guide-section" id={section.id} key={section.id}>
                      <div className="msc-guide-section-head">
                        <span className="msc-guide-section-num">{String(index + 1).padStart(2, "0")}</span>
                        <div><h2>{section.title}</h2><p>{section.summary}</p></div>
                      </div>
                      <ol>
                        {section.steps.map((step, stepIndex) => <li key={`${section.id}-${stepIndex}`}><span>{String(stepIndex + 1).padStart(2, "0")}</span><p>{step}</p></li>)}
                      </ol>
                      {section.note && <aside className="msc-guide-note"><strong>Good to know</strong><p>{section.note}</p></aside>}
                      {screenshot && (
                        <figure className="msc-guide-shot msc-complete-shot">
                          <a href={assetUrl(screenshot.src)} target="_blank" rel="noopener noreferrer" aria-label={`Enlarge screenshot: ${screenshot.alt}`}>
                            <img src={assetUrl(screenshot.src)} alt={screenshot.alt} loading="lazy" width="402" height="874" />
                          </a>
                          <figcaption>{screenshot.caption}</figcaption>
                        </figure>
                      )}
                      <a className="msc-back-top" href="#guide-top">Back to top <ChevronUp size={15} aria-hidden="true" /></a>
                    </section>
                  );
                })}
                <div className="msc-guide-support">
                  <span className="msc-guide-kicker">Still need a hand?</span>
                  <h2>We’re here to help.</h2>
                  <p>Reach out to the MyStatClips support team with your question.</p>
                  <a href={sitePageUrl("support")}>Contact support <ArrowRight size={16} aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default CompleteUserGuide;
