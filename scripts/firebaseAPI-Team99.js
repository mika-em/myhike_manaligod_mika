//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBR0vOcieqfl_RvRYP5rYnONYTV47MRxbQ",
    authDomain: "demo0708-dadf1.firebaseapp.com",
    projectId: "demo0708-dadf1",
    storageBucket: "demo0708-dadf1.appspot.com",
    messagingSenderId: "925370013020",
    appId: "1:925370013020:web:c00038b34ea5e1b25bdd99"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();