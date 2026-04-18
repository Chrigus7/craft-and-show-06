import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", organisation: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Header + contact info */}
          <div>
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
              Kontakt
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 leading-tight">
              Lassen Sie uns Ihr Projekt betrachten<span className="claim-dot">.</span>
            </h2>
            <p className="font-body text-base text-primary-foreground/70 mt-4 leading-relaxed">
              Ich freue mich auf Ihre Nachricht – für ein unverbindliches Gespräch.
            </p>

            <div className="mt-10 space-y-5">
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

          {/* Right: Form */}
          <div>
            {status === "success" ? (
              <div className="bg-primary-foreground/10 border border-primary-foreground/20 p-8 text-center">
                <p className="font-display text-xl font-bold">Vielen Dank!</p>
                <p className="font-body text-sm text-primary-foreground/70 mt-2">
                  Ihre Nachricht ist angekommen. Ich melde mich innerhalb von 24 Stunden.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-primary-foreground/60 block mb-1">
                    Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-primary-foreground/60 placeholder:text-primary-foreground/30"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-primary-foreground/60 block mb-1">
                    E-Mail *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-primary-foreground/60 placeholder:text-primary-foreground/30"
                    placeholder="ihre@email.ch"
                  />
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-primary-foreground/60 block mb-1">
                    Organisation
                  </label>
                  <input
                    name="organisation"
                    value={form.organisation}
                    onChange={handleChange}
                    className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-primary-foreground/60 placeholder:text-primary-foreground/30"
                    placeholder="Ihre Organisation (optional)"
                  />
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-primary-foreground/60 block mb-1">
                    Ihre Herausforderung *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-primary-foreground/60 placeholder:text-primary-foreground/30 resize-none"
                    placeholder="Beschreiben Sie kurz, womit ich Ihnen helfen kann..."
                  />
                </div>

                {status === "error" && (
                  <p className="font-body text-sm text-red-300">
                    Etwas ist schiefgelaufen. Bitte schreiben Sie mir direkt per E-Mail.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-primary-foreground text-primary font-body font-semibold text-sm uppercase tracking-wider px-6 py-3 hover:bg-primary-foreground/90 transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Wird gesendet..." : "Nachricht senden"}
                </button>

                <p className="font-body text-xs text-primary-foreground/40">
                  * Pflichtfelder. Ihre Daten werden ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
