import "./_group.css";
import { Layout, DocHero } from "./_shared/Site";

const topics = ["Information collected","Camera & microphone permissions","Photos & media access","Local device storage","Subscriptions","Analytics & advertising","Third-party services","Children & minors","Data retention","Account deletion","Contact information"];

export function Privacy() {
  return <Layout><main>
    <DocHero eyebrow="MyStatClips · Privacy" title="Privacy Policy" intro="Policy language has not yet been supplied or approved; the sections below are reserved for accurate, reviewed privacy information."/>
    <div className="msc-shell msc-doc-body"><aside className="msc-doc-aside"><strong>On this page</strong><ul>{topics.map(t=><li key={t}>{t}</li>)}</ul></aside>
      <div className="msc-doc-content"><div className="msc-legal-placeholder" style={{marginBottom:30}}><strong>Approved-text placeholder — not a final policy.</strong><br/>Do not rely on this placeholder as legal guidance. Add reviewed, accurate policy text before launch.</div>
        {topics.map((topic,i)=><section className="msc-doc-section" key={topic}><h2>{String(i+1).padStart(2,"0")} &nbsp; {topic}</h2><div className="msc-legal-placeholder">Approved privacy text to be added for this topic.</div></section>)}
        <section className="msc-doc-section"><h2>Privacy contact</h2><p>For privacy questions, contact <a href="mailto:mystatclips@gmail.com">mystatclips@gmail.com</a>.</p></section>
        <p>Last updated: Awaiting approved policy text.</p>
      </div>
    </div>
  </main></Layout>;
}
export default Privacy;