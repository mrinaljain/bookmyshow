import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { MOVIES_LIST, OPTIONS } from "../utils/constants";

function Movies() {
  const [movies, setMovies] = useState([]);
  async function getMovies() {
    try {
      const response = await fetch(MOVIES_LIST, OPTIONS);

      if (response.status === 200) {
        const data = await response.json();
        setMovies(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);

  const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // newArr.length = 10;
  return (
    <div className="flex flex-wrap gap-5 max-w-[85%] mx-auto justify-start justify-items-start">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
