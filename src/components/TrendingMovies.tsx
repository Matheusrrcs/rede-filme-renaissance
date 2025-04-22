
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: number;
  releaseDate: string;
  genres: string[];
}

const trendingMovies: Movie[] = [
  {
    id: 1,
    title: 'Duna: Parte 2',
    image: 'https://images.unsplash.com/photo-1680272447731-321d80dd6a95?q=80&w=2071',
    rating: 4.8,
    releaseDate: '14/03/2024',
    genres: ['Sci-Fi', 'Aventura']
  },
  {
    id: 2,
    title: 'Pobres Criaturas',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070',
    rating: 4.5,
    releaseDate: '01/02/2024',
    genres: ['Drama', 'Fantasia']
  },
  {
    id: 3,
    title: 'Godzilla e Kong: O Novo Império',
    image: 'https://images.unsplash.com/photo-1535979863199-3c77338429a0?q=80&w=1939',
    rating: 4.2,
    releaseDate: '28/03/2024',
    genres: ['Ação', 'Ficção']
  },
  {
    id: 4,
    title: 'Oppenheimer',
    image: 'https://images.unsplash.com/photo-1519124142585-826da1d15720?q=80&w=2070',
    rating: 4.9,
    releaseDate: '20/07/2023',
    genres: ['Drama', 'Biografia']
  },
  {
    id: 5,
    title: 'Os Rejeitados',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070',
    rating: 4.4,
    releaseDate: '25/01/2024',
    genres: ['Comédia', 'Drama']
  },
  {
    id: 6,
    title: 'Bob Marley: One Love',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070',
    rating: 4.3,
    releaseDate: '15/02/2024',
    genres: ['Biografia', 'Musical']
  }
];

const TrendingMovies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const moviesPerPage = 4;
  const totalPages = Math.ceil(trendingMovies.length / moviesPerPage);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + moviesPerPage >= trendingMovies.length ? 0 : prevIndex + moviesPerPage
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - moviesPerPage < 0 ? trendingMovies.length - moviesPerPage : prevIndex - moviesPerPage
    );
  };
  
  const visibleMovies = trendingMovies.slice(currentIndex, currentIndex + moviesPerPage);
  
  return (
    <section className="py-12 md:py-16 bg-rede-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 md:mb-10">
          <h2 className="section-title text-white text-center md:text-left">Em Alta nos Cinemas</h2>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {visibleMovies.map((movie) => (
            <div key={movie.id} className="relative overflow-hidden rounded-lg group">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={movie.image} 
                  alt={movie.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-rede-accent/80 text-white text-xs rounded-md font-medium">
                    {movie.genres[0]}
                  </span>
                  <span className="px-2 py-1 bg-white/20 text-white text-xs rounded-md">
                    {movie.genres[1]}
                  </span>
                </div>
                
                <h3 className="text-white text-base md:text-lg font-semibold mb-1 line-clamp-2">{movie.title}</h3>
                
                <div className="flex justify-between items-center">
                  <span className="text-white/80 text-xs md:text-sm">{movie.releaseDate}</span>
                  <div className="flex items-center text-white">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-xs md:text-sm">{movie.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingMovies;
