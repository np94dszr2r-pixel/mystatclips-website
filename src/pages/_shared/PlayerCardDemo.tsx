import { assetUrl } from "../../site-config";

const logo = assetUrl("images/official-lockup.png");
const stats = [
  ["18", "PTS"], ["6", "REB"], ["4", "AST"], ["2", "STL"],
  ["1", "BLK"], ["7/12", "FG"], ["2/4", "3PT"], ["2/3", "FT"],
];

export function PlayerCardDemo() {
  return <figure className="msc-player-demo" aria-label="Sample player card demo with an AI-generated fictional athlete photo and illustrative game stats">
    <div className="msc-player-card">
      <div className="msc-player-photo">
        <span className="msc-player-photo-label">Demo · AI-generated athlete</span>
        <img className="msc-player-portrait" src={assetUrl("images/fictional-athlete.jpg")} alt="AI-generated photo of a fictional basketball athlete in a navy jersey, not a real player"/>
        <img className="msc-player-logo" src={logo} alt="MyStatClips official logo"/>
      </div>
      <div className="msc-player-info">
        <div className="msc-player-name-row"><h3>Alex Taylor</h3><strong>#12</strong><span>CLASS<br/><b>2028</b></span></div>
        <div className="msc-player-meta"><span>GUARD</span><span>CENTRAL ACADEMY</span></div>
        <div className="msc-player-game"><small>@demo.athlete</small><strong><span>VS.</span> NORTHWOOD</strong></div>
        <div className="msc-player-stats">{stats.map(([value,label])=><div key={label}><b>{value}</b><span>{label}</span></div>)}</div>
      </div>
    </div>
    <figcaption className="msc-player-caption"><span>Player card · sample data</span><p>Player info plus saved game stats populate this shareable graphic.</p></figcaption>
  </figure>;
}