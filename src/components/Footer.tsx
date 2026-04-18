import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/60 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-display text-sm text-primary-foreground/80">
          Christian Schlatter
        </div>
        <div className="font-body text-xs text-center md:text-right flex flex-wrap justify-center md:justify-end items-center gap-3">
          <span>© {new Date().getFullYear()} Christian Schlatter · GIS-Bureau Schweiz</span>
          <span className="hidden md:inline text-primary-foreground/30">·</span>
          <Link to="/impressum" className="hover:text-primary-foreground/90 transition-colors">
            Impressum
          </Link>
          <span className="text-primary-foreground/30">·</span>
          <Link to="/datenschutz" className="hover:text-primary-foreground/90 transition-colors">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
