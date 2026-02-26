import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const headerHeight = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 sm:h-18 md:h-20 px-4 lg:px-8">
        <a href="#inicio" onClick={() => handleNavClick("#inicio")}>
          <img src={logo} alt="Supermercado Estrela - Logo" className="h-10 sm:h-11 md:h-12 lg:h-14" />
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-foreground/70 hover:text-primary font-medium transition-colors duration-200 text-sm uppercase tracking-wide whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/5599984408596"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            Fale conosco
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col py-3 px-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground/70 hover:text-primary hover:bg-muted px-4 py-3 rounded-lg text-left font-medium transition-colors text-base"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/5599984408596"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold text-center mt-2 hover:bg-primary/90 transition-colors"
            >
              Fale conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
