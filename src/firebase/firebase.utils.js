import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyB1CkS0w4eabRzcXjwE9GjHwEF9KiFgn3Q",
    authDomain: "ecommerce-app-39aad.firebaseapp.com",
    projectId: "ecommerce-app-39aad",
    storageBucket: "ecommerce-app-39aad.appspot.com",
    messagingSenderId: "920439546258",
    appId: "1:920439546258:web:f98f0309f94560f201614b"
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;