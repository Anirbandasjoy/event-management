import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBq_VZV1tP8ShSrXQ8bYn357JC3l4Z1ElY",
  authDomain: "event-management-90bd8.firebaseapp.com",
  projectId: "event-management-90bd8",
  storageBucket: "event-management-90bd8.appspot.com",
  messagingSenderId: "564571110447",
  appId: "1:564571110447:web:4a3f0b1a6c7d017f2c1ada",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
