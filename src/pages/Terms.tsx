import "./_group.css";
import { Layout, DocHero } from "./_shared/Site";

const topics = ["Using the app","Subscriptions","User-created content","Sports recordings","Acceptable use","Intellectual property","Service availability","Limitations & disclaimers","Cancellation & subscription management","Contact information"];

export function Terms() {
  return <Layout><main>
    <DocHero eyebrow="MyStatClips · Terms" title="Terms of Use" intro="Terms have not yet been supplied or approved; this page contains placeholders rather than unapproved legal commitments."/>
    <div className="msc-shell msc-doc-body"><aside className="msc-doc-aside"><strong>Topics to complete</strong><ul>{topics.map(t=><li key={t}>{t}</li>)}</ul></aside>
      <div className="msc-doc-content"><div className="msc-legal-placeholder" style={{marginBottom:30}}><strong>Approved-text placeholder — not final terms.</strong><br/>Have qualified counsel review and approve all terms before publication.</div>
        {topics.map((topic,i)=><section className="msc-doc-section" key={topic}><h2>{String(i+1).padStart(2,"0")} &nbsp; {topic}</h2><div className="msc-legal-placeholder">Approved terms text to be added for this topic.</div></section>)}
        <section className="msc-doc-section"><h2>Questions</h2><p>Contact <a href="mailto:mystatclips@gmail.com">mystatclips@gmail.com</a>.</p></section>
        <p>Last updated: Awaiting approved terms.</p>
      </div>
    </div>
  </main></Layout>;
}
export default Terms;