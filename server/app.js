const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");

const fetchUsers = require("./middlewares/fetchUserData");

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(require("cors")());

app.get("/api/visitors-list", fetchUsers, async (req, res) => {
  try {
    return res.status(200).json(req.users);
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/visitors", async (req, res) => {
  try {
    const visitorData = req.body;
    const newVisitor = new Visitor(visitorData);

    await newVisitor.save();

    res.status(201).json({ message: "Visitor data saved successfully" });
  } catch (error) {
    console.error("Error saving visitor data:", error);
    res.status(500).json({ message: "Failed to save visitor data" });
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
