const express = require("express");
const mongoose = require("mongoose");
const { json } = require("express");

const app = express();
const PORT = 8000;
app.use(json());
app.use(express.urlencoded());

mongoose
  .connect("mongodb://127.0.0.1:27017/crud")
  .then(() => {
    console.log("Mongo Connected Successfully");
  })
  .catch((err) => {
    console.log("Error while connecting", err);
  });

const userScheme = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userScheme);

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});

app.get("/users", async (req, res) => {
  const allData = await User.find({});
  const ul = allData
    .map((item) => {
      return `<li>${item.first_name} ${item.email}</li>`;
    })
    .join("");
  const list = `<ul>${ul}</ul>`;
  return res.send(list);
});

app.get("/api/users", async (req, res) => {
  const allUsers = await User.find({});
  return res.status(200).json(allUsers);
});

app.get("/api/users/:id", async (req, res) => {
  const id = req.params.id;
  const finalArr = await User.findById(id);
  if (!finalArr) {
    return res.status(403).json("User doesn't exist");
  }
  return res.send(finalArr);
});

app.post("/api/users", async (req, res) => {
  const { first_name, last_name, email, gender, jobTitle } = req.body;
  console.log({ first_name, last_name, email, gender, jobTitle });

  if (!first_name || !last_name || !email || !gender || !jobTitle) {
    return res.status(403).json("Data is not send");
  }

  await User.create({
    first_name: first_name,
    last_name: last_name,
    email: email,
    gender: gender,
    jobTitle: jobTitle,
  });

  return res.send("Success");
});

app.delete("/api/users/:id", async (req, res) => {
  const id = req.params.id;
  const finalArr = await User.findByIdAndDelete(id);
  return res.status(200).send("Success");
});

app.patch("/api/users/:id", async (req, res) => {
  const id = req.params.id;
  const { first_name, last_name, email, gender, wealth } = req.body;
  const response = await User.findByIdAndUpdate(id, {
    first_name,
    last_name,
    email,
    gender,
    wealth,
  });
  return res.send(response);
});
