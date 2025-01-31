import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import navigation

const SliderComponent = () => {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    axios.get("http://localhost:8080/auth/getallmovies")
      .then((res) => {
        console.log("Fetched movies:", res.data);
        setMovies(res.data);
      })
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  const onPrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const onNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <div className="px-4 py-8 mx-auto overflow-hidden max-w-7xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 md:text-2xl">Recommended Movies</h2>
        <div className="flex space-x-2">
          <motion.button whileTap={{ scale: 0.9 }} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300" onClick={onPrevClick}>
            ◀
          </motion.button>
          <motion.button whileTap={{ scale: 0.9 }} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300" onClick={onNextClick}>
            ▶
          </motion.button>
        </div>
      </div>

      {/* Main Slider Wrapper */}
      <div className="relative overflow-hidden">
        <motion.div ref={sliderRef} className="flex space-x-4 overflow-x-auto scrollbar-hidden snap-x snap-mandatory"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <motion.div className="flex-none w-[220px] md:w-[240px] snap-center" key={movie.id} transition={{ duration: 0.3 }}
                onClick={() => navigate(`/movie/${movie.id}`)} // Navigate to MovieBooking on click
              >
                <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-lg h-[420px] cursor-pointer">
                  <motion.img src={movie.poster || "https://via.placeholder.com/240x360"} alt={movie.title}
                    className="object-cover w-full h-[320px]" transition={{ duration: 0.3 }} />
                  <div className="p-3">
                    <h3 className="text-lg font-bold truncate">{movie.title}</h3>
                    <p className="text-sm text-gray-600">{movie.genre.join(", ")}</p>
                    <p className="text-sm text-gray-500">⭐ {movie.rating}</p>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500">No movies found</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SliderComponent;
