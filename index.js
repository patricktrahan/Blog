import express from "express";
import ejs from "ejs";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let posts = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
  });

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/new-post", (req, res) => {
  res.render("new-post.ejs");
});

app.post("/posts", (req, res) => {
    const postTitle = req.body.title;
    const postContent = req.body.content;
    const postObj = { title: postTitle, content: postContent };
    posts.push(postObj);
    console.log("New post created:", posts);
    res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
