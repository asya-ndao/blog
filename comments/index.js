import express from "express";
import { randomBytes } from "crypto";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const commentByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
    res.send(commentByPostId[req.params.id] || []);

});

app.post("/posts/:id/comments", (req, res) => {
    const commentId = randomBytes(4).toString("hex");
    const { content } = req.body;

    console.log("Content received: ", req.body);

    const comments = commentByPostId[req.params.id] || [];

    comments.push({ id: commentId, content});

    commentByPostId[req.params.id] = comments;

    res.send(comments).status(201);
});

app.listen(4001, () => {
  console.log("App is listening on port 4001..");
});
