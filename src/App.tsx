import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MovieCarousel from './components/MovieCarousel';
import MovieDetails from './components/MovieDetails';

const FILMES = [
  { id: '1', title: 'Drive', img: '/images/drive-cover.jpg', theme: 'Good fast action movie.' },
  { id: '2', title: 'The Social Network', img: '/images/the-social-network-cover.jpg', theme: 'Youth and relationships.' },
  { id: '3', title: 'Memento', img: '/images/memento-cover.jpg', theme: 'Obsession.' },
  { id: '4', title: 'No Country for Old Men', img: '/images/no-country-for-old-men-cover.jpg', theme: 'Tense thriller.' },
  { id: '5', title: 'Donnie Darko', img: '/images/donnie-darko-cover.jpg', theme: 'Sci-fi classic.' },
  { id: '6', title: 'Arrival', img: '/images/arrival-cover.jpg', theme: 'Good fast action movie.' },
  { id: '7', title: 'Hamnet', img: '/images/hamnet-cover.jpg', theme: 'Youth and relationships.' },
  { id: '8', title: 'Blade Runner 2049', img: '/images/blade-runner-2049-cover.jpg', theme: 'Obsession.' },
  { id: '9', title: 'Pearl', img: '/images/pearl-cover.jpg', theme: 'Tense thriller.' },
  { id: '10', title: 'Little Miss Sunshine', img: '/images/little-miss-sunshine-cover.jpg', theme: 'Sci-fi classic.' }
];

export default function App() {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Filmes em Alta</h1>

      <MovieCarousel 
        filmes={FILMES} 
        onSelect={setFilmeSelecionado} 
        isModalOpen={!!filmeSelecionado} 
      />

      <AnimatePresence>
        {filmeSelecionado && (
          <MovieDetails 
            filme={filmeSelecionado} 
            onClose={() => setFilmeSelecionado(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}