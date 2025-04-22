
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-rede-primary/10 to-rede-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 font-montserrat">Fique por dentro de todas as novidades</h2>
          <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
            Assine nossa newsletter e receba as últimas notícias sobre filmes, séries e o mundo do cinema diretamente na sua caixa de entrada.
          </p>
          
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 max-w-lg mx-auto">
            <div className="relative flex-grow">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input 
                type="email" 
                placeholder="Seu endereço de e-mail" 
                className="pl-10 pr-4 py-2.5 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-rede-primary text-sm md:text-base"
              />
            </div>
            <Button variant="rede" size="lg" className="whitespace-nowrap w-full md:w-auto">
              Inscrever-se
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4 px-4 md:px-0">
            Ao assinar, você concorda com nossa política de privacidade. Não enviamos spam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
