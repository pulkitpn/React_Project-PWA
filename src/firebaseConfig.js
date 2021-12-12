// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcpQeOniPSLg5MQhH2sDj5cHTPOlynuGQ",
  authDomain: "rvce-campus-assistant.firebaseapp.com",
  projectId: "rvce-campus-assistant",
  storageBucket: "rvce-campus-assistant.appspot.com",
  messagingSenderId: "458662475950",
  appId: "1:458662475950:web:b784821f7109837592153f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// const db = getFirestore(app);

export default app;
