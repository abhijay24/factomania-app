import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCXI_6HoUvae9e3JQX7zZpha3Etsw9XflE",
    authDomain: "my-facts-app.firebaseapp.com",
    projectId: "my-facts-app",
    storageBucket: "my-facts-app.appspot.com",
    messagingSenderId: "299385399401",
    appId: "1:299385399401:web:8de7fcc67d8245a1439af8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore