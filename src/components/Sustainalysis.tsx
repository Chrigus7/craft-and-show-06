import sustainalysisImage from "@/assets/sustainalysis-visual.png";

const Sustainalysis = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <span className="section-label">Warum Nachhaltigkeit</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 leading-tight">
            Nachhaltigkeit ist kein Trend<span className="claim-dot">.</span>
          </h2>
          <p className="font-body text-base text-muted-foreground mt-4 leading-relaxed">
            Sie ist längst zu einem <strong className="text-foreground">Wettbewerbsfaktor</strong> geworden – 
            rechtlich, wirtschaftlich und gesellschaftlich. Unternehmen, Baufirmen und Gemeinden stehen unter wachsendem Druck, 
            nachhaltige Entscheidungen zu treffen – doch oft fehlen Zeit, Klarheit oder Fachwissen.
          </p>
          <p className="font-body text-base text-muted-foreground mt-3 leading-relaxed">
            Genau dort setze ich an: Ich helfe Ihnen, die <strong className="text-foreground">Komplexität</strong> zu 
            durchdringen – und <strong className="text-foreground">Potenziale</strong> sichtbar zu machen, bevor sie verloren gehen.
          </p>
        </div>

        {/* Sustainalysis */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">Meine Lösung</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-4 leading-tight">
              Sustainalysis
            </h2>
            <p className="font-body text-base text-muted-foreground mt-4 leading-relaxed">
              Sustainalysis verbindet menschliche <strong className="text-foreground">Erfahrung</strong> mit den 
              Möglichkeiten <strong className="text-foreground">künstlicher Intelligenz</strong> – nicht als Ersatz, 
              sondern als Verstärker.
            </p>
            <p className="font-body text-base text-muted-foreground mt-3 leading-relaxed">
              Das Ergebnis: Eine klare Entscheidungsgrundlage – faktenbasiert, nachvollziehbar und umsetzbar.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="service-border pl-4">
                <div className="font-display text-2xl font-bold text-primary">30%</div>
                <div className="font-body text-sm text-muted-foreground">CO₂-Reduktion</div>
              </div>
              <div className="service-border pl-4">
                <div className="font-display text-2xl font-bold text-primary">75%</div>
                <div className="font-body text-sm text-muted-foreground">Optimierte Abfallverwertung</div>
              </div>
              <div className="service-border pl-4 col-span-2">
                <div className="font-display text-2xl font-bold text-primary">1,5–2,8 Mio CHF</div>
                <div className="font-body text-sm text-muted-foreground">Volkswirtschaftlicher Zusatznutzen</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={sustainalysisImage}
              alt="Sustainalysis Visualisierung"
              className="w-full rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainalysis;
