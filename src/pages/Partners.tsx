import { ArrowRight, Bookmark, ChartNoAxesColumnIncreasing, Video } from "lucide-react";
import "./_group.css";
import "./partners.css";
import { Layout } from "./_shared/Site";
import { assetUrl } from "../site-config";

const partnershipEmail = "mailto:mystatclips@gmail.com?subject=MyStatClips%20Partnership%20Conversation";

const features = [
  {
    index: "01",
    label: "RECORD",
    title: "Full Games",
    copy: "Capture the action directly in the app.",
    Icon: Video,
  },
  {
    index: "02",
    label: "TRACK",
    title: "Live Stats",
    copy: "Use sport-specific actions while watching the game.",
    Icon: ChartNoAxesColumnIncreasing,
  },
  {
    index: "03",
    label: "CAPTURE",
    title: "Highlights",
    copy: "One tap can mark the moment and save the highlight.",
    Icon: Bookmark,
  },
];

const sports = [
  "Basketball",
  "Football",
  "Volleyball",
  "Soccer",
  "Baseball",
  "Softball",
  "Tennis",
  "Hockey",
  "Lacrosse",
];

const steps = [
  {
    number: "01",
    title: "CONVERSATION",
    copy: "We learn about your organization, your families, and how MyStatClips could serve your community.",
  },
  {
    number: "02",
    title: "FIT",
    copy: "We decide together whether the partnership makes sense.",
  },
  {
    number: "03",
    title: "PARTNERSHIP",
    copy: "Approved organizations receive a partnership designed around how they will introduce MyStatClips to their community.",
  },
  {
    number: "04",
    title: "LAUNCH",
    copy: "Share MyStatClips with your families and create value together.",
  },
];

export function Partners() {
  return (
    <Layout>
      <main className="msc-partners" id="top">
        <section className="msc-partners-hero" aria-labelledby="partners-title">
          <div className="msc-shell">
            <span className="msc-eyebrow">PARTNER WITH MYSTATCLIPS</span>
            <h1 id="partners-title">Bring MyStatClips to Your Program.</h1>
            <p>
              MyStatClips gives sports families a simpler way to record games, track stats, and
              capture highlights — all in one place.
            </p>
            <p>
              We work with select sports organizations where we believe a partnership can create
              meaningful value for both the program and its families.
            </p>
            <a className="msc-btn msc-btn-primary" href={partnershipEmail}>
              Let&apos;s Talk Partnerships <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="msc-section" aria-labelledby="product-overview-title">
          <div className="msc-shell msc-partner-intro">
            <div>
              <span className="msc-eyebrow">A CAMERA-FIRST SPORTS APP</span>
              <h2 className="msc-display" id="product-overview-title">
                A Better Way to Capture the Game.
              </h2>
            </div>
            <div className="msc-partner-intro-copy">
              <p>
                MyStatClips is a camera-first sports app built for the person already recording
                from the sideline or stands.
              </p>
              <p>
                Instead of recording in one place, tracking stats somewhere else, and searching
                through video later, MyStatClips brings those pieces together.
              </p>
            </div>
          </div>
        </section>

        <section className="msc-section msc-partner-features" aria-label="MyStatClips product features">
          <div className="msc-shell">
            <div className="msc-partner-feature-grid">
              {features.map(({ index, label, title, copy, Icon }) => (
                <article className="msc-partner-feature" key={index}>
                  <div className="msc-partner-feature-index">
                    <span>{index}</span>
                    <span>{label}</span>
                  </div>
                  <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <p className="msc-partner-built-note">Built by a sports parent for sports parents.</p>
            <div className="msc-partner-sports" aria-label="Sports supported">
              <span className="msc-partner-sports-label">MULTIPLE SPORTS</span>
              {sports.map((sport) => (
                <span className="msc-partner-sport" key={sport}>
                  {sport}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="msc-section" aria-labelledby="partnership-value-title">
          <div className="msc-shell">
            <div className="msc-partners-section-heading">
              <span className="msc-eyebrow">A PRACTICAL PARTNERSHIP</span>
              <h2 className="msc-display" id="partnership-value-title">
                A Partnership Built Around Real Value.
              </h2>
            </div>
            <div className="msc-partner-value">
              <article className="msc-partner-value-card">
                <span>FOR YOUR FAMILIES</span>
                <h3>Useful All Season.</h3>
                <p>
                  Give families a practical tool for recording games, tracking meaningful stats,
                  capturing highlights, and sharing the moments that matter.
                </p>
              </article>
              <article className="msc-partner-value-card">
                <span>FOR YOUR ORGANIZATION</span>
                <h3>Value Without Inventory.</h3>
                <p>
                  No products to store or distribute. No boxes to sell. MyStatClips gives approved
                  partners an opportunity to bring useful technology to their sports community
                  while creating an additional revenue opportunity through qualifying memberships.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="msc-section msc-partner-process" aria-labelledby="partnership-process-title">
          <div className="msc-shell">
            <div className="msc-partners-section-heading">
              <span className="msc-eyebrow">FROM FIRST CHAT TO GAME DAY</span>
              <h2 className="msc-display" id="partnership-process-title">
                How Partnership Works
              </h2>
            </div>
            <div className="msc-partner-process-grid">
              {steps.map(({ number, title, copy }) => (
                <article className="msc-partner-process-step" key={number}>
                  <span aria-hidden="true">{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="msc-section msc-partner-selective" aria-labelledby="selective-title">
          <div className="msc-shell">
            <div className="msc-partner-selective-panel">
              <div className="msc-partner-selective-content">
                <span className="msc-eyebrow">SELECTIVE BY DESIGN</span>
                <h2 className="msc-display" id="selective-title">
                  The Right Partnerships Matter.
                </h2>
                <p>MyStatClips is not an open affiliate program.</p>
                <p>
                  We intentionally work with select organizations where we believe the relationship
                  can create real value for the program and its families.
                </p>
                <p>
                  If you believe MyStatClips could be a fit for your organization, we&apos;d love to
                  start with a conversation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="msc-partner-final" aria-labelledby="contact-partnerships-title">
          <div className="msc-shell">
            <div className="msc-partner-final-panel">
              <div className="msc-partner-final-copy">
                <span className="msc-eyebrow">START WITH A CONVERSATION</span>
                <h2 id="contact-partnerships-title">Let&apos;s Talk Partnerships.</h2>
                <p>
                  Tell us a little about your organization and let&apos;s see if MyStatClips is the
                  right fit.
                </p>
              </div>
              <div className="msc-partner-final-actions">
                <a className="msc-btn msc-btn-primary" href={partnershipEmail}>
                  Contact MyStatClips <ArrowRight size={15} aria-hidden="true" />
                </a>
                <a className="msc-btn msc-btn-outline" href={assetUrl("support.html")}>
                  Visit / Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Partners;
