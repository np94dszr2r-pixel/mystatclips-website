import { Bookmark, CornerUpRight, Download, EyeOff, Flag, Pause, Pencil, Plus, Shield, Square, Undo2, Zap } from "lucide-react";

const statHeaders = ["PTS", "REB", "AST", "STL", "BLK", "TO", "Foul"];
const controls = [
  { label: "Undo", Icon: Undo2, kind: "quiet" },
  { label: "2PT", Icon: Plus },
  { label: "3PT", Icon: Plus },
  { label: "FT", Icon: Plus },
  { label: "REB", Icon: Download },
  { label: "Clip", Icon: Bookmark },
  { label: "AST", Icon: CornerUpRight },
  { label: "STL", Icon: Zap },
  { label: "Foul", Icon: Flag },
  { label: "BLK", Icon: Shield },
];

export function RecordingDemo() {
  return <figure className="msc-recording-demo" role="group" aria-label="Recording interface demo, Basketball example. Illustrative camera background and static marketing visual; recording controls are not interactive.">
    <div className="msc-phone">
      <span className="msc-phone-island" aria-hidden="true"/>
      <div className="msc-phone-screen" aria-hidden="true">
        <div className="msc-camera-art" aria-hidden="true">
          <img src={`${import.meta.env.BASE_URL}images/hero-sports-arena.png`} alt="" fetchPriority="high" decoding="async"/>
        </div>
        <div className="msc-record-hud">
          <div className="msc-record-head"><strong>Alex Taylor</strong><Pencil size={17}/><span className="msc-record-live"><i/>LIVE</span></div>
          <div className="msc-record-stats">{statHeaders.map(label=><div key={label}><span>{label}</span><b>0</b></div>)}</div>
        </div>
        <div className="msc-record-controls">{controls.map(({label,Icon,kind})=><div className={`msc-record-control${kind ? ` ${kind}` : ""}`} key={label}><Icon size={19} strokeWidth={2.2}/><b>{label}</b></div>)}</div>
        <div className="msc-record-bottom"><strong>00:11</strong><span className="msc-end-game"><Square size={17}/><b>END GAME</b></span><span><Pause size={16}/><b>PAUSE</b></span><span><EyeOff size={16}/><b>HIDE</b></span></div>
      </div>
    </div>
    <figcaption className="msc-record-caption"><strong>The real game-day layout</strong><span>Illustrative recording mockup · basketball stats shown</span></figcaption>
  </figure>;
}