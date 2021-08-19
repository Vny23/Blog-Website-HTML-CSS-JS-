let firebaseConfig = {
    apiKey: "AIzaSyBsfKEcH_zfRTh7MsDV5z-yeRIlPVzkl6o",
    authDomain: "blogging-website-2140e.firebaseapp.com",
    projectId: "blogging-website-2140e",
    storageBucket: "blogging-website-2140e.appspot.com",
    messagingSenderId: "30761315621",
    appId: "1:30761315621:web:3c20f4949426bded99fecc"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();