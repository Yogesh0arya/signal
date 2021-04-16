import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBmtTcQfNS_P2zJ3zwBbGltaGl3KBH5bZY",
    authDomain: "signal-6490d.firebaseapp.com",
    projectId: "signal-6490d",
    storageBucket: "signal-6490d.appspot.com",
    messagingSenderId: "461216988506",
    appId: "1:461216988506:web:5c44952b3cbdb47d390763"
  };

  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
  }else{
    app = firebase.app();
  }
  
  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth};