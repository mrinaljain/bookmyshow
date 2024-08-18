import React from 'react'
import useMovies from '../utils/hooks/useMovies';
import { DeleteMovie } from '../api/movie.api';

function MovieList() {
   const movies = useMovies() || [];
   async function deleteMovie(movieId) {
      try {
         const response = await DeleteMovie(movieId);
         if (response.status === 200) {
            console.log('Movie Deleted');
         } else { }
      } catch (error) {
         console.log(error.message);
      }
   }
   return (
      <div className="container mx-auto px-4 py-8">
         <h1 className="text-3xl font-bold mb-6">Movies</h1>
         <div className="space-y-6">
            {movies.map((movie) => (
               <div key={movie._id} className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={movie.thumbnail} alt={movie.title} className="w-40 h-60 object-cover" />
                  <div className="p-4 flex flex-col justify-between items-start">
                     <div>
                        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
                        <p className="text-gray-700 mb-2">{movie.description}</p>
                        <p className="text-gray-700 mb-2"><strong>Genre:</strong> {movie.genre}</p>
                        <p className="text-gray-700 mb-2"><strong>Duration:</strong> {movie.duration} minutes</p>
                        <p className="text-gray-700 mb-2"><strong>Language:</strong> {movie.language}</p>
                        <p className="text-gray-700 mb-2"><strong>Release Date:</strong> {new Date(movie.releaseDate).toLocaleDateString()}</p>
                        <p className="text-gray-700 mb-2"><strong>Rating:</strong> {movie.rating}/10</p>
                     </div>
                     <div className="mt-4">
                        <h3 className="text-lg font-bold mb-2">Cast:</h3>
                        <div className="flex space-x-4">
                           {movie.cast.map((actor) => (
                              <div key={actor._id} className="text-center">
                                 <img src={actor.image} alt={actor.name} className="w-16 h-16 rounded-full object-cover mx-auto" />
                                 <p className="text-gray-700 mt-2">{actor.name}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                     <button
                        onClick={() => deleteMovie(movie.movieId)}
                        className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                     >
                        Delete
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default MovieList;