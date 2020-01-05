import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCf40W4Q8Cz5Uv0B5YkorBMbeq_8Jt6WfY",
    authDomain: "joeytre-1b9fe.firebaseapp.com",
    databaseURL: "https://joeytre-1b9fe.firebaseio.com",
    projectId: "joeytre-1b9fe",
    storageBucket: "joeytre-1b9fe.appspot.com",
    messagingSenderId: "1073424777199",
    appId: "1:1073424777199:web:9e5652b8d383291601001a",
    measurementId: "G-20QK53039X"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();