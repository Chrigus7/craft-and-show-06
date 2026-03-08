import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Angebot", href: "#angebot" },
  { label: "Projekte", href: "#projekte" },
  { label: "Über mich", href: "#ueber" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="green-bar" />
      <div className="bg-background/95 backdrop-blur-sm border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className="flex flex-col">
            <span className="font-display text-xl font-bold text-foreground leading-none">
              Christian Schlatter
            </span>
            <span className="section-label text-[8px] mt-1">
              Nachhaltigkeit<span className="claim-dot">.</span> Wirksam<span className="claim-dot">.</span> Umsetzbar<span className="claim-dot">.</span>
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-sm font-600 uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-background border-t border-rule px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
