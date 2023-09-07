const express = require("express");
const routes = express();
const UserController = require("../controller/userController");
const { userValidator } = require("../middleware/validation_01");
const {isAuthorized ,isAdmin}= require('../middleware/auth');


routes.get("/all", UserController.getAll);
routes.get("/getUserByID/:id", UserController.getUserByID);
routes.patch("/updateUserByID", UserController.updateUserByID);
routes.post("/create", isAuthorized,isAdmin,userValidator.create, UserController.create);
routes.delete("/deleteUserByID",UserController.deleteUserByID);

module.exports = routes;