const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const name = req.cookies.username;
  if (name) res.render("index", { name });
  else {
    res.render("/login");
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("username");
  res.render("login");
});

router.get("/login", (req, res) => {
  const name = req.cookies.username;
  if (name) res.render("index");
  res.render("login");
});
router.post("/login", (req, res) => {
  res.cookie("username", req.body.username);
  res.render("index");
});

module.exports = router;
