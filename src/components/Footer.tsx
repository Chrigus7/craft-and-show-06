const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/60 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-display text-sm text-primary-foreground/80">
          Christian Schlatter
        </div>
        <div className="font-body text-xs text-center md:text-right">
          © {new Date().getFullYear()} Christian Schlatter · GIS-Bureau Schweiz · Alle Rechte vorbehalten
        </div>
      </div>
    </footer>
  );
};

export default Footer;
