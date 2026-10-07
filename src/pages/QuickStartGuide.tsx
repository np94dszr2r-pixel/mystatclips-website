import "./_group.css";
import "./how-to.css";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { Layout, DocHero } from "./_shared/Site";
import { assetUrl, sitePageUrl } from "../site-config";
import { beforeRecording, guideScreenshots, quickSteps } from "./how-to-content";

export function QuickStartGuide() {
  return (
    <Layout>
      <main className="msc-guide-page msc-quick-page">
        <DocHero
          eyebrow="MyStatClips · Quick Start"
          title="Your first game, made simple."
          intro="A short path from setup to saved highlights. Follow along once, then keep your eyes on the game."
        />
        <section className="msc-quick-body" aria-label="Quick Start instructions">
          <div className="msc-guide-shell">
            <div className="msc-quick-meta">
              <span><strong>10</strong> steps</span>
              <span className="msc-quick-meta-rule" />
              <span>Setup to saved clips</span>
              <a href="#quick-step-1">Jump to the steps <ArrowDown size={15} aria-hidden="true" /></a>
            </div>
            <aside className="msc-before-card" aria-labelledby="before-recording-title">
              <div className="msc-before-heading">
                <span className="msc-guide-kicker">One minute now, fewer surprises later</span>
                <h2 id="before-recording-title">Before you record</h2>
                <p>A little prep helps your phone stay ready for the whole game.</p>
              </div>
              <ul>
                {beforeRecording.map((item) => (
                  <li key={item}><span className="msc-checkmark"><Check size={14} aria-hidden="true" /></span><span>{item}</span></li>
                ))}
              </ul>
            </aside>
            <div className="msc-quick-steps">
              {quickSteps.map((step, index) => {
                const screenshot = guideScreenshots.find((image) =>
                  image.topic.toLowerCase() === step.topic.toLowerCase()
                  || image.topic.toLowerCase().includes(step.topic.toLowerCase())
                  || step.topic.toLowerCase().includes(image.topic.toLowerCase()),
                );
                return (
                  <article className={`msc-quick-step${screenshot ? " has-image" : ""}`} id={`quick-step-${index + 1}`} key={step.id}>
                    <span className="msc-step-number" aria-label={`Step ${index + 1}`}>{String(index + 1).padStart(2, "0")}</span>
                    <div className="msc-quick-step-content">
                      <span className="msc-step-topic">{step.topic}</span>
                      <h2>{step.title}</h2>
                      <p>{step.text}</p>
                      {screenshot && (
                        <figure className="msc-guide-shot msc-quick-shot">
                          <a href={assetUrl(screenshot.src)} target="_blank" rel="noopener noreferrer" aria-label={`Enlarge screenshot: ${screenshot.alt}`}>
                            <img src={assetUrl(screenshot.src)} alt={screenshot.alt} loading="lazy" width="402" height="874" />
                          </a>
                          <figcaption>{screenshot.caption}</figcaption>
                        </figure>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="msc-quick-end">
              <span className="msc-guide-kicker">Need the details?</span>
              <h2>Everything else, in one place.</h2>
              <p>Explore controls, clips, recovery, sharing, and answers to common questions.</p>
              <a className="msc-guide-button" href={sitePageUrl("complete-guide")}>
                View Complete User Guide <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default QuickStartGuide;
