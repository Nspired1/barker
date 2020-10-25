const express = require("express");
const router = express.Router();
const { signup, signin } = require("../handlers/authHandler");

//when router receives post request to http/../signup, run signup function
router.post("/signup", signup);

router.post("/signin", signin);

module.exports = router;