import portrait from "@/assets/christian-schlatter.png";

const About = () => {
  return (
    <section id="ueber" className="py-24 bg-page-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <img
              src={portrait}
              alt="Christian Schlatter"
              className="w-full max-w-sm mx-auto"
            />
          </div>
          <div className="md:col-span-3">
            <span className="section-label">Über mich</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 leading-tight">
              Mensch – Umwelt – Maschine
            </h2>
            <p className="font-body text-base text-muted-foreground mt-4 leading-relaxed">
              Ich bringe Menschen zusammen, sehe Zusammenhänge, hinterfrage Strukturen und Abläufe. 
              Dabei helfen mir mein Humor, meine ausgeprägte ganzheitliche Sicht und meine analytischen 
              und technischen Fähigkeiten.
            </p>
            <p className="font-body text-base text-muted-foreground mt-3 leading-relaxed">
              Dabei können Sie auf eine integre, belastbare und positive Persönlichkeit zählen.
            </p>

            <div className="mt-6 font-body text-sm text-muted-foreground space-y-1">
              <p><strong className="text-foreground">GIS-Bureau Schweiz</strong></p>
              <p>Werbhollenstrasse 6, 4143 Dornach</p>
            </div>

            <a
              href="https://www.linkedin.com/in/schlatterchristian/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider px-6 py-3 hover:bg-secondary transition-colors"
            >
              LinkedIn Profil
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
