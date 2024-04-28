const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const hbs = require("hbs");
const users = require("./models/kisan");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
app.use("/user", userRouter);
app.use("/admin", adminRouter);

app.use(express.static(path.dirname("index.html")));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "hbs");

/*app.get("/", (req, res) => {
  const { name } = req.query;
  res.send(`Hey mofo ${name}`);
});*/

app.post("/register", async (req, res) => {
  /*let name = req.body.name;*/

  const { pswd, name, phone, Email, city, country, role } = req.body;
  let ar = [name, pswd, phone, Email, city, country, role];
  /*res.send(pswd);*/
  res.render("index", { data: ar });
  // if (u) {
  //   console.log("Registered as a user");
  // } else if (a) {
  //   console.log("Registered as an admin");
  // }

  await users.create({
    name,
    pswd,
    phone,
    Email,
    city,
    country,
    role,
  });
  let f = await users.find({});
  console.log(f);
});
app.post("/login", async (req, res) => {
  const { password, email } = req.body;
  try {
    let user = await users.findOne({ Email: email });
    if (!user) {
      return res.send("/?error=User not found");
    }
    if (await bcrypt.compare(password, user.pswd)) {
      res.send("logged in");
    } else {
      res.send("wrong Details Entered");
    }
    console.log("email:", email);
    console.log("Password:", password);
    console.log("User Password (Hashed):", user.pswd);
  } catch (e) {
    console.log(e);
  }
});
/*app.get("/abt", (req, res) => {
  res.send("Hey mofo");
});  */

mongoose.connect("mongodb://127.0.0.1:27017/KisanCart").then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
  });
});
