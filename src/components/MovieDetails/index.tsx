import { motion } from "framer-motion";

interface MovieCardProps {
  imageURL: string;
  title: string;
  year: number;
  rating: number;
  synopsis: string;
  closeModal: () => void;
}

const container = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const animatedItem = {
  hidden: { opacity: 0, x: 0 },
  visible: { opacity: 1, x: 0 },
};

export default function MovieDetails({
  imageURL,
  title,
  year,
  rating,
  synopsis,
  closeModal
}: MovieCardProps) {

  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex items-center justify-center bg-black/50 overflow-hidden z-50">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-100 p-4 pt-10 flex flex-col gap-4 rounded-xl text-center bg-white text-black relative"
      >
        <motion.button onClick={closeModal} className="absolute top-2 right-4 text-2xl font-bold text-red-500 hover:cursor-pointer">X</motion.button>
        <motion.img variants={animatedItem} src={imageURL} alt={`Capa ${title}`} className="h-100" />
        <motion.h2 variants={animatedItem} className="text-2xl font-bold">{title} - ({year})</motion.h2>
        <motion.span variants={animatedItem} className="block bg-red-300 text-xl">⭐ {rating}</motion.span>
        <motion.p variants={animatedItem} className="text-justify text-sm">{synopsis}</motion.p>
      </motion.div>
    </div>
  );
}
