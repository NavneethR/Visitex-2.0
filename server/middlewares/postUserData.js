const Visitors = require("../models/VisitorsModel");

const postUserData = async (req, res, next) => {
  try {
    const {
      visitorName,
      employeeName,
      photo,
      reason,
      visitorPhoneNumber,
      companyName,
      companyAddress,
    } = req.body;
    const visitor = new Visitors({
      visitorName,
      employeeName,
      photo,
      reason,
      visitorPhoneNumber,
      companyName,
      companyAddress,
    });
    const data = await visitor.save();
    req.data = data;
    next();
  } catch (error) {
    return res.json({ error: error });
  }
};

module.exports = postUserData;
