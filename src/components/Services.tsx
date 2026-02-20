import { ShoppingCart, Wrench, HardHat } from "lucide-react";
import bgMarket from "@/assets/bg-services-market.jpg";
import bgAuto from "@/assets/bg-services-auto.jpg";
import bgConstruction from "@/assets/bg-services-construction.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: ShoppingCart,
    title: "Supermercado",
    description:
      "Variedade completa de produtos alimentícios, higiene, limpeza e muito mais. Tudo que sua família precisa em um só lugar, com qualidade e preços acessíveis.",
    image: bgMarket,
    alt: "Seção de frutas e verduras frescas no supermercado",
  },
  {
    icon: Wrench,
    title: "Auto center e elétrica",
    description:
      "Serviços especializados em auto center e elétrica automotiva, com profissionais qualificados para cuidar do seu veículo com segurança e confiança.",
    image: bgAuto,
    alt: "Oficina mecânica profissional com equipamentos modernos",
  },
  {
    icon: HardHat,
    title: "Máquinas pesadas e construção",
    description:
      "Atuação no segmento de máquinas pesadas e materiais para construção, oferecendo soluções completas para obras e empreendimentos.",
    image: bgConstruction,
    alt: "Máquinas pesadas em canteiro de obras",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="relative">
      <div className="bg-dark py-16 text-center px-4">
        <ScrollReveal>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-foreground mt-3">
            Nossos segmentos de atuação
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </ScrollReveal>
      </div>

      <div className="grid md:grid-cols-3">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 200}>
            <div className="relative group overflow-hidden h-[420px]">
              <img
                src={service.image}
                alt={service.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/30 group-hover:from-dark group-hover:via-dark/80 transition-all duration-500" />
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-dark-foreground mb-3 group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-dark-foreground/80 leading-relaxed text-sm group-hover:translate-x-1 transition-transform duration-500 delay-75">
                  {service.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Services;
