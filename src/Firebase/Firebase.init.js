import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const initaializeAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default initaializeAuthentication;