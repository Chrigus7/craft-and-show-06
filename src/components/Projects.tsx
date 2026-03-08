import { ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "ENCA – European Network of Nature Conservation Agencies",
    category: "Netzwerk & Führung",
    excerpt:
      "Aufbau und Leitung des europäischen Netzwerks der Naturschutzagenturen als Exekutivsekretär in den Gründungsjahren.",
    date: "2021",
  },
  {
    id: 2,
    title: "Zukunftsperspektive einer Gemeinde",
    category: "Strategie & Transformation",
    excerpt:
      "Alle Gemeinderatsmitglieder wollten demissionieren – es fehlte an Perspektiven. Gemeinsam entwickelten wir eine neue Zukunftsvision.",
    date: "2021",
  },
  {
    id: 3,
    title: "KMU-Podium: Nachhaltigkeit in der Region",
    category: "Veranstaltung",
    excerpt:
      "Podium zum Thema «Wirtschaften mit Rücksicht auf zukünftige Generationen» – regionale Unternehmen zeigten, was möglich ist.",
    date: "2021",
  },
  {
    id: 4,
    title: "Schweizer Infrastrukturprojekt – Nachhaltigkeitsanalyse",
    category: "Sustainalysis",
    excerpt:
      "30% CO₂-Reduktion, 75% optimierte Abfallverwertung und 1,5–2,8 Mio CHF volkswirtschaftlicher Zusatznutzen durch systematische Analyse.",
    date: "2024",
  },
];

const Projects = () => {
  return (
    <section id="projekte" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <span className="section-label">Projekte & Erfolge</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-12">
          Ausgewählte Referenzen
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => {
            const Wrapper = p.link ? 'a' : 'div';
            const wrapperProps = p.link ? { href: p.link } : {};
            return (
              <Wrapper
                key={p.id}
                {...wrapperProps}
                className="project-card bg-background border border-rule p-6 group cursor-pointer block"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="section-label text-[10px]">{p.category}</span>
                  <span className="font-body text-xs text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {p.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Mehr erfahren <ArrowRight size={14} />
                </span>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
