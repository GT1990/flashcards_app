const express = require("express");
const router = express.Router();
const { data } = require("../data/flashcardData.json");
const { cards } = data; // same as cards = data.cards

router.get("/", (req, res) => {
  const id = Math.floor(Math.random() * cards.length);
  const name = req.cookies.username;
  const { question } = cards[id];
  const { hint } = cards[id];
  const templateData = { id, name, question, hint };
  res.render("card-front", templateData);
});

router.get("/card-front/:id", (req, res) => {
  const { id } = req.params;
  const name = req.cookies.username;
  const { question } = cards[id];
  const { hint } = cards[id];
  const templateData = { id, name, question, hint };
  res.render("card-front", templateData);
});

router.get("/card-back/:id", (req, res) => {
  const { id } = req.params;
  const name = req.cookies.username;
  const { answer } = cards[id];
  const templateData = { id, name, answer };
  res.render("card-back", templateData);
});

module.exports = router;
