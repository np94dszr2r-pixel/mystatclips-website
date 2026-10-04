import type { ReactNode } from "react";
import { Layout, DocHero } from "./Site";
import "../_group.css";
import "./LegalDocument.css";

export const LEGAL_EFFECTIVE_DATE = "October 3, 2026";
export const LegalContact = () => <a href="mailto:mystatclips@gmail.com">mystatclips@gmail.com</a>;
export type LegalSection = { id: string; title: string; content: ReactNode };

export function LegalDocument({ kind, title, intro, sections }: {
  kind: string; title: string; intro: string; sections: LegalSection[];
}) {
  return <Layout><main>
    <DocHero eyebrow={`MyStatClips · ${kind}`} title={title} intro={intro}/>
    <div className="msc-shell msc-doc-body">
      <aside className="msc-doc-aside"><strong>On this page</strong><ul>
        {sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}
      </ul></aside>
      <div className="msc-doc-content msc-legal-content">
        <p><strong>Effective date: {LEGAL_EFFECTIVE_DATE}</strong></p>
        {sections.map((section, index) => <section className="msc-doc-section" id={section.id} key={section.id}>
          <h2>{String(index + 1).padStart(2, "0")} &nbsp; {section.title}</h2>
          {section.content}
        </section>)}
      </div>
    </div>
  </main></Layout>;
}