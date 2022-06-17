const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("User new form");
});

router.post("/", (req, res) => {
  res.send("Coucou");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send("User Get " + req.params.id);
  })
  .put((req, res) => {
    res.send("User Update " + req.params.id);
  })
  .delete((req, res) => {
    res.send("User delete " + req.params.id);
  });

router.param("id", (req, res, next, id) => {
  console.log(id);
});

module.exports = router;
