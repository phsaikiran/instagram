import { createContext } from "react";
import { FieldValue, firebase } from "../lib/firebase";

const FirebaseContext = createContext({firebase, FieldValue});

export default FirebaseContext;
