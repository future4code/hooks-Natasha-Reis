import { AddressInfo } from "net";
import express from "express";
import { type } from "os";
import { Post, postMock, userMock } from "./mocks";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.get("/users", (req, res) => {
  res.json(userMock);
});

app.get("/posts", (req, res) => {
  res.json(postMock);
});

app.get("/posts/user/:userId", (req, res) => {
  const filteredPosts: Array<Post> = postMock.filter(
    (post) => post.userId === Number(req.params.userId)
  );

  res.json(filteredPosts);
});
