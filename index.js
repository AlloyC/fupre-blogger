import {
  tempBlog,
  uploadNewPost,
  getPosts,
  postTemplate,
} from "./blogTemplate.js";
import { auth, removeUserData } from "./exports.js";
import { getUserData } from "./exports.js";

const mainBar = document.querySelector(".main-bar");
const sideBar = document.getElementById("side-bar");
const loginBtn = document.getElementById("login");
const signUpBtn = document.getElementById("sign-up");
const logOutBtn = document.getElementById("log-out");
const addPost = document.getElementById("addPost");
const addPostMessage = document.getElementById("addPostMessage");
const postForm = document.getElementById("post-form");

const postTitle = document.getElementById("title");
const postContent = document.getElementById("content");
const uploadPost = document.getElementById("uploadPost");

// PUPOLATING THE BLOGS
const blogPopulator = async () => {
  const posts = await getPosts();
  let blogs = "";
  let sideBlogs = "";
  [...posts]
    .slice(0, 4)
    .map((post) => {
      return tempBlog({ ...post });
    })
    .forEach((blog) => {
      blogs += blog;
    });

  [...posts]
    .slice(4, 11)
    .map((post) => {
      return postTemplate({ ...post });
    })
    .forEach((blog) => {
      sideBlogs += blog;
    });

  mainBar.innerHTML = blogs;
  sideBar.innerHTML = sideBlogs;
  loadPage();
};

blogPopulator();

function loadPage() {
  //consolelog(getUserData());

  const showMoreBtn = document.querySelectorAll(".show-more");
  const showLessBtn = document.querySelectorAll(".show-less");

  showMoreBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      //consolelog("clicked");

      const text = e.target.previousElementSibling;
      text.classList.remove("truncate");
      btn.classList.add("invisible");
      e.target.nextElementSibling.classList.remove("invisible");
    });
  });

  showLessBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      //consolelog("clicked");

      const text = e.target.previousElementSibling.previousElementSibling;
      text.classList.add("truncate");
      btn.classList.add("invisible");
      e.target.previousElementSibling.classList.remove("invisible");
    });
  });
  if (getUserData()) {
    //consolelog("logged in");
    addPost.classList.remove("hidden");
    loginBtn.classList.add("hidden");
    addPost.classList.add("flex");
    //consolelog(loginBtn.classList);
    signUpBtn.classList.add("hidden");
    logOutBtn.classList.remove("hidden");
  } else {
    //consolelog("not logged in");
    addPost.classList.add("hidden");
    loginBtn.classList.remove("hidden");
    signUpBtn.classList.remove("hidden");
    logOutBtn.classList.add("hidden");
    addPost.classList.remove("flex");
  }
}

logOutBtn.addEventListener("click", logOut);

function logOut() {
  auth.signOut().then(() => {
    //consolelog("logged out");
    removeUserData();
    loadPage();
  });
}

const showMessage = () => {
  //consolelog("enters and leaves");

  addPostMessage.classList.toggle("hidden");
};

const showForm = () => {
  postForm.classList.remove("hidden");
};

addPost.addEventListener("mouseenter", showMessage);
addPost.addEventListener("mouseleave", showMessage);
addPost.addEventListener("click", showForm);

uploadPost.addEventListener("click", (e) => {
  e.preventDefault();
  if (postTitle.value === "" || postContent.value === "") {
    alert("Please fill all fields");
    return;
  } else {
    const post = {
      title: postTitle.value,
      content: postContent.value,
    };

    uploadNewPost(post);
    postForm.classList.add("hidden");
    blogPopulator();
  }
});

// let blogs = "";
// new Array(10).fill(1).forEach((_, index) => {
//   blogs += tempBlog;
// });
// mainBar.innerHTML += blogs;
// mainBar.children[0].children[0].innerText = "An introduction to FUPRE edited";

// loadPage();

// const showMoreBtn = document.getElementById("show-more");
// const showLessBtn = document.getElementById("show-less");

// showMoreBtn.addEventListener("click", () => {
//   const text = document.querySelectorAll("text");

//   text.classList.remove("truncate");
//   showMoreBtn.classList.add("invisible");
//   showLessBtn.classList.remove("invisible");
// });

// showLessBtn.addEventListener("click", () => {
//   const text = document.getElementById("text");

//   text.classList.add("truncate");
//   showMoreBtn.classList.remove("invisible");
//   showLessBtn.classList.add("invisible");
// });

// add post button

// const addPostButton = document.getElementById('addPost');
// const blogContainer = document.getElementById('blog-container');

// addPostButton.addEventListener('click', function() {
//    // create a new blog post div
//   const newPost = document.createElement('div');
//   newPost.className = 'blog-post';

//   // add content to the new post

//   newPost.innerHTML = `
//     <h2> New blog post </h2>

//           <div class="blog-img">

//             <p>
//               <strong>Posted by:</strong> <br />
//               <strong>Date:</strong>
//             </p>

//           <p

//             This is a new blog post
//           </p>

//   `;

//   // append the new post to the blog container

//   blogContainer.appendChild(newPost);
// });

// // Handle form submission
// document.getElementById("blogForm").addEventListener("submit", function(event) {
//   event.preventDefault();  // Prevent the form from refreshing the page

//   // Fetch input values
//   const blogTitle = document.getElementById("blogTitle").value;
//   const blogContent = document.getElementById("blogContent").value;
//   const blogDate = document.getElementById("blogDate").value;

//   const blogPoster = document.getElementById("blogPoster").value;

//   // Ensure all fields are filled
//   if (!blogTitle || !blogContent || !blogDate || !blogPoster) {
//     alert("Please fill all the fields");
//     return;
//   }

//   // Create new blog post element
//   const blogSection = document.getElementById("blog-section");
//   const newBlogPost = document.createElement("div");
//   newBlogPost.classList.add("blog-post");

//   newBlogPost.innerHTML = `
//     <h3>${blogTitle}</h3>
//     <p><strong>Date:</strong> ${blogDate} <strong>Time:</strong> ${blogTime}</p>
//     <p><strong>Posted by:</strong> ${blogPoster}</p>
//     <p>${blogContent}</p>
//   `;

//   // Append new post to the blog section
//   blogSection.appendChild(newBlogPost);

//   // Clear form fields
//   document.getElementById("blogForm").reset();
// });
