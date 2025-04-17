
import { Facebook, Twitter, Instagram, Youtube, Mail, PhoneCall } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rede-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div>
            <div className="mb-4">
              <a href="/" className="text-2xl font-bold">
                <span className="text-white">Rede</span>
                <span className="text-rede-accent font-bold">Filme</span>
              </a>
            </div>
            <p className="text-gray-300 mb-6">
              Seu portal definitivo sobre cinema, séries, streaming e tudo relacionado ao universo audiovisual.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-rede-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-rede-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-rede-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-rede-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/filmes" className="text-gray-300 hover:text-white transition-colors">Filmes</a>
              </li>
              <li>
                <a href="/series" className="text-gray-300 hover:text-white transition-colors">Séries</a>
              </li>
              <li>
                <a href="/noticias" className="text-gray-300 hover:text-white transition-colors">Notícias</a>
              </li>
              <li>
                <a href="/criticas" className="text-gray-300 hover:text-white transition-colors">Críticas</a>
              </li>
              <li>
                <a href="/streaming" className="text-gray-300 hover:text-white transition-colors">Streaming</a>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorias</h3>
            <ul className="space-y-3">
              <li>
                <a href="/categoria/acao" className="text-gray-300 hover:text-white transition-colors">Ação</a>
              </li>
              <li>
                <a href="/categoria/comedia" className="text-gray-300 hover:text-white transition-colors">Comédia</a>
              </li>
              <li>
                <a href="/categoria/drama" className="text-gray-300 hover:text-white transition-colors">Drama</a>
              </li>
              <li>
                <a href="/categoria/ficcao-cientifica" className="text-gray-300 hover:text-white transition-colors">Ficção Científica</a>
              </li>
              <li>
                <a href="/categoria/terror" className="text-gray-300 hover:text-white transition-colors">Terror</a>
              </li>
              <li>
                <a href="/categoria/animacao" className="text-gray-300 hover:text-white transition-colors">Animação</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-rede-accent" />
                <a href="mailto:contato@redefilme.com" className="text-gray-300 hover:text-white transition-colors">
                  contato@redefilme.com
                </a>
              </li>
              <li className="flex items-center">
                <PhoneCall className="h-5 w-5 mr-2 text-rede-accent" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3 text-sm">Receba atualizações</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="px-4 py-2 rounded-l-md text-gray-900 w-full"
                />
                <button className="bg-rede-accent hover:bg-rede-accent/90 text-white px-4 py-2 rounded-r-md transition-colors">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Rede Filme. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li>
                <a href="/termos" className="hover:text-white transition-colors">Termos de Uso</a>
              </li>
              <li>
                <a href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
