import { Leaf, BrainCircuit, Users, Network, Shield, Handshake } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Nachhaltigkeitsanalyse mit KI",
    text: "Ganzheitliche Analyse von Bauprojekten – ökologisch, ökonomisch, sozial. CO₂-Bilanzierung, Materialoptimierung und kreislaufwirtschaftliche Potenziale.",
  },
  {
    icon: BrainCircuit,
    title: "Entscheidungsunterstützung mit KI",
    text: "Komplexe Daten analysieren, Muster identifizieren, Szenarien vergleichen. Datenbasierte Entscheidungsgrundlagen für strategische Herausforderungen.",
  },
  {
    icon: Users,
    title: "Strategische Umsetzung",
    text: "Massgeschneiderte Nachhaltigkeitsstrategien – von Kreislaufwirtschaft bis Klimaschutz. Mit strukturiertem Vorgehen und Expert:innennetzwerk.",
  },
  {
    icon: Shield,
    title: "Führungsunterstützung",
    text: "Strategische Führungsfragen, Transformationsprozesse und Gremienarbeit – damit Ihre Organisation handlungsfähig bleibt.",
  },
  {
    icon: Network,
    title: "Starkes Netzwerk",
    text: "Nationales und internationales Netzwerk verbindet Spezialist:innen aus unterschiedlichsten Disziplinen. Kooperation im Sinne von SDG17.",
  },
  {
    icon: Handshake,
    title: "Unkomplizierte Ersteinschätzung",
    text: "Potentialabschätzung innert 2 Tagen",
  },
];

const Services = () => {
  return (
    <section id="angebot" className="py-24 bg-page-bg">
      <div className="max-w-6xl mx-auto px-6">
        <span className="section-label">Angebot</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-12">
          Was ich für Sie tun kann
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-background p-6 service-border hover:shadow-lg transition-shadow"
            >
              <s.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
