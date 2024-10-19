// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDcIymAjKOf0uYEZqMWETyN_uIB3DYb2L4",
//   authDomain: "university-student-blog.firebaseapp.com",
//   projectId: "university-student-blog",
//   storageBucket: "university-student-blog.appspot.com",
//   messagingSenderId: "879359471046",
//   appId: "1:879359471046:web:2afb7ce9e7d5b44431d6c7",
//   measurementId: "G-0R8PEMB8DK",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);

{
  /* <script type="module"> */
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcIymAjKOf0uYEZqMWETyN_uIB3DYb2L4",
  authDomain: "university-student-blog.firebaseapp.com",
  projectId: "university-student-blog",
  storageBucket: "university-student-blog.appspot.com",
  messagingSenderId: "879359471046",
  appId: "1:879359471046:web:07c798436fd30c2931d6c7",
  measurementId: "G-XS2VB3XJ8E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
// </script>
