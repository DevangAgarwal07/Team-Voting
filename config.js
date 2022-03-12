import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB77S1FiriW2C2LfKf9nULGC26ULqwB8pQ",
    authDomain: "team-voting-873bd.firebaseapp.com",
    databaseURL: "https://team-voting-873bd-default-rtdb.firebaseio.com",
    projectId: "team-voting-873bd",
    storageBucket: "team-voting-873bd.appspot.com",
    messagingSenderId: "932389281011",
    appId: "1:932389281011:web:51ccebac8fa46b59dcab86",
    measurementId: "G-7SHQTDGDR4"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
