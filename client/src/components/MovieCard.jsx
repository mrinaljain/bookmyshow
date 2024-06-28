import React from 'react'
import { Link } from 'react-router-dom';

function MovieCard(props) {
   const { movieId, title, genre, releaseDate, thumbnail } = props.movie;
   return (
      <Link to={"/movies/" + movieId} className='w-[17%] rounded-md' >
         <div >
            <img
               className='rounded-md'
               src={thumbnail} />
            <h3 className='font-light'>{title}</h3>
            <p className='text-gray-400 font-extralight text-sm'>{genre}</p>
         </div>
      </Link>
   )
}

export default MovieCard;

// TODO:  SHOW date in a nice way
// TODO : SHOW image in a proper way