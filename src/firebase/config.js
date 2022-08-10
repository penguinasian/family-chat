import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDcY6kEZm2dzCE90M7qP4zqBOGjf1mlOmM",
    authDomain: "family-chat-7ea0e.firebaseapp.com",
    projectId: "family-chat-7ea0e",
    storageBucket: "family-chat-7ea0e.appspot.com",
    messagingSenderId: "265204199824",
    appId: "1:265204199824:web:cba4ec43699bdd46d3c315"
  };


  // init firebase
  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp }