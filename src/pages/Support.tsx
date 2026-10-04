import "./_group.css";
import { ArrowRight, Mail, BookOpen, Shield, FileText } from "lucide-react";
import { Layout, DocHero } from "./_shared/Site";
import { sitePageUrl } from "../site-config";

const checks = [
  ["Before you record","Check camera and microphone permissions, available storage and battery. Have appropriate permission to record athletes, minors and other people."],
  ["During a game","Keep your phone steady and tap stats or moments as the action happens."],
  ["Finding a saved moment","Check the saved game, Highlights and Storage & Recovery. Recovery may help with retained readable footage, but cannot guarantee recovery of missing or damaged media."],
  ["Still need help?","Email your iPhone model, iOS version, app version and what happened. Please do not send passwords, payment details or unnecessary personal information about minors."],
];
export function Support() {
  return <Layout><main>
    <DocHero eyebrow="MyStatClips · Support" title="We're here to help." intro="Simple answers for parents and supporters using MyStatClips. For a question that needs a person, email mystatclips@gmail.com."/>
    <section className="msc-section" style={{paddingTop:48}}><div className="msc-shell">
      <div className="msc-support-grid">
         <article className="msc-support-card"><Mail size={22}/><h2>Contact Support</h2><p>For support, privacy or legal questions, contact mystatclips@gmail.com. MyStatClips is based in Texas, United States.</p><a className="msc-btn msc-btn-primary" href="mailto:mystatclips@gmail.com">Email mystatclips@gmail.com <ArrowRight size={14}/></a></article>
        <article className="msc-support-card"><BookOpen size={22}/><h2>How-To Guide</h2><p>See the getting-started topics and guide placeholders.</p><a className="msc-btn msc-btn-outline" href={sitePageUrl("how-to")}>View How-To <ArrowRight size={14}/></a></article>
         <article className="msc-support-card"><Shield size={22}/><h2>Privacy Policy</h2><p>Learn about local storage, sharing, subscriptions, advertising and deletion controls.</p><a className="msc-btn msc-btn-outline" href={sitePageUrl("privacy")}>Privacy Policy <ArrowRight size={14}/></a></article>
         <article className="msc-support-card"><FileText size={22}/><h2>Terms of Use</h2><p>Review recording responsibilities, subscriptions, content ownership and service limitations.</p><a className="msc-btn msc-btn-outline" href={sitePageUrl("terms")}>Terms of Use <ArrowRight size={14}/></a></article>
      </div>
       <div style={{marginTop:54}}><div className="msc-section-heading"><span className="msc-eyebrow">Try these first</span><h2 className="msc-display">A few game-day checks.</h2><p>Manage or cancel Premium through Apple ID/App Store subscription settings. Deleting the app does not cancel a subscription; Apple handles billing and refund requests under its policies.</p></div>
        <div className="msc-howto-list">{checks.map(([title,copy],i)=><article className="msc-howto-item" key={title}><span className="msc-howto-num">{i+1}</span><div><h2 className="msc-display">{title}</h2><p>{copy}</p></div></article>)}</div>
      </div>
       <div className="msc-page-cta"><a className="msc-btn msc-btn-primary" href={sitePageUrl("how-to")}>Getting started guide <ArrowRight size={14}/></a></div>
    </div></section>
  </main></Layout>;
}
export default Support;