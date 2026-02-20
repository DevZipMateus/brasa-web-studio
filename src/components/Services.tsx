import { ShoppingCart, Wrench, HardHat } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Supermercado",
    description:
      "Variedade completa de produtos alimentícios, higiene, limpeza e muito mais. Tudo que sua família precisa em um só lugar, com qualidade e preços acessíveis.",
  },
  {
    icon: Wrench,
    title: "Auto center e elétrica",
    description:
      "Serviços especializados em auto center e elétrica automotiva, com profissionais qualificados para cuidar do seu veículo com segurança e confiança.",
  },
  {
    icon: HardHat,
    title: "Máquinas pesadas e construção",
    description:
      "Atuação no segmento de máquinas pesadas e materiais para construção, oferecendo soluções completas para obras e empreendimentos.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-foreground mt-3">
            Nossos segmentos de atuação
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-dark-foreground/5 border border-dark-foreground/10 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/15 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/25 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-dark-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-dark-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
