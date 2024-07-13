const mongoose = require("mongoose");

const connectDB = async () => {
  return mongoose
    .connect(process.env.ATLAS_URI)
    .then(() => {
      console.log("App connected to Database successfully");
    })
    .catch((e) => {
      console.log("Unexpected error: " + e);
    });
};

module.exports = connectDB;
