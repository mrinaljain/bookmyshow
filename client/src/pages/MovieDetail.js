import React from "react";
import { Link } from "react-router-dom";

function MovieDetail() {
  const bgStyle = {
    backgroundImage:
      "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url('https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/chandu-champion-et00363650-1715754023.jpg')",
  };
  return (
    <div>
      <div className=" w-full h-96 bg-cover" style={bgStyle}>
        <div className="flex gap-5 w-[90%] mx-auto">
          <div>
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chandu-champion-et00363650-1715754023.jpg" />
          </div>
          <div className="flex flex-col items-start justify-around">
            <h1 className="text-white text-3xl">Chandu Champion</h1>
            <div className="flex gap-3">
              <Link className=" px-2 bg-white opacity-9 text-xs py-1 rounded-sm">
                2D
              </Link>
              <Link className=" px-2 bg-white opacity-9 text-xs py-1 rounded-sm">
                Hindi
              </Link>
            </div>
            <p className="text-white">
              2h 23m • Biography , Drama , Sports • UA • 14 Jun, 2024
            </p>
            <Link
              to="theatre"
              className="px-6 py-2 bg-red-500 rounded-md text-sm text-white"
            >
              Book Tickets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
