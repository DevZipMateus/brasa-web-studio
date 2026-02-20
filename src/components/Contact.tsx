import { MapPin, Clock, Mail, Phone } from "lucide-react";
import bgContact from "@/assets/bg-contact.jpg";

const Contact = () => {
  return (
    <section id="contato" className="relative">
      {/* Banner */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <img
          src={bgContact}
          alt="Vista aérea da cidade de Estreito no Maranhão"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark/80 flex items-center justify-center">
          <div className="text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Fale conosco
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-foreground mt-3">
              Entre em contato
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-muted rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua Central, 180 - Vila São Francisco<br />
                    Estreito - MA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-muted rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">Horário de funcionamento</h3>
                  <p className="text-muted-foreground">
                    Domingo a domingo: 7h às 21h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-muted rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">E-mail</h3>
                  <a
                    href="mailto:estrelaautocenter2019@gmail.com"
                    className="text-primary hover:underline"
                  >
                    estrelaautocenter2019@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-muted rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">CNPJ</h3>
                  <p className="text-muted-foreground">13.572.406/0001-90</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border h-[400px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.5!2d-47.45!3d-6.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzMnMzYuMCJTIDQ3wrAyNycwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Supermercado Estrela em Estreito-MA"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
