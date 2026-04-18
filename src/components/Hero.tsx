import heroImage from "@/assets/christian-schlatter.png";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center bg-page-bg pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full py-16">
        <div className="grid md:grid-cols-5 gap-12 items-center">

          {/* Left: Text */}
          <div className="md:col-span-3 order-2 md:order-1">
            <span className="section-label">Nachhaltigkeitsberatung Schweiz</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mt-4 animate-fade-up">
              Nachhaltigkeit, die wirkt – und sich rechnet<span className="claim-dot">.</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground mt-6 leading-relaxed animate-fade-up animate-delay-1">
              Kämpft Ihre Organisation noch mit der Umsetzung von Nachhaltigkeitszielen?
            </p>
            <p className="font-body text-base text-muted-foreground mt-3 leading-relaxed animate-fade-up animate-delay-2">
              Ich analysiere Projekte, Prozesse und Organisationen auf ihr Nachhaltigkeitspotenzial.
              Mit Daten, Erfahrung und KI – damit Entscheidungen einfacher, klarer und wirkungsvoller werden.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap animate-fade-up animate-delay-3">
              <a
                href="#angebot"
                className="inline-block bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider px-6 py-3 hover:bg-secondary transition-colors"
              >
                Sustainalysis entdecken
              </a>
              <a
                href="#kontakt"
                className="inline-block border border-primary text-primary font-body font-semibold text-sm uppercase tracking-wider px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Kontakt aufnehmen
              </a>
            </div>

            {/* Credentials */}
            <div className="mt-10 flex flex-wrap gap-6 animate-fade-up animate-delay-4">
              <div className="service-border pl-4">
                <p className="font-display font-bold text-foreground text-sm">25+ Jahre</p>
                <p className="font-body text-xs text-muted-foreground">Erfahrung</p>
              </div>
              <div className="service-border pl-4">
                <p className="font-display font-bold text-foreground text-sm">ETH Zürich</p>
                <p className="font-body text-xs text-muted-foreground">Umweltnaturwissenschaften</p>
              </div>
              <div className="service-border pl-4">
                <p className="font-display font-bold text-foreground text-sm">9 Jahre</p>
                <p className="font-body text-xs text-muted-foreground">Gemeindepräsident Dornach</p>
              </div>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="md:col-span-2 order-1 md:order-2 flex justify-center md:justify-end animate-fade-up">
            <div className="relative">
              {/* Decorative green background block */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 -z-10" />
              <img
                src={heroImage}
                alt="Christian Schlatter – Nachhaltigkeitsberater"
                className="w-72 md:w-80 lg:w-96 object-cover object-top aspect-[3/4]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
