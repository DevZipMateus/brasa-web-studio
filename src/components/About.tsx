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
        className="h-64 md:h-80"
        overlayClassName="bg-gradient-to-b from-dark/60 to-dark/80"
      >
        <div className="h-64 md:h-80 flex items-center justify-center">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Nossa história</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-foreground mt-3">
                Conheça o Supermercado Estrela
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
            </div>
          </ScrollReveal>
        </div>
      </ParallaxImage>

      <div className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <ScrollReveal direction="left">
              <div>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  O Supermercado Estrela surgiu da vontade do empresário Mauryn Ferreira Carvalho, 
                  que entrou para o mundo dos negócios bem cedo, aos 15 anos de idade. Como filho mais velho, 
                  Mauryn trancou a faculdade de direito e assumiu o comércio.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Em pouco tempo, se tornou o mais jovem empresário local com uma estratégia de alavancagem 
                  e austeridade total, avançando também no ramo de Auto Center, Elétrica e Máquinas Pesadas.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="bg-muted rounded-2xl p-8 border border-border hover:shadow-xl transition-shadow duration-500">
                <p className="text-xl font-heading font-semibold text-foreground italic leading-relaxed">
                  "Temos como missão oferecer variedade e qualidade de produtos com agilidade 
                  em todos os processos que envolve nossos clientes."
                </p>
                <span className="block mt-4 text-primary font-semibold">— Supermercado Estrela</span>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: Target, title: "Missão", text: "Oferecer variedade e qualidade de produtos com agilidade em todos os processos." },
              { Icon: Eye, title: "Visão", text: "Ser referência em qualidade e atendimento no comércio local de Estreito-MA." },
              { Icon: Heart, title: "Valores", text: "Compromisso, agilidade, respeito ao cliente e excelência em cada detalhe." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150} direction="scale">
                <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:rotate-6 transition-all duration-500">
                    <item.Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
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
