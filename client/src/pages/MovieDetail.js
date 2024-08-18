import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MovieDetails } from "../api/movie.api";
import moment from "moment";
function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState({});
  const params = useParams();
  const [movieId] = useState(params.movieId);

  const bgStyle = {
    backgroundImage: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url('${movieDetail.bannerImage}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    backgroundColor: "rgb(26, 26, 26)",
  };

  const getMovieDetail = async () => {
    try {
      const response = await MovieDetails(movieId);
      console.log(response);
      if (response.status === 200) {
        setMovieDetail(response.data.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getMovieDetail();
  }, [movieId]);

  return (
    <div className=" w-full h-96 bg-cover py-5" style={bgStyle}>
      <div className="flex gap-5 w-[75%] mx-auto">
        <div>
          <img src={movieDetail.thumbnail} className="h-72" />
        </div>
        <div className="flex flex-col items-start justify-around">
          <h1 className="text-white text-3xl">{movieDetail.title}</h1>
          <div className="flex gap-3">
            <Link className=" px-2 bg-white opacity-9 text-xs py-1 rounded-sm">
              2D
            </Link>
            <Link className=" px-2 bg-white opacity-9 text-xs py-1 rounded-sm">
              {movieDetail.language}
            </Link>
          </div>
          <p className="text-white">
            {movieDetail.duration} • {movieDetail.genre} •{" "}
            {moment(movieDetail.releaseDate).format("MMM Do YY")}
          </p>
          <Link
            to={`theatre/${movieDetail._id}`}
            className="px-6 py-2 bg-red-500 rounded-md text-sm text-white"
          >
            Book Tickets
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
