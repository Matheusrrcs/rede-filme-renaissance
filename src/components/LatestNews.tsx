
import NewsCard, { NewsCardProps } from '@/components/NewsCard';

const latestNews: NewsCardProps[] = [
  {
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070',
    title: 'Novo filme da Marvel quebra recordes de bilheteria no fim de semana de estreia',
    excerpt: 'A mais recente produção dos estúdios Marvel surpreendeu ao arrecadar mais de $200 milhões apenas nos Estados Unidos, superando todas as expectativas.',
    date: '15 abr 2024',
    category: 'Filmes',
    tag: 'Destaque',
    url: '/noticias/marvel-bilheteria'
  },
  {
    image: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935',
    title: 'Segunda temporada de "The Last of Us" inicia produção com novos personagens',
    excerpt: 'HBO confirma o início das filmagens da nova temporada da aclamada série baseada no jogo eletrônico, com novidades no elenco e retorno dos protagonistas.',
    date: '14 abr 2024',
    category: 'Séries',
    url: '/noticias/the-last-of-us-segunda-temporada'
  },
  {
    image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=2070',
    title: 'Diretor de "Oppenheimer" revela detalhes sobre seu próximo projeto',
    excerpt: 'Christopher Nolan falou em entrevista exclusiva sobre seu novo filme, previsto para 2026, que promete revolucionar o cinema com tecnologias inéditas.',
    date: '13 abr 2024',
    category: 'Notícias',
    url: '/noticias/nolan-novo-projeto'
  },
  {
    image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=2070',
    title: 'Netflix anuncia documentário sobre os bastidores de Hollywood',
    excerpt: 'A plataforma de streaming prepara série documental que promete revelar segredos e curiosidades das maiores produções cinematográficas da última década.',
    date: '12 abr 2024',
    category: 'Streaming',
    url: '/noticias/netflix-documentario-hollywood'
  },
  {
    image: 'https://images.unsplash.com/photo-1512070679279-8988d32161be?q=80&w=1978',
    title: 'Crítica: O novo filme de terror que está assustando os espectadores',
    excerpt: 'Estreia nas telonas promete ser um dos maiores sucessos do gênero nos últimos anos, com cenas impactantes e uma história envolvente que prende do início ao fim.',
    date: '11 abr 2024',
    category: 'Críticas',
    url: '/criticas/novo-filme-terror'
  },
  {
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059',
    title: 'Oscar 2025: As primeiras apostas para a premiação do próximo ano',
    excerpt: 'Mesmo faltando meses para a cerimônia, críticos já apontam favoritos e possíveis indicados para as principais categorias da maior premiação do cinema.',
    date: '10 abr 2024',
    category: 'Tendências',
    url: '/noticias/apostas-oscar-2025'
  }
];

const LatestNews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="section-title">Últimas Notícias</h2>
          <a href="/noticias" className="text-rede-secondary hover:text-rede-primary font-medium transition-colors">
            Ver todas as notícias
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
