import { getPosts, tempBlog } from "./blogTemplate.js";
const Url = window.location.href;
const title = Url.replaceAll("%20", " ").split("=");
//consolelog(Url, title[1]);

const body = document.querySelector(".main-bar");
const blogs = async () => {
  const posts = await getPosts();

  // const blog = posts.find((post) => post.title === title[1]);
  const blog = posts.find((post) => post.title.includes(title[1]));
  //consolelog(posts, blog);
  body.innerHTML = tempBlog({ ...blog });

  const showMoreBtn = document.querySelector(".show-more");
  const showLessBtn = document.querySelector(".show-less");

  const text = showMoreBtn.previousElementSibling;
  text.classList.remove("truncate");

  showLessBtn.classList.add("hidden");
  showMoreBtn.classList.add("hidden");
};

blogs();
