const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");

router.post("/registerUser", UserController.registerUser);
//http://localhost:3002/api/user/listUser/
router.get("/listUser/:name?",Auth,ValidateUser,UserController.listUser);///:name? de esta forma el parametro es opcional, /:name sin el signo debe ir el parametro

module.exports = router;