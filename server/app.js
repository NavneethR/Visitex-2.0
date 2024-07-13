const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");
const Visitors = require("./models/VisitorsModel");

const fetchUsers = require("./middlewares/fetchUserData");

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(require("cors")());

app.get("/api/visitors-list", fetchUsers, async (req, res) => {
  try {
    console.log(req.users);
    return res.status(200).json(req.users);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, async () => {
  try {
    await connectDB();
    console.log(`Server listening on port ${port}`);
  } catch (e) {
    console.log("Unexpected error: " + e.message);
  }
});
