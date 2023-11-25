import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

const poster = {
  b1: "Hi there, my name is Artem. In this guide, I’ll share with you all of the available sites for blogging and give you recommendations based on my hands-on experience working with blogs for the last eight years. Also, our team has done several surveys and collected blogosphere stats to find the most popular free blogging sites (and premium blogging platforms) on the web. P.S. If you have any questions, feel free to contact us for any assistance. ",
  b2: "WordPress.com is a hosted version of the open-source platform WordPress.org. It is a commercial project that offers a free trial plan with upgrades for a premium plan and custom domain. According to our survey, it’s one of the most popular hosted blogging platforms out there. If you are an absolute beginner with no technical knowledge, but you want to build your blogging site, WordPress.com is the perfect site for you.",
  b3: "WordPress.com is a hosted version of the open-source platform WordPress.org. It is a commercial project that offers a free trial plan with upgrades for a premium plan and custom domain. According to our survey, it’s one of the most popular hosted blogging platforms out there. If you are an absolute beginner with no technical knowledge, but you want to build your blogging site, WordPress.com is the perfect site for you.",
  b4: "WordPress.com is a hosted version of the open-source platform WordPress.org. It is a commercial project that offers a free trial plan with upgrades for a premium plan and custom domain. According to our survey, it’s one of the most popular hosted blogging platforms out there. If you are an absolute beginner with no technical knowledge, but you want to build your blogging site, WordPress.com is the perfect site for you.",
  
};

app.post("/submit", (req, res) => {
  let newBlog = req.body.blogpost;
  console.log(newBlog);
  const newKey = `b${Object.keys(poster).length + 1}`;
  poster[newKey] = newBlog;
  console.log(poster); 

  res.render("read.ejs", { posts: Object.values(poster) });
});

app.get("/read",(req,res) => {
    console.log("Rendering read.ejs with posts:", Object.values(poster));
    res.render("read.ejs", { posts: Object.values(poster) });
});

app.get("/contact", (req,res) => {
    res.render("contact.ejs")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
