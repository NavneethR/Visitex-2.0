const mongoose = require("mongoose");

const VisitorSchema = mongoose.Schema({
  visitorName: { type: String },
  employeeName: { type: String },
  reason: { type: String },
  visitorPhoneNumber: { type: String },
  companyName: { type: String },
  companyAddress: { type: String },
  enterTime: { type: Date },
  exitTime: { type: Date },
});

const Visitors = mongoose.model("Visitors-list", VisitorSchema);

module.exports = Visitors;
