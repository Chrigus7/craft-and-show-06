import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft size={14} /> Zurück zur Startseite
        </Link>

        <span className="section-label">Rechtliches</span>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-10">
          Impressum
        </h1>

        <div className="space-y-8 font-body text-base text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Betreiber dieser Website</h2>
            <p>
              Christian Schlatter<br />
              GIS-Bureau Schweiz<br />
              Werbhollenstrasse 6<br />
              4143 Dornach<br />
              Schweiz
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Kontakt</h2>
            <p>
              Telefon: <a href="tel:+41787950906" className="text-primary hover:underline">+41 78 795 09 06</a><br />
              E-Mail: <a href="mailto:schlatter@christian-schlatter.ch" className="text-primary hover:underline">schlatter@christian-schlatter.ch</a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Haftungsausschluss</h2>
            <p>
              Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit,
              Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den
              Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung
              bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch
              technische Störungen entstanden sind, werden ausgeschlossen.
            </p>
            <p className="mt-3">
              Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten
              oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder
              die Veröffentlichung zeitweise oder endgültig einzustellen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Haftung für Links</h2>
            <p>
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs.
              Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung
              solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Urheberrechte</h2>
            <p>
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf
              dieser Website gehören ausschliesslich Christian Schlatter oder den speziell genannten
              Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung
              der Urheberrechtsträger im Voraus einzuholen.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
