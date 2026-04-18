import { Linkedin, ArrowRight, Users, FileText, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: FileText,
    text: "Einblicke zu Nachhaltigkeitsthemen, Tiefbau und Kreislaufwirtschaft",
  },
  {
    icon: TrendingUp,
    text: "Aktuelle Projekte und Referenzen aus der Praxis",
  },
  {
    icon: Users,
    text: "Vernetzung mit Fachleuten aus Bau, Verwaltung und Strategie",
  },
];

const LinkedIn = () => {
  return (
    <section className="py-20 bg-page-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <span className="section-label">LinkedIn</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 leading-tight">
              Bleiben Sie auf dem Laufenden<span className="claim-dot">.</span>
            </h2>
            <p className="font-body text-base text-muted-foreground mt-4 leading-relaxed">
              Ich teile regelmässig Einblicke, Projektberichte und Gedanken zu Nachhaltigkeit,
              KI und kommunaler Infrastruktur. Folgen Sie mir auf LinkedIn.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <h.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{h.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-background border border-rule p-8 w-full max-w-sm text-center">
              <div className="w-14 h-14 bg-[#0A66C2] flex items-center justify-center mx-auto mb-6">
                <Linkedin className="w-7 h-7 text-white" />
              </div>
              <p className="font-display text-xl font-bold text-foreground">Christian Schlatter</p>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Nachhaltigkeitsberater · GIS-Bureau Schweiz
              </p>

              <a
                href="https://www.linkedin.com/in/schlatterchristian/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#0A66C2] text-white font-body font-semibold text-sm uppercase tracking-wider px-6 py-3 hover:bg-[#004182] transition-colors"
              >
                Auf LinkedIn folgen
                <ArrowRight size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/schlatterchristian/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block font-body text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                linkedin.com/in/schlatterchristian
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LinkedIn;
