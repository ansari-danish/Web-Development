import { User } from "../models/user.models.js";
const handleAllUser = async (req, res) => {
  const allData = await User.find({});
  const ul = allData
    .map((item) => {
      return `<li>${item.first_name} ${item.email}</li>`;
    })
    .join("");
  const list = `<ul>${ul}</ul>`;
  return res.send(list);
};

const handleAllData = async (req, res) => {
  const allUsers = await User.find({});
  return res.status(200).json(allUsers);
};

const handleUserById = async (req, res) => {
  const id = req.params.id;
  const finalArr = await User.findById(id);
  if (!finalArr) {
    return res.status(403).json("User doesn't exist");
  }
  return res.send(finalArr);
};

const handleCreateUser = async (req, res) => {
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
};

const handleDeleteUser = async (req, res) => {
  const id = req.params.id;
  const finalArr = await User.findByIdAndDelete(id);
  return res.status(200).send("Success");
};

const handleEditUser = async (req, res) => {
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
};

export {
  handleAllUser,
  handleAllData,
  handleUserById,
  handleCreateUser,
  handleDeleteUser,
  handleEditUser,
};
