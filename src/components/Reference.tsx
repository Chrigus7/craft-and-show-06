import referenceImage from "@/assets/reference-strassensanierung.jpg";

const mandates = [
  {
    name: "KELSAG",
    role: "Verwaltungsratsmandat",
    category: "Gremium",
  },
  {
    name: "KEBIO",
    role: "Verwaltungsratsmandat",
    category: "Gremium",
  },
  {
    name: "AWEL Kanton Zürich",
    role: "Fachunterstützung Biodiversität",
    category: "Öffentliche Hand",
  },
  {
    name: "FFAG / ASTRA",
    role: "GreenInfraTwins",
    category: "Infrastruktur",
  },
  {
    name: "Campus Sursee",
    role: "Ausbildungscoach",
    category: "Bildung",
  },
  {
    name: "Diverse Gemeinden",
    role: "Nachhaltigkeitsberatung & Strategieentwicklung (v.a. im Bereich Bau/Bauprojekte",
    category: "Öffentliche Hand",
  },
  {
    name: "Bauunternehmungen",
    role: "Nachhaltigkeitsanalyse (Sustainalysis)",
    category: "Bau",
  },
];

const Reference = () => {
  return (
    <section id="referenz" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">

        {/* Ausgewählte Case Study */}
        <span className="section-label">Ausgewählte Referenz</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-12">
          Sustainalysis 2024<span className="claim-dot">.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden">
            <img
              src={referenceImage}
              alt="Strassensanierung – Infrastrukturprojekt"
              className="w-full h-80 object-cover"
            />
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Nachhaltigkeitsanalyse Infrastrukturprojekt
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Im Auftrag eines Infrastrukturbetreibers wurde mittels Sustainalysis eine umfassende
              Nachhaltigkeitsanalyse eines Strassensanierungsprojekts durchgeführt. Ziel war es,
              ökologische, ökonomische und soziale Auswirkungen systematisch zu bewerten und
              Optimierungspotenziale aufzuzeigen.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="service-border pl-4">
                <div className="font-display text-2xl font-bold text-primary">30%</div>
                <div className="font-body text-xs text-muted-foreground">CO₂-Einsparpotenzial</div>
              </div>
              <div className="service-border pl-4">
                <div className="font-display text-2xl font-bold text-primary">75%</div>
                <div className="font-body text-xs text-muted-foreground">Optimierte Materialkreisläufe</div>
              </div>
              <div className="service-border pl-4 col-span-2">
                <div className="font-display text-2xl font-bold text-primary">1,5 Mio CHF</div>
                <div className="font-body text-xs text-muted-foreground">Volkswirtschaftlicher Zusatznutzen</div>
              </div>
            </div>

            <p className="font-body text-sm text-muted-foreground mt-6 leading-relaxed">
              Die Analyse lieferte eine faktenbasierte Entscheidungsgrundlage – und zeigte auf,
              dass Nachhaltigkeit und Wirtschaftlichkeit kein Widerspruch sein müssen.
            </p>
          </div>
        </div>

        {/* Mandate & Kunden */}
        <div className="mt-20">
          <span className="section-label">Mandate & Kunden</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-4 mb-10">
            Vertrauen durch Zusammenarbeit
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mandates.map((m, i) => (
              <div key={i} className="bg-page-bg service-border pl-5 py-4 pr-4">
                <span className="font-body text-[10px] uppercase tracking-widest text-primary/70 font-semibold">
                  {m.category}
                </span>
                <p className="font-display font-bold text-foreground mt-1">{m.name}</p>
                <p className="font-body text-sm text-muted-foreground mt-0.5">{m.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reference;
