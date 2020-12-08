// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCTYqLiZkU2GkwKmbzsVTpmUhLvp-OVVTQ",
    authDomain: "meowcast-10d67.firebaseapp.com",
    databaseURL: "https://meowcast-10d67.firebaseio.com",
    projectId: "meowcast-10d67",
    storageBucket: "meowcast-10d67.appspot.com",
    messagingSenderId: "228031617277",
    appId: "1:228031617277:web:8acb0b2aa27f43eb2fc694",
    measurementId: "G-S7TCLE0159"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();

  db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
