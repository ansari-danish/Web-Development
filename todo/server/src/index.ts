import express, { json, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

const prisma = new PrismaClient();

app.post("/post", async (req: Request, res: Response) => {
  try {
    const todo = await prisma.user.create({
      data: {
        todo: req.body.todo,
      },
    });
    return res.status(200).json({ todo });
  } catch (error) {
    return res.status(500).json({ error: "Failed to create todo" });
  }
});

app.get("/todo", async (req: Request, res: Response) => {
  try {
    const todos = await prisma.user.findMany();
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch todos" });
  }
});

app.patch("/todo", async (req: Request, res: Response) => {
  try {
    const id: number = req.body.id;
    const todo: string = req.body.todo;
    const updatedTodo = await prisma.user.update({
      where: { id },
      data: { todo },
    });
    return res.status(200).json(updatedTodo);
  } catch (error) {
    return res.status(500).json({ error: "Failed to update todo" });
  }
});

app.delete("/delete", async (req: Request, res: Response) => {
  try {
    const id: number = req.body.id;
    await prisma.user.delete({ where: { id } });
    return res.status(200).json("Todo deleted");
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete todo" });
  }
});

app.listen(8000, () => {
  console.log("App is running fine on 8000");
});
