import firebase from "firebase/compat";
import "firebase/compat/auth";

const USERNAME = "test";
const PASS = "1234";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrZnbdLt7_BdYKSp233GQsNNaLAWBzuGY",
  authDomain: "harvest-e44d8.firebaseapp.com",
  projectId: "harvest-e44d8",
  storageBucket: "harvest-e44d8.appspot.com",
  messagingSenderId: "680484773343",
  appId: "1:680484773343:web:77bb7da602150a8433786a",
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({experimentalForceLongPolling: true}); 
} else {
  app = firebase.app();
}

//Firebase functions for logging in and logging out
export function signUpUser(username: any, password: any): Promise<any> {
  return firebase.auth().createUserWithEmailAndPassword(username, password);
}

export function signInAsync(username: any, password: any) {
  return firebase.auth().signInWithEmailAndPassword(username, password);
}
