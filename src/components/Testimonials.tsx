import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Christian Schlatter habe ich in gemeinsamen Projekten als kooperativen und offenen Visionär erlebt, der anpackt und der enormes Gewicht auf tragfähige und umsetzbare Lösungen legt.",
    name: "Barbara Stettler",
    role: "Unternehmensberaterin, Dornach",
  },
  {
    quote:
      "Als Patronatsmitglied des Projekts Mariastein 2025 hat Christian Visionen und das Thema Nachhaltigkeit in die Überlegungen eingebracht. Er tut dies auf eine schöne, empathische und zugewandte Art.",
    name: "Mariano Tschuor",
    role: "Projektleiter «Mariastein 2025», Journalist, ehemaliger SRF Moderator",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <span className="section-label">Stimmen</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-12">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="service-border pl-6 py-2">
              <Quote className="w-6 h-6 text-primary/30 mb-3" />
              <p className="font-body text-base text-foreground leading-relaxed italic">
                «{t.quote}»
              </p>
              <div className="mt-4">
                <p className="font-display font-bold text-foreground">{t.name}</p>
                <p className="font-body text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
