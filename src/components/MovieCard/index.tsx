import { motion } from 'framer-motion';
import { Movie } from '../../types/types';

interface MovieCardProps {
  filme: Movie;
  onClick: () => void;
}

export default function MovieCard({ filme, onClick }: MovieCardProps) {
  return (
    <motion.div
      layoutId={`card-container-${filme.id}`}
      onClick={onClick}
      className="w-48 h-72 rounded-xl overflow-hidden shrink-0 relative shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.img
        layoutId={`poster-${filme.id}`}
        src={filme.img}
        alt={filme.title}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}