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

  function payNow(e) {
    var options = {
      key: "rzp_test_ZSO3Lh63NllsR7", // Enter the Key ID generated from the Dashboard
      amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: "order_Oe9mqS36TUwf97", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        // TODO: verifypayment from backend by sending this detaild to backend
        //pay_OeA9iHHlDgyKRs
        //order_Oe9mqS36TUwf97
        //e34a301121063266d56b116353129b6827d2bf2714a5573e0b8b33e917935a8d
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  }
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
      <button
        id="rzp-button1"
        className="bg-green-200  px-2 py-2 rounded-md"
        onClick={payNow}
      >
        Pay with Razorpay
      </button>
    </div>
  );
}

export default SeatMap;
