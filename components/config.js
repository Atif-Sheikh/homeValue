import * as firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBlyKnoCnpFQvo958jryOup8sduv9IKTXY",
    authDomain: "homevalue-b9e5e.firebaseapp.com",
    databaseURL: "https://homevalue-b9e5e.firebaseio.com",
    projectId: "homevalue-b9e5e",
    storageBucket: "homevalue-b9e5e.appspot.com",
    messagingSenderId: "584820890990",
    appId: "1:584820890990:web:74f22acb0a68ba65fcb57f",
    measurementId: "G-E70H1E186Y"
  };
    try{

        firebase.initializeApp(firebaseConfig);
        // firebase.analytics();
  }
catch(err){
console.log(err)
}

  