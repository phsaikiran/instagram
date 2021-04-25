import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

const firebase = Firebase.initializeApp(firebaseConfig);
const {FieldValue} = Firebase.firestore;

// Uncomment this to seed the database with records
// seedDatabase(firebase);

export { firebase, FieldValue };
