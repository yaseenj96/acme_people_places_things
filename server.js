const {
  db,
  models: { Person, Place, Thing, Souvenir },
} = require("./db/db");

const express = require("express");
const app = express();

//HTML page
const getHTML = require("./html.js");

app.get("/", async (req, res, next) => {
  try {
    res.send(getHTML());
  } catch (error) {
    next(error);
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  `Server listening at localhost:${PORT}`;
});
