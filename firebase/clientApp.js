import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const clientCredentials = {
    apiKey: "AIzaSyD5MHWDZS3Jo-0rY9Y3cYxKGPtkuLx0zHM",
    authDomain: "ww2newsletter.firebaseapp.com",
    databaseURL: "https://ww2newsletter-default-rtdb.firebaseio.com",
    projectId: "ww2newsletter",
    storageBucket: "ww2newsletter.appspot.com",
    messagingSenderId: "800499510142",
    appId: "1:800499510142:web:9d4a65d1e1524fcc7e212f",
    measurementId: "G-EWJRY5YNE2"

}

if(!firebase.apps.length){
    firebase.initializeApp(clientCredentials);
}

export default firebase