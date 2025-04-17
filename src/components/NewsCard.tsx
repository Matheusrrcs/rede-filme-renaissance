
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface NewsCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tag?: string;
  url: string;
}

const NewsCard = ({ image, title, excerpt, date, category, tag, url }: NewsCardProps) => {
  return (
    <article className="rounded-lg overflow-hidden shadow-card card-hover bg-white">
      {/* Image */}
      <a href={url} className="block relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {tag && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-rede-accent text-white text-xs rounded-full font-medium">
            {tag}
          </span>
        )}
      </a>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <Badge variant="outline" className="bg-rede-light text-rede-primary border-rede-light">
            {category}
          </Badge>
          <span className="flex items-center text-gray-500 text-xs">
            <Calendar className="h-3 w-3 mr-1" />
            {date}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 hover:text-rede-secondary transition-colors">
          <a href={url}>{title}</a>
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {excerpt}
        </p>
        
        <a 
          href={url} 
          className="text-rede-secondary font-medium hover:text-rede-primary transition-colors text-sm inline-flex items-center"
        >
          Continuar lendo
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
            <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </article>
  );
};

export default NewsCard;
