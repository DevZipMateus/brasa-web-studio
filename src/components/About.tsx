import { Target, Eye, Heart } from "lucide-react";
import bgAbout from "@/assets/bg-about.jpg";
import ParallaxImage from "@/components/ParallaxImage";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  return (
    <section id="sobre" className="relative">
      <ParallaxImage
        src={bgAbout}
        alt="Prateleiras organizadas do Supermercado Estrela"
        className="h-48 sm:h-56 md:h-64 lg:h-80"
        overlayClassName="bg-gradient-to-b from-dark/60 to-dark/80"
      >
        <div className="h-48 sm:h-56 md:h-64 lg:h-80 flex items-center justify-center px-4">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest">Nossa história</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-dark-foreground mt-2 sm:mt-3">
                Conheça o Supermercado Estrela
              </h2>
              <div className="w-12 sm:w-16 h-1 bg-primary mx-auto mt-3 sm:mt-4 rounded-full" />
            </div>
          </ScrollReveal>
        </div>
      </ParallaxImage>

      <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
            <ScrollReveal direction="left">
              <div>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                  O Supermercado Estrela surgiu da vontade do empresário Mauryn Ferreira Carvalho, 
                  que entrou para o mundo dos negócios bem cedo, aos 15 anos de idade. Como filho mais novo, 
                  Mauryn trancou a faculdade de direito e assumiu os negócios da família no campo com o objetivo 
                  de ajudar a mãe e suas duas irmãs que na ocasião também estavam na faculdade.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  Em pouco tempo, se tornou o mais jovem empresário local com uma estratégia de alavancagem 
                  e austeridade total, avançando também no ramo de Auto Center, Elétrica e Máquinas Pesadas.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="bg-muted rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border hover:shadow-xl transition-shadow duration-500">
                <p className="text-lg sm:text-xl font-heading font-semibold text-foreground italic leading-relaxed">
                  "Temos como missão oferecer variedade e qualidade de produtos com agilidade 
                  em todos os processos que envolve nossos clientes."
                </p>
                <span className="block mt-3 sm:mt-4 text-primary font-semibold text-sm sm:text-base">— Supermercado Estrela</span>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { Icon: Target, title: "Missão", text: "Oferecer variedade e qualidade de produtos com agilidade em todos os processos." },
              { Icon: Eye, title: "Visão", text: "Ser referência em qualidade e atendimento no comércio local de Estreito-MA." },
              { Icon: Heart, title: "Valores", text: "Compromisso, agilidade, respeito ao cliente e excelência em cada detalhe." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150} direction="scale">
                <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:bg-primary/20 group-hover:rotate-6 transition-all duration-500">
                    <item.Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
