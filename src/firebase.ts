import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDXsrj0ANuspkbJkARJseRAbSA4EUbIbIU",
    authDomain: "ionic-todolist-bde6b.firebaseapp.com",
    projectId: "ionic-todolist-bde6b",
    storageBucket: "ionic-todolist-bde6b.appspot.com",
    messagingSenderId: "806190029886",
    appId: "1:806190029886:web:068eefc147e30b1271456f"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);