const express = require("express");
const router = express.Router();
const { signup } = require("../handlers/authHandler");

//when router receives post request to http/../signup, run signup function
router.post("/signup", signup);

module.exports = router;