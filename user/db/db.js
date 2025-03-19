const mongoose = require("mongoose");
function connect() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("user service connected to MongoDb");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connect;
