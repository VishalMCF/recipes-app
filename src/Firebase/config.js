import firebase from "firebase/app";

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDj8qMvpSTQG_GFJg77D27QepHzAjGZjqY",
    authDomain: "cooking-cat-site.firebaseapp.com",
    projectId: "cooking-cat-site",
    storageBucket: "cooking-cat-site.appspot.com",
    messagingSenderId: "879990478714",
    appId: "1:879990478714:web:050f483945b701e95568c3",
    measurementId: "G-XN9S9XFE4P"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)


  // init firestore
  const project_firestore = firebase.firestore()

  export {project_firestore}