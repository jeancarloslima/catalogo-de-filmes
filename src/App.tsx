import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MovieCarousel from "./components/MovieCarousel";
import MovieDetails from "./components/MovieDetails";

const FILMES = [
  {
    id: "1",
    title: "Drive",
    img: "/images/drive-cover.jpg",
    rating: 4.1,
    synopsis:
      "Driver is a skilled Hollywood stuntman who moonlights as a getaway driver for criminals. Though he projects an icy exterior, lately he’s been warming up to a pretty neighbor named Irene and her young son, Benicio. When Irene’s husband gets out of jail, he enlists Driver’s help in a million-dollar heist. The job goes horribly wrong, and Driver must risk his life to protect Irene and Benicio from the vengeful masterminds behind the robbery.",
  },
  {
    id: "2",
    title: "The Social Network",
    img: "/images/the-social-network-cover.jpg",
    rating: 3.9,
    synopsis:
      "In 2003, Harvard undergrad and computer programmer Mark Zuckerberg begins work on a new concept that eventually turns into the global social network known as Facebook. Six years later, Mark is one of the youngest billionaires ever, but his unprecedented success leads to both personal and legal complications when he ends up on the receiving end of two lawsuits, one involving his former friend.",
  },
  {
    id: "3",
    title: "Memento",
    img: "/images/memento-cover.jpg",
    rating: 4.2,
    synopsis:
      "Leonard Shelby is tracking down the man who raped and murdered his wife. The difficulty of locating his wife’s killer, however, is compounded by the fact that he suffers from a rare, untreatable form of short-term memory loss. Although he can recall details of life before his accident, Leonard cannot remember what happened fifteen minutes ago, where he’s going, or why..",
  },
  {
    id: "4",
    title: "No Country for Old Men",
    img: "/images/no-country-for-old-men-cover.jpg",
    rating: 4.4,
    synopsis:
      "Llewelyn Moss stumbles upon dead bodies, $2 million and a hoard of heroin in a Texas desert, but methodical killer Anton Chigurh comes looking for it, with local sheriff Ed Tom Bell hot on his trail. The roles of prey and predator blur as the violent pursuit of money and justice collide.",
  },
  {
    id: "5",
    title: "Donnie Darko",
    img: "/images/donnie-darko-cover.jpg",
    rating: 4.1,
    synopsis:
      "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a large bunny rabbit that manipulates him to commit a series of crimes.",
  },
  {
    id: "6",
    title: "Arrival",
    img: "/images/arrival-cover.jpg",
    rating: 4.1,
    synopsis:
      "Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.",
  },
  {
    id: "7",
    title: "Hamnet",
    img: "/images/hamnet-cover.jpg",
    rating: 4.1,
    synopsis:
      "The powerful story of love and loss that inspired the creation of Shakespeare’s timeless masterpiece, Hamlet.",
  },
  {
    id: "8",
    title: "Blade Runner 2049",
    img: "/images/blade-runner-2049-cover.jpg",
    rating: 3.8,
    synopsis:
      "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what’s left of society into chaos. K’s discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
  },
  {
    id: "9",
    title: "Pearl",
    img: "/images/pearl-cover.jpg",
    rating: 3.7,
    synopsis: "Trapped on her family’s isolated farm, Pearl must tend to her ailing father under the bitter and overbearing watch of her devout mother. Lusting for a glamorous life like she’s seen in the movies, Pearl’s ambitions, temptations, and repressions collide.",
  },
  {
    id: "10",
    title: "Little Miss Sunshine",
    img: "/images/little-miss-sunshine-cover.jpg",
    rating: 3.9,
    synopsis: "A family loaded with quirky, colorful characters piles into an old van and road trips to California for little Olive to compete in a beauty pageant.",
  },
];

export default function App() {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
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
