export const booking = (req, res) => {
  try {
    // get api parameters from here
    // generate payment URL of third party
    // generate order
    // save order in DB
    // respond with the payment URL
    res.status(200).json({ data: req.body });
  } catch (error) {}
};

export const paymentstatus = (req, res) => {
  try {
    // based on payment from frontend
    // get details from post API
    // save payment status
    // verify payment from backend polling
    // add bookings into bookings table
    // send confirmation back to user
  } catch (error) {}
};
