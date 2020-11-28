import firebase from 'firebase'
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyBmkvPPDBrISbbn6B-ahUqFQsJBoEOZsy4",
    authDomain: "barter-576c9.firebaseapp.com",
    databaseURL: "https://barter-576c9.firebaseio.com",
    projectId: "barter-576c9",
    storageBucket: "barter-576c9.appspot.com",
    messagingSenderId: "147687618051",
    appId: "1:147687618051:web:2332531f30b75759e30036"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()