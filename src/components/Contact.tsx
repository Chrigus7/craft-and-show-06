import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
              Kontakt
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 leading-tight">
              Lassen Sie uns Ihr Projekt betrachten<span className="claim-dot">.</span>
            </h2>
            <p className="font-body text-base text-primary-foreground/70 mt-4 leading-relaxed">
              Ich freue mich auf Ihre Nachricht – für eine kostenlose Ersteinschätzung oder ein unverbindliches Gespräch.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 mt-1 text-primary-foreground/60 flex-shrink-0" />
              <div>
                <p className="font-body font-semibold">Christian Schlatter</p>
                <p className="font-body text-sm text-primary-foreground/70">GIS-Bureau Schweiz</p>
                <p className="font-body text-sm text-primary-foreground/70">Werbhollenstrasse 6, 4143 Dornach</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-primary-foreground/60 flex-shrink-0" />
              <a href="tel:+41787950906" className="font-body hover:underline">
                +41 78 795 09 06
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-primary-foreground/60 flex-shrink-0" />
              <a href="mailto:schlatter@christian-schlatter.ch" className="font-body hover:underline">
                schlatter@christian-schlatter.ch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
