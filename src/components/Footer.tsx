import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background py-8 sm:py-10 md:py-12 px-4 sm:px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div className="sm:col-span-2 md:col-span-1">
            <img src={logo} alt="Supermercado Estrela" className="h-10 sm:h-12 mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Variedade e qualidade de produtos com agilidade para você e sua família.
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-heading font-bold mb-3 sm:mb-4 text-sm sm:text-base">Links rápidos</h3>
            <ul className="space-y-2">
              {["Início", "Sobre", "Serviços", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-heading font-bold mb-3 sm:mb-4 text-sm sm:text-base">Contato</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Rua Central, 180 - Vila São Francisco</li>
              <li>Estreito - MA</li>
              <li>
                <a href="mailto:estrelaautocenter2019@gmail.com" className="hover:text-primary transition-colors break-all">
                  estrelaautocenter2019@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8 text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} Supermercado Estrela. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
