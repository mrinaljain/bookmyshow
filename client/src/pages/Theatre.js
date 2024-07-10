import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShowList } from "../api/theatre.api";
import moment from "moment";
function Theatre() {
  const [theatres, setTheatres] = useState([]);
  const params = useParams();
  const movieId = params.movieId;
  const getTheatres = async () => {
    try {
      const value = {
        movieId: movieId,
        date: new Date(),
      };
      const response = await ShowList(value);
      if (response.data.success) {
        console.log("Shows", response.data);
        setTheatres(response.data.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getTheatres();
  }, [movieId]);

  return (
    <>
      {theatres?.map((theatre, index) => (
        <div className="p-4 border-b border-gray-300">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold">PVR Indore</h2>
            </div>
            <div className="flex space-x-4">
              {theatre.shows.map((show) => (
                <Link to={`/seatlayout/${show._id}`}>
                  <button className="border border-gray-300 rounded-md px-4 py-2 text-green-600 hover:bg-gray-200 transition">
                    {moment(show.datetime).format("LT")}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Theatre;
