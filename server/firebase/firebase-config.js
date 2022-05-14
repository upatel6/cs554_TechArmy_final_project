import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyClrdLgz8K7Ih5Tu1hlTktXYWSjbAOPqsk",
    authDomain: "cryptic-ventures.firebaseapp.com",
    projectId: "cryptic-ventures",
    storageBucket: "cryptic-ventures.appspot.com",
    messagingSenderId: "714516046604",
    appId: "1:714516046604:web:666b283286ada5f4245f29",
    measurementId: "G-ETYNRSS0T7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);