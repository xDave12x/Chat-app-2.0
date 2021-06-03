var firebaseConfig = {
      apiKey: "AIzaSyBSrsUeiVUsdur0IeG1aMgXYT1ihQkHOos",
      authDomain: "kwitter-18eda.firebaseapp.com",
      databaseURL: "https://kwitter-18eda-default-rtdb.firebaseio.com",
      projectId: "kwitter-18eda",
      storageBucket: "kwitter-18eda.appspot.com",
      messagingSenderId: "928414048299",
      appId: "1:928414048299:web:360c3947f9f837ede4ca6e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
