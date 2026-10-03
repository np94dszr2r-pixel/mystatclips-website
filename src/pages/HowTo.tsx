import "./_group.css";
import { ArrowRight } from "lucide-react";
import { Layout, DocHero, ScreenshotPlaceholder } from "./_shared/Site";
import { sitePageUrl } from "../site-config";

const instructions = [
  ["Getting started","A quick introduction to setting up MyStatClips for your game days."],
  ["Create a player","Add the athlete whose games and moments you want to organize."],
  ["Select sports & team","Choose the sports and team details that help keep games organized."],
  ["Start a recording","Learn how to begin capturing the full game from your phone."],
  ["Tap stats","Record stats as the action happens, without losing sight of the game."],
  ["How clips are created","Understand how a tap marks a highlight moment during recording."],
  ["View full games","Find and return to the full-game video after the final whistle."],
  ["Save & share clips","Trim, save, and share highlights from your saved games."],
  ["Use Create","Make shareable sports graphics with player details, photos, and game stats."],
  ["Troubleshooting","Find help with common questions or contact the support team."],
];
export function HowTo() {
  return <Layout><main>
    <DocHero eyebrow="MyStatClips · How-To" title="Your guide to game day." intro="A straightforward guide for getting started with MyStatClips. Detailed steps, video, screenshots, and product instructions will be added when they are ready."/>
    <section className="msc-section" style={{paddingTop:46}}><div className="msc-shell">
      <div className="msc-help-band" style={{marginBottom:38}}><div><span className="msc-eyebrow">Video walkthrough</span><h2>See how it works.</h2><p>The MyStatClips how-to video will appear here when provided.</p></div><span className="msc-preview-note" style={{color:"#28536a",borderColor:"#9dbdca"}}>Video · Coming soon</span></div>
      <div className="msc-section-heading"><span className="msc-eyebrow">Quick guide</span><h2 className="msc-display">From first setup to saved highlights.</h2><p>Choose a topic to get oriented. Each item is a prepared section for the final step-by-step guide.</p></div>
      <div className="msc-howto-list">{instructions.map(([title,copy],i)=><article className="msc-howto-item" key={title}><span className="msc-howto-num">{String(i+1).padStart(2,"0")}</span><div><h2 className="msc-display">{title}</h2><p>{copy}</p></div></article>)}</div>
      <div style={{marginTop:26}}><ScreenshotPlaceholder label="How-To guide images"/></div>
       <div className="msc-page-cta"><a className="msc-btn msc-btn-primary" href={sitePageUrl("support")}>Contact support <ArrowRight size={14}/></a></div>
    </div></section>
  </main></Layout>;
}
export default HowTo;