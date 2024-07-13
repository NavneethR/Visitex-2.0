const User = require("../models/VisitorsModel");

const fetchUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    req.users = users;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = fetchUsers;
