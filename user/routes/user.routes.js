const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controller");
const authMiddleWare = require("../middleware/authMiddleWare");
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/profile", authMiddleWare, userController.profile);
module.exports = router;
