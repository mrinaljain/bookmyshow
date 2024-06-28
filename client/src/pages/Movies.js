import React from "react";
import MovieCard from "../components/MovieCard";

import useMovies from "../utils/hooks/useMovies.js";

function Movies() {
  const movies = useMovies() || [];
  if (movies.length === 0) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="flex flex-wrap gap-5 max-w-[85%] mx-auto justify-start justify-items-start">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    );
  }
}

export default Movies;
