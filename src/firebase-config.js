import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9Lbb4c08S9aLHfgR9oC5JORxWUf5Kn2g",//ENV로 처리하면 좋음
    authDomain: "react-auth-1c2df.firebaseapp.com", //ENV 처리
    projectId: "react-auth-1c2df",
    storageBucket: "react-auth-1c2df.appspot.com",
    messagingSenderId: "624262499117",
    appId: "1:624262499117:web:4c75cac1693f4afc5a21a4",
    measurementId: "G-HF89LF5D53"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);//딴 데서 쓸꺼라서 export