const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const hbs = require("hbs");
const users = require("./models/kisan");
const mongoose = require("mongoose");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "hbs");

/*app.get("/", (req, res) => {
  const { name } = req.query;
  res.send(`Hey mofo ${name}`);
});*/

app.post("/", async (req, res) => {
  /*let name = req.body.name;*/

  const { pswd, name, phone, Email, city, country } = req.body;
  let ar = [name, pswd, phone, Email, city, country];
  /*res.send(pswd);*/
  res.render("index", { data: ar });

  await users.create({
    name,
    pswd,
    phone,
    Email,
    city,
    country,
  });
  let u = await users.find({});
  console.log(u);
});
/*app.get("/abt", (req, res) => {
  res.send("Hey mofo");
});  */

mongoose.connect("mongodb://127.0.0.1:27017/KisanCart").then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
  });
});
