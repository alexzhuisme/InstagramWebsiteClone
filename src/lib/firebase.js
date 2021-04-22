import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//here I want to import the seed file
// import {seedDatabase} from "../seed";

const config = {
  apiKey: "AIzaSyCkAjt6z8heRpMKdktBdEz5ceMVBS-fm5w",
  authDomain: "instagram-clone-5562a.firebaseapp.com",
  projectId: "instagram-clone-5562a",
  storageBucket: "instagram-clone-5562a.appspot.com",
  messagingSenderId: "543845022190",
  appId: "1:543845022190:web:3eb9ee41d97f338ed276ff"
};

const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore

//here is where I want to call the seed file (only ONCE)
//seedDatabase(firebase)


export {firebase,FieldValue}