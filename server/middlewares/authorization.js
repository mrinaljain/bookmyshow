import User from "../models/user.model.js";

const isAuthorised = (role) => {
  return async (req, res, next) => {
    try {
      const userId = req.body.id;
      const user = await User.findById(userId);
      if (user && user.role.toUpperCase() == role.toUpperCase()) {
        next();
      } else {
        res
          .status(401)
          .send({ success: false, message: "Unauthorised access" });
      }
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };
};

export default isAuthorised;


//authorization se yaha aaayega
// yaha userid ki help se user ki detail nikalenge
// usme check karenge uska role
// role k according 403 ya next bejenge
