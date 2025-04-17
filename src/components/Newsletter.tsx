
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-rede-primary/10 to-rede-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">Fique por dentro de todas as novidades</h2>
          <p className="text-gray-600 mb-8">
            Assine nossa newsletter e receba as últimas notícias sobre filmes, séries e o mundo do cinema diretamente na sua caixa de entrada.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <div className="relative flex-grow">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input 
                type="email" 
                placeholder="Seu endereço de e-mail" 
                className="pl-10 pr-4 py-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-rede-primary"
              />
            </div>
            <Button variant="rede" size="lg" className="whitespace-nowrap">
              Inscrever-se
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            Ao assinar, você concorda com nossa política de privacidade. Não enviamos spam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
