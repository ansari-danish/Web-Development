import express from "express";
import { connectDB } from "./db/index.js";
import userRouter from "./routes/user.route.js";

const app = express();
app.use(express.json());
const PORT = 8000;

connectDB("mongodb://127.0.0.1:27017/crud")
  .then(() => {
    console.log("Mongo Connected Successfully");
  })
  .catch((err) => {
    console.log("Error while connecting", err);
  });

app.use("/api", userRouter);

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});

export { app };
