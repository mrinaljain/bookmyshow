import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShowDetail } from "../api/theatre.api";

function SeatMap() {
  const [showDetail, setShowDetail] = useState({});
  const params = useParams();
  const showId = params.showId;

  const getShowDetail = async () => {
    try {
      const response = await ShowDetail(showId);
      if (response.data.success) {
        setShowDetail(response.data.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getShowDetail();
  }, [showId]);

  return (
    <div className="app">
      <h1 className="text-3xl font-bold text-center mt-8">Select Your Seats</h1>
      {showDetail?.seats?.map((row) => (
        <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Rs. 100 Gold</h2>
          <div className="grid grid-cols-5 gap-4">
            {/* {row.map((col)=>{})} */}

            {/* Row F */}
            <div className="text-center font-bold">F</div>
            <button className="border border-green-500 rounded-md text-green-500 hover:bg-green-100 transition p-2">
              1
            </button>
            <button className="border border-green-500 rounded-md text-green-500 hover:bg-green-100 transition p-2">
              2
            </button>
            <button className="border border-green-500 rounded-md text-green-500 hover:bg-green-100 transition p-2">
              3
            </button>
            <button className="border border-green-500 rounded-md text-green-500 hover:bg-green-100 transition p-2">
              4
            </button>

            {/* Row E */}
            <div className="text-center font-bold">E</div>
            <button className="border border-green-500 rounded-md text-green-500 hover:bg-green-100 transition p-2">
              1
            </button>
            <button className="border border-green-500 rounded-md text-green-500 hover:bg-green-100 transition p-2">
              2
            </button>
            <button className="border border-green-500 rounded-md text-green-500 hover:bg-green-100 transition p-2">
              3
            </button>
            <button className="border border-green-500 rounded-md text-green-500 hover:bg-green-100 transition p-2">
              4
            </button>

            {/* Row D */}
            <div className="text-center font-bold">D</div>
            <button className="border border-green-500 rounded-md text-green-500 hover:bg-green-100 transition p-2">
              1
            </button>
            <button className="border border-green-500 rounded-md text-green-500 hover:bg-green-100 transition p-2">
              2
            </button>
            <button className="border border-green-500 rounded-md text-green-500 hover:bg-green-100 transition p-2">
              3
            </button>
            <button className="border border-green-500 rounded-md text-green-500 hover:bg-green-100 transition p-2">
              4
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SeatMap;
