const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("Here");
  res.render("index", { text: "world" });
});

const userRouter = require("./app/routes/users");

app.use("/users", userRouter);

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.listen(3000);
