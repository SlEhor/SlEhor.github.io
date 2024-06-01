// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMvYqzp189Udod36msLlTroo7jHxOUslA",
    authDomain: "egorka-project-1.firebaseapp.com",
    projectId: "egorka-project-1",
    storageBucket: "egorka-project-1.appspot.com",
    messagingSenderId: "515780160890",
    appId: "1:515780160890:web:35aaf0fd2e386bc6443ac3",
    measurementId: "G-2PSC9KVHRY"
  }; 
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();