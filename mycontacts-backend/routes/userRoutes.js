const express = require("express");
const validateToken=require("../middleware/validateTokenHandler")
const {
  registerUser,
  LoginUser,
  currentUser,
} = require("../controllers/userController");

const router = express.Router();
router.post("/register", registerUser);

router.post("/login", LoginUser);

router.post("/current",validateToken, currentUser);

module.exports = router;
