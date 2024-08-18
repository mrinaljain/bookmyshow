import Razorpay from "razorpay";

var instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const generateOrder = async () => {
  var options = {
    amount: 50000, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  instance.orders.create(options, function (err, order) {
    console.log("Order Details", order);
  });
};

export const verify = async () => {
  //Create a signature in your server using the following attributes:
  //   order_id, razorpay_payment_id, key_secret;
  const order_id = "order_Oe9mqS36TUwf97";
  const razorpay_payment_id = "pay_OeA9iHHlDgyKRs";
  const secret = "g7iyDaGSMD1MYbZ4j1grQMbC";

  generated_signature = hmac_sha256(
    order_id + "|" + razorpay_payment_id,
    secret
  );
  console.log("generated_signature:", generated_signature);
  if (generated_signature == razorpay_signature) {
    console.log("Payment Successfull.....");
  }
};

// initiate razorpay

// integrate orders api on server
// As soon as user lands on payment page ( call orders api from server)

// user clicks on pay now button ( call rzp,open())
// add checkout parameters
// checkout popup opens

// returns order_id, payment_id , signature

// store fields in server

// verify payments signature on backend

// https://youtu.be/OgHQ16OzLkE
