import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface MovieCardProps {
  imageURL: string;
  title: string;
  year: number;
  rating: number;
}

export default function MovieCard({
  imageURL,
  title,
  year,
  rating,
}: MovieCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.05 }}
      className="p-4"
    >
      <div className="w-50 h-60 border rounded-lg relative hover:cursor-pointer">
        <img
          src={imageURL}
          alt={`${title} capa`}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
        />
      </div>

      {hovered && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-bold">
              {title} - ({year})
            </h2>
            <p>⭐ {rating}</p>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
}
