import { MapPin, Clock, Mail, Phone } from "lucide-react";
import bgContact from "@/assets/bg-contact.jpg";
import ParallaxImage from "@/components/ParallaxImage";
import ScrollReveal from "@/components/ScrollReveal";

const contactItems = [
  {
    icon: MapPin,
    title: "Endereço",
    content: (
      <p className="text-muted-foreground text-sm sm:text-base">
        Rua Central, 180 - Vila São Francisco<br />
        Estreito - MA
      </p>
    ),
  },
  {
    icon: Clock,
    title: "Horário de funcionamento",
    content: <p className="text-muted-foreground text-sm sm:text-base">Domingo a domingo: 7h às 21h</p>,
  },
  {
    icon: Mail,
    title: "E-mail",
    content: (
      <a href="mailto:estrelaautocenter2019@gmail.com" className="text-primary hover:underline text-sm sm:text-base break-all">
        estrelaautocenter2019@gmail.com
      </a>
    ),
  },
  {
    icon: Phone,
    title: "CNPJ",
    content: <p className="text-muted-foreground text-sm sm:text-base">13.572.406/0001-90</p>,
  },
];

const Contact = () => {
  return (
    <section id="contato" className="relative">
      <ParallaxImage
        src={bgContact}
        alt="Vista aérea da cidade de Estreito no Maranhão"
        className="h-48 sm:h-56 md:h-64 lg:h-72"
        overlayClassName="bg-gradient-to-b from-dark/60 to-dark/80"
      >
        <div className="h-48 sm:h-56 md:h-64 lg:h-72 flex items-center justify-center px-4">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest">
                Fale conosco
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-dark-foreground mt-2 sm:mt-3">
                Entre em contato
              </h2>
              <div className="w-12 sm:w-16 h-1 bg-primary mx-auto mt-3 sm:mt-4 rounded-full" />
            </div>
          </ScrollReveal>
        </div>
      </ParallaxImage>

      <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <div className="space-y-4 sm:space-y-6">
              {contactItems.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 100} direction="left">
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-muted rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-400 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-400">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading font-bold text-foreground mb-1 text-sm sm:text-base">{item.title}</h3>
                      {item.content}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="right" delay={200}>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-border h-[280px] sm:h-[350px] md:h-[400px] lg:h-full shadow-lg hover:shadow-xl transition-shadow duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.0!2d-47.4489!3d-6.5611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7930e4b6a84cf1d%3A0x4e9a2e1c8a5b3d7f!2sR.%20Central%2C%20180%20-%20Vila%20S%C3%A3o%20Francisco%2C%20Estreito%20-%20MA!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "280px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Supermercado Estrela em Estreito-MA"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
