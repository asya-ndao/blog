import express from "express";
import { randomBytes } from "crypto";

const app = express();

app.use(express.json());

const commentByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
    res.send(commentByPostId[req.params.id] || []);

});

app.post("/posts/:id/comments", (req, res) => {
    const commentId = randomBytes(4).toString("hex");
    const { content } = req.body;

    const comments = commentByPostId[req.params.id] || [];

    comments.push({ id: commentId, content});

    commentByPostId[req.params.id] = comments;

    res.send(comments).status(201);
});

app.listen(4001, () => {
  console.log("App is listening in port 4001..");
});
