const Visitor = require("../models/VisitorsModel");

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
