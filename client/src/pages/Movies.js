import React from "react";
import MovieCard from "../components/MovieCard";

function Movies() {
  const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // newArr.length = 10;
  return (
    <div className="flex flex-wrap gap-5 max-w-[85%] mx-auto justify-start justify-items-start">
      {newArr.map((item, index) => (
        <MovieCard key={index} />
      ))}
    </div>
  );
}

export default Movies;
