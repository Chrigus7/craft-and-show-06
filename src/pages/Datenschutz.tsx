import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Datenschutz = () => {
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
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 font-body text-base text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Verantwortliche Stelle</h2>
            <p>
              Christian Schlatter<br />
              GIS-Bureau Schweiz<br />
              Werbhollenstrasse 6, 4143 Dornach<br />
              E-Mail: <a href="mailto:schlatter@christian-schlatter.ch" className="text-primary hover:underline">schlatter@christian-schlatter.ch</a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Allgemeines</h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (Schweizer DSG sowie,
              soweit anwendbar, der EU-DSGVO) sowie dieser Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
              wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-3">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
              DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Die Rechtmässigkeit der bis zum
              Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
            </p>
            <p className="mt-3">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
              Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
              Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Server-Logfiles</h2>
            <p>
              Der Provider dieser Website erhebt und speichert automatisch Informationen in Server-Logfiles,
              die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes
              Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners sowie Uhrzeit der Serveranfrage.
              Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen Datenquellen
              zusammengeführt.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Externe Dienste</h2>
            <p>
              Diese Website verwendet Google Fonts, die beim Aufruf der Seite direkt von Google-Servern
              geladen werden. Dabei kann Google Ihre IP-Adresse erfassen. Weitere Informationen finden Sie
              in der{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Datenschutzerklärung von Google
              </a>.
            </p>
            <p className="mt-3">
              Die Website kann Links zu LinkedIn enthalten. Für den Inhalt und die Datenschutzpraktiken
              dieser externen Plattform ist LinkedIn verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft über die Sie betreffenden personenbezogenen Daten sowie
              das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung. Wenden Sie sich
              dazu an die oben genannte verantwortliche Stelle.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Änderungen</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen. Es gilt die jeweils
              aktuelle, auf dieser Website veröffentlichte Version.
            </p>
            <p className="mt-3 text-sm">Stand: April 2026</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
