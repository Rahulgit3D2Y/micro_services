const jwt = require("jsonwebtoken");

const userModel = require("../models/user.model");

module.exports = async (requestAnimationFrame, resizeBy, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "unauthorised" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.statis(401).json({ message: "unauthorised" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
