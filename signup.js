// import { auth } from "./firebase-config";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {
  doc,
  getDoc,
  addDoc,
  setDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { db } from "./exports.js";

const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const college = document.getElementById("college");
const form = document.getElementById("signup-form");
const firebaseConfig = {
  apiKey: "AIzaSyDcIymAjKOf0uYEZqMWETyN_uIB3DYb2L4",
  authDomain: "university-student-blog.firebaseapp.com",
  projectId: "university-student-blog",
  storageBucket: "university-student-blog.appspot.com",
  messagingSenderId: "879359471046",
  appId: "1:879359471046:web:07c798436fd30c2931d6c7",
  measurementId: "G-XS2VB3XJ8E",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// let userArray = [];
// // localStorage.clear();

// if (localStorage.key(0) === "users") {
//   userArray = JSON.parse(localStorage.getItem("users"));
// }

function submit(e) {
  e.preventDefault(); // Prevent the default form submission
  if (fullName && email && college && password) {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const userRef = doc(db, "users", userCredential.user.uid);
        setDoc(userRef, {
          fullName: fullName.value,
          email: email.value,
          college: college.value,
          profilePicture: "",
        }).then(() => {
          window.location.replace("/");
        });
        // Signed up
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //consolelog(errorMessage);

        // ..
      });
    //   const userObject = {
    //     fullName: fullName.value,
    //     email: email.value,
    //     password: password.value,
    //     college: college.value,
    //   };

    //   userArray.push(userObject);
    //   localStorage.setItem("users", JSON.stringify(userArray));
    //   //consolelog(userArray);
  }
}

form.addEventListener("submit", submit);

// document.getElementById("signup-form").addEventListener("submit", function (e) {
//   e.preventDefault(); // Prevent the default form submission

//   // Collect form data
//   // const formData = new FormData(this);

//   // // Send form data to server via Fetch API
//   // fetch('https://example.com/api/signup', {  // Replace with your actual API endpoint
//   //     method: 'POST',
//   //     body: formData,
//   // })
//   // .then(response => response.json())
//   // .then(data => {
//   //     if (data.success) {
//   //         // Redirect to welcome or profile page
//   //         window.location.href = 'welcome.html';
//   //     } else {
//   //         // Handle errors (e.g., display error messages)
//   //         alert('Error: ' + data.message);
//   //     }
//   // })
//   // .catch(error => {
//   //     //consoleerror('Error:', error);
//   //     alert('An error occurred while signing up. Please try again later.');
//   // });
// });
