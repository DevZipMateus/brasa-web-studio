import heroImage from "@/assets/hero-supermarket.jpg";
import ParallaxImage from "@/components/ParallaxImage";

const Hero = () => {
  return (
    <ParallaxImage
      src={heroImage}
      alt="Interior do Supermercado Estrela com seção de frutas e verduras frescas"
      className="min-h-screen flex items-center pt-16 sm:pt-18 md:pt-20"
      overlayClassName="bg-gradient-to-r from-dark/90 via-dark/75 to-dark/40 md:from-dark/90 md:via-dark/70 md:to-dark/40"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 pb-20 sm:pb-24 md:pb-32">
        <div className="max-w-full sm:max-w-xl md:max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-black text-dark-foreground mb-3 sm:mb-4 leading-tight animate-[fade-in-up_0.8s_ease-out_0.2s_both]">
            Supermercado{" "}
            <span className="text-primary">Estrela</span>
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl text-dark-foreground/90 mb-6 sm:mb-8 font-body leading-relaxed animate-[fade-in-up_0.8s_ease-out_0.5s_both]">
            Variedade, qualidade e os melhores preços para sua família. 
            Aberto todos os dias para atender você com agilidade e dedicação.
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-[fade-in-up_0.8s_ease-out_0.8s_both]">
            <a
              href="https://wa.me/5599984408596"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
            >
              Fale pelo WhatsApp
            </a>
            <a
              href="#sobre"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector("#sobre");
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 72;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              className="border-2 border-dark-foreground/40 text-dark-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-dark-foreground/10 hover:border-dark-foreground/60 hover:scale-105 transition-all duration-300 text-center"
            >
              Conheça nossa história
            </a>
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap gap-6 sm:gap-8 text-dark-foreground/80 animate-[fade-in-up_0.8s_ease-out_1.1s_both]">
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-bold text-primary">7h - 21h</p>
              <p className="text-xs sm:text-sm mt-1">Aberto todos os dias</p>
            </div>
            <div className="w-px bg-dark-foreground/20" />
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-bold text-primary">+3</p>
              <p className="text-xs sm:text-sm mt-1">Áreas de atuação</p>
            </div>
          </div>
        </div>
      </div>
    </ParallaxImage>
  );
};

export default Hero;
