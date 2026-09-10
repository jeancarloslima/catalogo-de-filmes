import { motion } from "framer-motion";
import MovieCard from "../MovieCard";

const movies = [
  {
    imageURL: "",
    title: "The Social Network",
    year: 2010,
    rating: 3.9,
    synopsis: "",
  },
  {
    imageURL: "",
    title: "Little Miss Sunshine",
    year: 2006,
    rating: 4.2,
    synopsis: "",
  },
  {
    imageURL: "",
    title: "Donnie Darko",
    year: 2001,
    rating: 3.9,
    synopsis: "",
  },
  {
    imageURL: "",
    title: "Arrival",
    year: 2016,
    rating: 4.1,
    synopsis: "",
  },
  {
    imageURL: "",
    title: "Pearl",
    year: 2022,
    rating: 3.7,
    synopsis: "",
  },
  {
    imageURL: "",
    title: "No Country For Old Men",
    year: 2007,
    rating: 4.3,
    synopsis: "",
  },
  {
    imageURL: "",
    title: "Blade Runner 2049",
    year: 2017,
    rating: 4.1,
    synopsis: "",
  },
  {
    imageURL: "",
    title: "Hamnet",
    year: 2025,
    rating: 4.2,
    synopsis: "",
  },
  {
    imageURL: "",
    title: "Drive",
    year: 2011,
    rating: 3.9,
    synopsis: "",
  },
  {
    imageURL: "",
    title: "Memento",
    year: 2000,
    rating: 4.1,
    synopsis: "",
  },
];

export default function MovieCarousel() {
  return (
    <motion.div 
        drag="x"
        dragConstraints={{
            right: 50,
            left: 50,
        }}
        className="min-h-85 flex gap-2 p-4"
    >
      {movies.map((movie) => (
        <MovieCard
          key={movie.title}
          imageURL={movie.imageURL}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
        />
      ))}
    </motion.div>
  );
}
