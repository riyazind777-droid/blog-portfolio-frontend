
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyD8DJWcpfqQh-VrUjo-CAK1qBVGy690DxE",
  authDomain: "blog-portfolio-b4f4c.firebaseapp.com",
  projectId: "blog-portfolio-b4f4c",
  storageBucket: "blog-portfolio-b4f4c.firebasestorage.app",
  messagingSenderId: "421396179893",
  appId: "1:421396179893:web:b060a59e00c349fd86c7fc",
  measurementId: "G-1HLPH2KY4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth