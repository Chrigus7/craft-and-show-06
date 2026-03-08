import referenceImage from "@/assets/reference-strassensanierung.jpg";

const Reference = () => {
  return (
    <section id="referenz" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <span className="section-label">Ausgewählte Referenz</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-12">
          Sustainalysis 2024<span className="claim-dot">.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden">
            <img
              src={referenceImage}
              alt="Strassensanierung – Infrastrukturprojekt Nordwestschweiz"
              className="w-full h-80 object-cover"
            />
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Nachhaltigkeitsanalyse Infrastrukturprojekt Nordwestschweiz
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
      </div>
    </section>
  );
};

export default Reference;
