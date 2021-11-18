import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA3EhlX-vrQQVINfVBjkVt8bDgsNlwgxpU",
    authDomain: "cabra-42f3e.firebaseapp.com",
    projectId: "cabra-42f3e",
    storageBucket: "cabra-42f3e.appspot.com",
    messagingSenderId: "105980670969",
    appId: "1:105980670969:web:b09032ae60774d5a69c328"
  };

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)