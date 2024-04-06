import mongoose from "mongoose";
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

export { User };
