import express from "express";
import bodyparser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { blogs });
});

app.get("/blogs", (req, res) => {
  res.render("blogs.ejs", { blogs });
});

app.get("/compose", (req, res) => {
  res.render("compose.ejs");
});

app.post("/action", (req, res) => {
  const action = req.body.action;
  const actionArr = action.split(",");
  const actionType = actionArr[0];
  const actionId = parseInt(actionArr[1]);
  if (actionType === "edit") {
    res.render("edit.ejs", { blogs, actionId });
  } else {
    blogs.splice(parseInt(actionId), 1);
    res.render("blogs.ejs", { blogs });
  }
});

app.post("/edit/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const newTitle = req.body.title;
  const newContent = req.body.content;
  blogs.splice(id, 1, { title: newTitle, content: newContent });

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

app.post("/create", (req, res) => {
  const blogTitle = req.body.title;
  const blogContent = req.body.content;
  const newBlog = { title: blogTitle, content: blogContent };
  blogs.push(newBlog);
  res.render("compose.ejs", { message: "Created a Blog.." });
});

const blogs = [
  {
    title: "one",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam dignissimos ipsa aliquam exercitationem non eaque impedit sit. Praesentium sequi ipsam aut ratione facilis? Dignissimos atque nostrum inventore ratione ad minus et repellendus mollitia repellat dolorum facere neque alias voluptates, error omnis distinctio molestias nam repudiandae necessitatibus iusto consequatur non. Magni illo maxime, deleniti reprehenderit suscipit, saepe tempora doloremque tenetur dolorum nemo quisquam laborum. Dolorem vero esse illo magnam modi quas repellat numquam atque deleniti soluta obcaecati amet necessitatibus id magni, maxime quasi asperiores, aut eaque! Mollitia magni accusamus architecto quidem, sapiente veritatis autem eligendi deserunt alias neque quis fugit.",
  },
  {
    title: "two",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam dignissimos ipsa aliquam exercitationem non eaque impedit sit. Praesentium sequi ipsam aut ratione facilis? Dignissimos atque nostrum inventore ratione ad minus et repellendus mollitia repellat dolorum facere neque alias voluptates, error omnis distinctio molestias nam repudiandae necessitatibus iusto consequatur non. Magni illo maxime, deleniti reprehenderit suscipit, saepe tempora doloremque tenetur dolorum nemo quisquam laborum. Dolorem vero esse illo magnam modi quas repellat numquam atque deleniti soluta obcaecati amet necessitatibus id magni, maxime quasi asperiores, aut eaque! Mollitia magni accusamus architecto quidem, sapiente veritatis autem eligendi deserunt alias neque quis fugit.",
  },
  {
    title: "Completed the Capstone Project",
    content:
      "After some time and tinkering, am able to complete this capstone blogs website. All comments and feedbacks are welcome 😊😊. Link to the github repo is https://github.com/BikalRai/firstBlogSiteNoBackend",
  },
];
