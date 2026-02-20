import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Supermercado Estrela" className="h-12 mb-4" />
            <p className="text-dark-foreground/60 text-sm leading-relaxed">
              Variedade e qualidade de produtos com agilidade para você e sua família.
            </p>
          </div>

          <div>
            <h3 className="text-dark-foreground font-heading font-bold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              {["Início", "Sobre", "Serviços", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="text-dark-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-dark-foreground font-heading font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-dark-foreground/60 text-sm">
              <li>Rua Central, 180 - Vila São Francisco</li>
              <li>Estreito - MA</li>
              <li>
                <a href="mailto:estrelaautocenter2019@gmail.com" className="hover:text-primary transition-colors">
                  estrelaautocenter2019@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-foreground/10 pt-8 text-center">
          <p className="text-dark-foreground/40 text-sm">
            © {new Date().getFullYear()} Supermercado Estrela. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
