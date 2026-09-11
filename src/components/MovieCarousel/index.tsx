import { useRef } from 'react';
import { motion } from 'framer-motion';
import MovieCard from '../MovieCard';
import { Movie } from '../../types/types';

interface MovieCarouselProps {
  filmes: Movie[];
  onSelect: (filme: Movie) => void;
  isModalOpen: boolean;
}

export default function MovieCarousel({ filmes, onSelect, isModalOpen }: MovieCarouselProps) {
  const carouselRef = useRef(null);

  return (
    <div ref={carouselRef} className="overflow-hidden w-full py-4">
      <motion.div
        className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
        drag={isModalOpen ? false : "x"}
        dragConstraints={carouselRef}
      >
        {filmes.map((filme) => (
          <MovieCard 
            key={filme.id} 
            filme={filme} 
            onClick={() => onSelect(filme)} 
          />
        ))}
      </motion.div>
    </div>
  );
}