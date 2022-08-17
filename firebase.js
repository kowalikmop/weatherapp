// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB30zYOKY97sUhfmfCHerW-k5zGmzrJf8M",
  authDomain: "reactapp-5f230.firebaseapp.com",
  projectId: "reactapp-5f230",
  storageBucket: "reactapp-5f230.appspot.com",
  messagingSenderId: "975604575558",
  appId: "1:975604575558:web:80b768a2cf8b9632cf8947"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
