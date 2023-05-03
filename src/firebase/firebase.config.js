import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwhoqobzXfH41n2J5vse5hoAPFKWiVWo4",
  authDomain: "americana-bistro-client.firebaseapp.com",
  projectId: "americana-bistro-client",
  storageBucket: "americana-bistro-client.appspot.com",
  messagingSenderId: "219263935465",
  appId: "1:219263935465:web:f154d254f637c82ed22178"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;