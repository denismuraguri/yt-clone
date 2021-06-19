import firebase from 'firebase/app'

import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBSpm8Wejj2eiBmy4RuTb_wDsUaLyFgJ6U",
    authDomain: "yt-clone-try.firebaseapp.com",
    projectId: "yt-clone-try",
    storageBucket: "yt-clone-try.appspot.com",
    messagingSenderId: "374725628352",
    appId: "1:374725628352:web:2c2c1a882fc2ac56713825"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
