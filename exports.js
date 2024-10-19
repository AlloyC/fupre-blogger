import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  addDoc,
  setDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

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
export const auth = getAuth(app);

export const db = getFirestore(app);

// Store user data in session storage
export function storeUserData(userData) {
  sessionStorage.setItem("user", JSON.stringify(userData));
}

// Retrieve user data from session storage
export function getUserData() {
  const userData = sessionStorage.getItem("user");
  return userData ? JSON.parse(userData) : null;
}

// Remove user data from session storage
export function removeUserData() {
  sessionStorage.removeItem("user");
}
