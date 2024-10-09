// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1k2UF8BN8UajCUh_T1zodBoImYALolYo",
  authDomain: "mumbai-seva.firebaseapp.com",
  projectId: "mumbai-seva",
  storageBucket: "mumbai-seva.appspot.com",
  messagingSenderId: "845630798636",
  appId: "1:845630798636:web:4d5caa1543ff0933ee8a89",
};

// Initialize Firebase and export it for use in other files
const app = initializeApp(firebaseConfig);

export default app;
