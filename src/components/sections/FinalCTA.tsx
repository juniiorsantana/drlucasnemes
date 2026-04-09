import { WHATSAPP_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-primary text-on-primary">
      <div className="max-w-3xl mx-auto px-8 text-center space-y-8">
        <h2 className="text-4xl font-headline font-extrabold tracking-tight">
          Dê o Primeiro Passo para uma Vida Mais Saudável
        </h2>

        <p className="text-lg text-on-primary-container leading-relaxed">
          Comece com uma consulta inicial. Avaliamos suas metas, analisamos seus
          dados e montamos um plano que realmente funciona. Estamos prontos para
          ajudar você.
        </p>

        <Button
          href={WHATSAPP_URL}
          variant="secondary"
          size="lg"
          icon="chat"
        >
          Agendar Minha Consulta Agora
        </Button>
      </div>
    </section>
  );
}
