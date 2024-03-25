const express = require("express");
const data = require("./MOCK_DATA.json");
const { json } = require("express");
const fs = require("fs");
const { isFunction } = require("util");

const app = express();
const PORT = 8000;
app.use(json());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});

app.get("/users", (req, res) => {
  const ul = data.map((item) => {
    return `<li>${item.first_name}</li>`;
  });
  const list = `<ul>${ul}</ul>`;
  return res.send(list);
});

app.get("/api/users", (req, res) => {
  return res.status(200).json(data);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const finalArr = data.find((item) => item.id === id);
  return res.send(finalArr);
});

app.post("/api/users", (req, res) => {
  const { first_name, last_name, email, gender, wealth } = req.body;
  const id = data.length + 1;
  const dataObj = {
    id: id,
    first_name: first_name,
    last_name: last_name,
    email: email,
    gender: gender,
    wealth: wealth,
  };
  data.push(dataObj);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err) => {
    if (err) {
      return res.send("Error");
    } else {
      return res.send("Success");
    }
  });
});

app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const finalArr = data.filter((item) => item.id !== id);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(finalArr), (err) => {
    if (err) {
      return res.send("Error");
    } else {
      return res.send("Success");
    }
  });
});

app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const { first_name, last_name, email, gender, wealth } = req.body;
  const findArr = data.find((item) => item.id === id);
  const index = data.indexOf(findArr);
  if (first_name) {
    findArr.first_name = first_name;
  }
  if (last_name) {
    findArr.last_name = last_name;
  }
  if (email) {
    findArr.email = email;
  }
  if (gender) {
    findArr.gender = gender;
  }
  if (wealth) {
    findArr.wealth = wealth;
  }
  data[index] = findArr;
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err) => {
    if (err) {
      return res.send("Error");
    } else {
      return res.send("Success");
    }
  });
});
