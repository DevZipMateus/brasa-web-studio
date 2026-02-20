import heroImage from "@/assets/hero-supermarket.jpg";
import ParallaxImage from "@/components/ParallaxImage";

const Hero = () => {
  return (
    <ParallaxImage
      src={heroImage}
      alt="Interior do Supermercado Estrela com seção de frutas e verduras frescas"
      className="min-h-[85vh] flex items-center pt-20"
      overlayClassName="bg-gradient-to-r from-dark/90 via-dark/70 to-dark/40"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-dark-foreground mb-4 leading-tight">
            Supermercado{" "}
            <span className="text-primary">Estrela</span>
          </h1>
          <h2 className="text-lg md:text-xl text-dark-foreground/90 mb-8 font-body leading-relaxed">
            Variedade, qualidade e os melhores preços para sua família. 
            Aberto todos os dias para atender você com agilidade e dedicação.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors text-center"
            >
              Fale pelo WhatsApp
            </a>
            <a
              href="#sobre"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector("#sobre");
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              className="border-2 border-dark-foreground/40 text-dark-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-foreground/10 hover:border-dark-foreground/60 transition-colors text-center"
            >
              Conheça nossa história
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-dark-foreground/80">
            <div>
              <p className="text-3xl font-heading font-bold text-primary">7h - 21h</p>
              <p className="text-sm mt-1">Aberto todos os dias</p>
            </div>
            <div className="w-px bg-dark-foreground/20" />
            <div>
              <p className="text-3xl font-heading font-bold text-primary">+3</p>
              <p className="text-sm mt-1">Áreas de atuação</p>
            </div>
          </div>
        </div>
      </div>
    </ParallaxImage>
  );
};

export default Hero;
