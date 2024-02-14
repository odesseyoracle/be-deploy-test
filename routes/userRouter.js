const express = require("express");
const {
  getUser,
  postUser,
  deleteUser,
} = require("../controller/userController");
// const postUser = require("../controller/userController");
// const deleteUser = require("../controller/userController");
const router = express.Router();

router.route("/").get(getUser).post(postUser);

router.delete("/:id", deleteUser);

module.exports = router;
