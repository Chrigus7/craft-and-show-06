import heroImage from "@/assets/christian-schlatter.png";

const Hero = () => {
  return (
    <section className="relative min-h-[65vh] flex items-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Christian Schlatter"
          className="w-full h-full object-cover object-[center_20%]"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-up">
            Nachhaltigkeit, die wirkt – und sich rechnet<span className="claim-dot">.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 mt-6 leading-relaxed animate-fade-up animate-delay-1 font-light">
            Kämpft Ihre Organisation noch mit der Umsetzung von Nachhaltigkeitszielen?
          </p>
          <p className="font-body text-base text-primary-foreground/70 mt-4 leading-relaxed animate-fade-up animate-delay-2">
            Ich analysiere Projekte, Prozesse und Organisationen auf ihr Nachhaltigkeitspotenzial. 
            Mit Daten, Erfahrung und KI – damit Entscheidungen einfacher, klarer und wirkungsvoller werden.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap animate-fade-up animate-delay-3">
            <a
              href="#angebot"
              className="inline-block bg-primary-foreground text-primary font-body font-semibold text-sm uppercase tracking-wider px-6 py-3 hover:bg-primary-foreground/90 transition-colors"
            >
              Sustainalysis entdecken
            </a>
            <a
              href="#kontakt"
              className="inline-block border border-primary-foreground/40 text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider px-6 py-3 hover:bg-primary-foreground/10 transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
