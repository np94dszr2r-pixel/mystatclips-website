import "./_group.css";
import { ArrowRight, Mail, BookOpen, Shield, FileText } from "lucide-react";
import { Layout, DocHero } from "./_shared/Site";
import { sitePageUrl } from "../site-config";

const checks = [
  ["Before you record","Make sure the app is ready and your device has room for the game."],
  ["During a game","Keep your phone steady and tap stats or moments as the action happens."],
  ["Finding a saved moment","Open the saved game to revisit its stats, clips, and full-game video."],
  ["Still need help?","Tell us what you were trying to do and include your device and app details."],
];
export function Support() {
  return <Layout><main>
    <DocHero eyebrow="MyStatClips · Support" title="We're here to help." intro="Simple answers for parents and supporters using MyStatClips. For a question that needs a person, email mystatclips@gmail.com."/>
    <section className="msc-section" style={{paddingTop:48}}><div className="msc-shell">
      <div className="msc-support-grid">
        <article className="msc-support-card"><Mail size={22}/><h2>Contact Support</h2><p>Send your question to the MyStatClips support inbox.</p><a className="msc-btn msc-btn-primary" href="mailto:mystatclips@gmail.com">Email mystatclips@gmail.com <ArrowRight size={14}/></a></article>
        <article className="msc-support-card"><BookOpen size={22}/><h2>How-To Guide</h2><p>See the getting-started topics and guide placeholders.</p><a className="msc-btn msc-btn-outline" href={sitePageUrl("how-to")}>View How-To <ArrowRight size={14}/></a></article>
        <article className="msc-support-card"><Shield size={22}/><h2>Privacy Policy</h2><p>Review the policy page structure. Final approved text is pending.</p><a className="msc-btn msc-btn-outline" href={sitePageUrl("privacy")}>Privacy Policy <ArrowRight size={14}/></a></article>
        <article className="msc-support-card"><FileText size={22}/><h2>Terms of Use</h2><p>Terms page content is a placeholder for approved language.</p><a className="msc-btn msc-btn-outline" href={sitePageUrl("terms")}>Terms of Use <ArrowRight size={14}/></a></article>
      </div>
      <div style={{marginTop:54}}><div className="msc-section-heading"><span className="msc-eyebrow">Try these first</span><h2 className="msc-display">A few game-day checks.</h2><p>These are general starting points. Detailed product instructions will be added as the guide is finalized.</p></div>
        <div className="msc-howto-list">{checks.map(([title,copy],i)=><article className="msc-howto-item" key={title}><span className="msc-howto-num">{i+1}</span><div><h2 className="msc-display">{title}</h2><p>{copy}</p></div></article>)}</div>
      </div>
       <div className="msc-page-cta"><a className="msc-btn msc-btn-primary" href={sitePageUrl("how-to")}>Getting started guide <ArrowRight size={14}/></a></div>
    </div></section>
  </main></Layout>;
}
export default Support;