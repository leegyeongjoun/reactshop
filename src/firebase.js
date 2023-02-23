import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFx7QPMkXFrjVYbKyJQBe_qSREvKpXn2c",
    authDomain: "fir-25a95.firebaseapp.com",
    projectId: "fir-25a95",
    storageBucket: "fir-25a95.appspot.com",
    messagingSenderId: "596257541759",
    appId: "1:596257541759:web:aceea961188d1579a5b94a",
    measurementId: "G-GDBTPL6DEK"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); //db구축
const auth = firebase.auth();

export {db, auth};//public 다른곳에서 사용할 수있도록