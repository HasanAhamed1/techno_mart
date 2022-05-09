// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPifllxMiBo7VPK6wYoc3Ajlkpa83xw-8",
  authDomain: "techno-mart-authenticati-7da11.firebaseapp.com",
  projectId: "techno-mart-authenticati-7da11",
  storageBucket: "techno-mart-authenticati-7da11.appspot.com",
  messagingSenderId: "1025118035930",
  appId: "1:1025118035930:web:e9709c5f84abd82a032ae3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;