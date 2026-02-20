import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5599999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar em contato pelo WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] rounded-full flex items-center justify-center shadow-lg transition-colors"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
    </a>
  );
};

export default WhatsAppButton;
