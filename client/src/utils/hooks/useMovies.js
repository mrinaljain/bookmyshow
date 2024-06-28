import { useEffect, useState } from "react";
import { MovieList } from "../../api/movie.api";

function useMovies() {
  const [movies, setMovies] = useState([]);
  async function getMovies() {
    try {
      const response = await MovieList();
      setMovies(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);

  return movies;
}

export default useMovies;
