import "./_group.css";
import { ArrowDown, ArrowRight, Aperture, Play, Camera, ChartNoAxesColumnIncreasing, UsersRound, Clapperboard, SlidersHorizontal, Scissors, FolderHeart, LayoutTemplate } from "lucide-react";
import { Layout } from "./_shared/Site";
import { sitePageUrl } from "../site-config";
import { BasketballIcon, VolleyballIcon, FootballIcon, SoccerIcon, TennisIcon, SoftballIcon, BaseballIcon, HockeyIcon, LacrosseIcon } from "./_shared/SportIcons";
import { RecordingDemo } from "./_shared/RecordingDemo";
import { PlayerCardDemo } from "./_shared/PlayerCardDemo";
import { KitSignup } from "./_shared/KitSignup";

const features = [
  [Camera, "Full-Game Recording", "Keep the whole game together, right from your phone."],
  [Clapperboard, "Highlight Clips", "Mark moments as they happen and find them again."],
  [ChartNoAxesColumnIncreasing, "Live Stat Tracking", "Tap stats while you watch from the stands."],
  [UsersRound, "Multiple Athletes", "Keep each athlete’s games in their own place."],
  [Aperture, "Multiple Sports", "Follow an athlete across the seasons they play."],
  [UsersRound, "Two-Player Tracking", "Track two athletes in the same game."],
  [SlidersHorizontal, "Adjustable Clip Lengths", "Choose clip lengths that work for your moments."],
  [Scissors, "Trim & Share Highlights", "Fine-tune clips and share the plays you love."],
  [Play, "Full-Game Playback & Saving", "Return to the full game when you want to relive it."],
  [ChartNoAxesColumnIncreasing, "Custom Stat Buttons", "Make stat tracking fit the way you follow a game."],
  [FolderHeart, "Player & Game Organization", "Keep games, stats, and clips organized by player."],
  [LayoutTemplate, "Create / Player Graphics", "Turn game details into shareable sports graphics."],
] as const;
const sportItems = [
  { name: "Basketball", Icon: BasketballIcon },
  { name: "Volleyball", Icon: VolleyballIcon },
  { name: "Football", Icon: FootballIcon },
  { name: "Soccer", Icon: SoccerIcon },
  { name: "Tennis", Icon: TennisIcon },
  { name: "Softball", Icon: SoftballIcon },
  { name: "Baseball", Icon: BaseballIcon },
  { name: "Hockey", Icon: HockeyIcon },
  { name: "Lacrosse", Icon: LacrosseIcon },
];
const howSteps: {num:string; title:string; copy:string; Icon:typeof Camera}[] = [
  {num:"01",title:"Record",copy:"Record the full game directly inside MyStatClips",Icon:Camera},
  {num:"02",title:"Tap",copy:"Tap stats and highlight moments while your athlete plays",Icon:ChartNoAxesColumnIncreasing},
  {num:"03",title:"Done",copy:"When the game is over, your full-game video, stats, and highlight clips are already organized",Icon:FolderHeart},
];

function LaunchForm() {
  return <section className="msc-launch" id="launch"><div className="msc-shell"><div className="msc-launch-card">
    <div><span className="msc-preview-note">Join the launch list</span><h2 className="msc-display">Be First to Know When MyStatClips Launches</h2><p>Join the MyStatClips launch list for App Store updates, early access opportunities, new features, testing opportunities, and launch announcements.</p></div>
    <KitSignup/>
  </div></div></section>;
}

export function Homepage() {
  return <Layout>
    <main id="top">
      <section className="msc-hero"><div className="msc-shell msc-hero-grid">
          <div className="msc-hero-copy"><span className="msc-eyebrow">For the ones in the stands</span>
          <h1 className="msc-display">Record the Game.<span>Track the Stats.</span>Keep the Highlights.</h1>
          <p className="msc-lead">MyStatClips lets you record your athlete’s full game, track stats as the action happens, and create highlight clips while you record — all from your phone.</p>
          <div className="msc-hero-ctas"><button className="msc-btn msc-btn-primary" type="button" disabled style={{opacity:.76,cursor:"not-allowed"}}>Coming soon to the App Store</button><a className="msc-btn msc-btn-outline" href="#how-it-works">See how it works <ArrowDown size={14}/></a><a className="msc-btn msc-btn-dark" href="#launch">Join the launch list <ArrowRight size={15}/></a></div>
          <div className="msc-soon"><span className="msc-live-dot"/> Coming soon to the App Store <span aria-hidden="true">·</span> iPhone</div>
        </div>
        <div className="msc-hero-art"><RecordingDemo/></div>
      </div></section>
      <LaunchForm/>
      <section className="msc-section"><div className="msc-shell msc-problem">
        <div><span className="msc-eyebrow">A familiar game-day ritual</span><h2 className="msc-display">You already record the game.<br/>Now let MyStatClips do more with it.</h2><div className="msc-problem-copy"><p>Parents record entire games every weekend — then spend hours searching through video trying to find the best plays.</p><p><strong>With MyStatClips, you tap while you record.</strong></p><p>Your game, stats, and highlight clips stay organized so the moments you want are easier to find when the game is over.</p></div></div>
        <div className="msc-visual-board" aria-label="Illustration of game footage organized into full game, stats, and highlights" role="img"><div className="msc-board-paper"><small>Game day, organized</small><h3>The whole story.<br/>In one place.</h3><div className="msc-timeline"/></div><div className="msc-board-paper second"><small>After the final whistle</small><h3>Full game.<br/>Stats. Moments.</h3><div className="msc-timeline"/></div><span className="msc-mini-label">From the stands to your story</span></div>
      </div></section>
      <section className="msc-section msc-steps" id="how-it-works"><div className="msc-shell">
        <div className="msc-section-heading"><span className="msc-eyebrow">A simpler game-day flow</span><h2 className="msc-display">Three steps.<br/>One game, all together.</h2><p>Follow the action from the stands. MyStatClips keeps the full game, stats, and marked moments organized for after.</p></div>
        <div className="msc-step-grid">{howSteps.map(({num,title,copy,Icon})=><article className="msc-step" key={num}><span className="msc-step-index">{num}</span><Icon className="msc-step-icon" size={23}/><h3 className="msc-display">{title}</h3><p>{copy}</p></article>)}</div>
      </div></section>
      <section className="msc-section" id="features"><div className="msc-shell msc-feature-layout">
        <div className="msc-section-heading"><span className="msc-eyebrow">Everything around the game</span><h2 className="msc-display">Made for your sideline routine.</h2><p>Useful tools, without turning your weekend into a complicated workflow.</p></div>
        <div className="msc-feature-list">{features.map(([Icon,title,copy])=><article className="msc-feature" key={title}><Icon size={19}/><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div></section>
      <section className="msc-section msc-sports" id="sports"><div className="msc-shell">
        <div className="msc-section-heading"><span className="msc-eyebrow">More than one season</span><h2 className="msc-display">One App. Multiple Sports.</h2><p>Keep up with the sports your athlete plays, from the first whistle to the final point.</p></div>
        <div className="msc-sport-grid">{sportItems.map(({name,Icon})=><div className="msc-sport" key={name}><Icon className="msc-sport-icon"/>{name}</div>)}</div>
        <p className="msc-sports-note">One athlete can play multiple sports. Or manage multiple athletes from one app.</p>
      </div></section>
      <section className="msc-section" id="create"><div className="msc-shell msc-create">
        <div><span className="msc-eyebrow">Make the moment yours</span><h2 className="msc-display">Turn the Game Into Something Worth Sharing.</h2><p>Use your player information, photos, game stats, and MyStatClips designs to create shareable sports graphics directly from your saved games.</p></div>
        <PlayerCardDemo/>
      </div></section>
      <section className="msc-section msc-comparison" id="premium"><div className="msc-shell">
        <div className="msc-section-heading"><span className="msc-eyebrow">Choose what fits</span><h2 className="msc-display">A place to start.<br/>Room for more.</h2><p>Start with the core game-day experience. Premium adds more ways to share and create.</p></div>
        <div className="msc-compare-wrap" role="table" aria-label="Free and Premium feature comparison"><div className="msc-compare-head" role="row"><span>INCLUDED</span><span>FREE</span><span>PREMIUM</span></div>
          {[["Record games",1,1],["Track stats",1,1],["Capture highlights",1,1],["Save games and clips",1,1],["Core MyStatClips experience",1,1],["No ads",0,1],["No MyStatClips watermark",0,1],["Premium Create designs",0,1],["Premium sharing/export features",0,1],["Additional premium tools",0,1]].map(([name,free,premium])=><div className="msc-compare-row" role="row" key={String(name)}><span>{String(name)}</span><span>{free?<b className="msc-check">Included</b>:"—"}</span><span>{premium?<b className="msc-check">Included</b>:"—"}</span></div>)}
        </div><p className="msc-price-note">Premium details and pricing are not published yet.</p>
      </div></section>
       <section className="msc-section" id="how-to"><div className="msc-shell"><div className="msc-help-band"><div><span className="msc-eyebrow">A hand when you need it</span><h2>Need Help Getting Started?</h2><p>We’ll make it easy to find your way around MyStatClips.</p></div><div className="msc-help-actions"><button className="msc-btn msc-btn-dark" type="button" disabled style={{opacity:.68,cursor:"not-allowed"}}>Watch the how-to video · Coming soon</button><a className="msc-btn msc-btn-outline" href={sitePageUrl("how-to")}>View the how-to guide <ArrowRight size={14}/></a></div></div></div></section>
      <section className="msc-section" id="about"><div className="msc-shell msc-founder">
        <div className="msc-founder-card"><span>From one sports parent to another.</span></div>
        <div><span className="msc-eyebrow">The reason behind it</span><h2 className="msc-display">Built by a Sports Mom.</h2><p>MyStatClips started with a simple problem.</p><p>I was already sitting in the stands recording my kids’ games. I wanted the full game, their stats, and their best moments — without spending hours going back through video afterward.</p><p>So I built the tool I wanted as a sports parent.</p><p>MyStatClips is designed to make capturing your athlete’s journey simpler. It is built for parents and supporters who already record games and want a simpler way to organize stats, clips, and full-game video.</p></div>
      </div></section>
       <section className="msc-section msc-teams"><div className="msc-shell"><div className="msc-team-card"><div><span className="msc-eyebrow">For the people who bring teams together</span><h2>Teams & Organizations</h2><p>Interested in bringing MyStatClips to your team, club, school, or sports organization?</p><p style={{marginTop:10}}>Room to explore organization partnerships, affiliate programs, team programs, and future bulk access.</p></div><a className="msc-btn msc-btn-primary" href={sitePageUrl("partners")}>Partner with MyStatClips <ArrowRight size={14}/></a></div></div></section>
       <section className="msc-section" id="support"><div className="msc-shell"><div className="msc-section-heading"><span className="msc-eyebrow">Here when you need us</span><h2 className="msc-display">A real person for your questions.</h2><p>Need a hand with MyStatClips, have a question about your account, or want to talk about a team? Get in touch.</p></div><div className="msc-help-band"><div><h2>Support & Contact</h2><p><a href="mailto:mystatclips@gmail.com" style={{color:"inherit"}}>mystatclips@gmail.com</a></p></div><div className="msc-help-actions"><a className="msc-btn msc-btn-primary" href="mailto:mystatclips@gmail.com">Email support <ArrowRight size={14}/></a><a className="msc-btn msc-btn-outline" href={sitePageUrl("support")}>Support page</a></div></div></div></section>
    </main>
  </Layout>;
}
export default Homepage;