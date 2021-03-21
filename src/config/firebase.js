import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyBD0KUdVABOSG20IP_lj1WPJFIlAOMavcs",
    authDomain: "health-status-app.firebaseapp.com",
    projectId: "health-status-app",
    storageBucket: "health-status-app.appspot.com",
    messagingSenderId: "755505500747",
    appId: "1:755505500747:web:4363a86dc607c66c3933ce",
    measurementId: "G-2L3H27V06H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = firebase.firestore()
function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
}
function signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
}
function addUsers(user) {
    return db.collection('users').add(user)
}
function fetchAllUser() {
    return new Promise((resolve)=> {
        db.collection('users').get().then(snapshot => {
            const users = []
            snapshot.forEach(doc => {
                users.push({ ...doc.data(), id: doc.id })
            })
            resolve(users)
        })
    })
}

export {
        signUp,
        signIn,
        addUsers,
        fetchAllUser
    }