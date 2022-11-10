import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZKGL1m2V4Lb5FUovZpsGw77nOdmIechs",
  authDomain: "quiz-jobcare-app-df1c3.firebaseapp.com",
  projectId: "quiz-jobcare-app-df1c3",
  storageBucket: "quiz-jobcare-app-df1c3.appspot.com",
  messagingSenderId: "761571634601",
  appId: "1:761571634601:web:76327384c848afa2fda8b8"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
