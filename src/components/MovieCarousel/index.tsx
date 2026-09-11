import { motion } from "framer-motion";
import MovieCard from "../MovieCard";
import { useRef } from "react";

const movies = [
  {
    imageURL: "/images/the-social-network-cover.jpg",
    title: "The Social Network",
    year: 2010,
    rating: 3.9,
    synopsis: `You don’t get to 500 million friends without making a few enemies.

In 2003, Harvard undergrad and computer programmer Mark Zuckerberg begins work on a new concept that eventually turns into the global social network known as Facebook. Six years later, Mark is one of the youngest billionaires ever, but his unprecedented success leads to both personal and legal complications when he ends up on the receiving end of two lawsuits, one involving his former friend.
`
  },
  {
    imageURL: "/images/little-miss-sunshine-cover.jpg",
    title: "Little Miss Sunshine",
    year: 2006,
    rating: 4.2,
    synopsis: "",
  },
  {
    imageURL: "/images/donnie-darko-cover.jpg",
    title: "Donnie Darko",
    year: 2001,
    rating: 3.9,
    synopsis: "",
  },
  {
    imageURL: "/images/arrival-cover.jpg",
    title: "Arrival",
    year: 2016,
    rating: 4.1,
    synopsis: "",
  },
  {
    imageURL: "/images/pearl-cover.jpg",
    title: "Pearl",
    year: 2022,
    rating: 3.7,
    synopsis: "",
  },
  {
    imageURL: "/images/no-country-for-old-men-cover.jpg",
    title: "No Country For Old Men",
    year: 2007,
    rating: 4.3,
    synopsis: "",
  },
  {
    imageURL: "/images/blade-runner-2049-cover.jpg",
    title: "Blade Runner 2049",
    year: 2017,
    rating: 4.1,
    synopsis: "",
  },
  {
    imageURL: "/images/hamnet-cover.jpg",
    title: "Hamnet",
    year: 2025,
    rating: 4.2,
    synopsis: "",
  },
  {
    imageURL: "/images/drive-cover.jpg",
    title: "Drive",
    year: 2011,
    rating: 3.9,
    synopsis: "",
  },
  {
    imageURL: "/images/memento-cover.jpg",
    title: "Memento",
    year: 2000,
    rating: 4.1,
    synopsis: "",
  },
];

export default function MovieCarousel() {
  const constraintRef = useRef(null);

  return (
    <motion.div
      ref={constraintRef}
      className="min-h-95 p-4 bg-red-300 self-start"
    >
      <motion.div drag="x" className="flex gap-2">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            imageURL={movie.imageURL}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            synopsis={movie.synopsis}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
