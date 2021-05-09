import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAPjH5YvXoPKj_crRevcE8NZttUOIagPHo",
    authDomain: "discord-clone-yt-cd489.firebaseapp.com",
    projectId: "discord-clone-yt-cd489",
    storageBucket: "discord-clone-yt-cd489.appspot.com",
    messagingSenderId: "765759791902",
    appId: "1:765759791902:web:3858778119e8ee12849f0f",
    measurementId: "G-EWEY81H6GG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;