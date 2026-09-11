import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Movie } from '../../types/types';

interface MovieDetailsProps {
    filme: Movie;
    onClose: () => void;
}

export default function MovieDetails({ filme, onClose }: MovieDetailsProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
      />
      <motion.div
        layoutId={`card-container-${filme.id}`}
        className="relative z-10 bg-zinc-900 rounded-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden shadow-2xl"
      >
        <motion.img
          layoutId={`poster-${filme.id}`}
          src={filme.img}
          alt={filme.title}
          className="w-full md:w-1/2 object-cover md:h-[600px]"
        />
        <div className="w-[50%] p-8 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold mb-4"
          >
            {filme.title}
          </motion.h2>
          <motion.span className='max-w-20 py-1 px-3 mb-4 bg-red-500 inline-flex rounded'>
           ⭐ {filme.rating}
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg text-justify tracking-wider mb-8"
          >
            {filme.synopsis}
          </motion.p>
          

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={onClose}
            className="mt-auto bg-red-500 hover:bg-red-400 py-3 px-6 rounded-lg font-medium self-start hover:cursor-pointer"
          >
            Voltar
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}