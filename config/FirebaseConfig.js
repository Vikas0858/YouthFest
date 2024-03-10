// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// old one

// const firebaseConfig = {
//   apiKey: "AIzaSyDzBYkpydN7Eg1iBTe6bp-cx0dsKuUkxgs",
//   authDomain: "youthfest-2022.firebaseapp.com",
//   projectId: "youthfest-2022",
//   storageBucket: "youthfest-2022.appspot.com",
//   messagingSenderId: "583127657207",
//   appId: "1:583127657207:web:30594bcd510edb63d641f2",
//   measurementId: "G-RN9F7YFKYJ"
// };

// new one

const firebaseConfig = {
  apiKey: "AIzaSyC8JAIN9Od-n6ooZYP4aMO4DQvQprIp-Bo",
  authDomain: "youthfest-2023.firebaseapp.com",
  projectId: "youthfest-2023",
  storageBucket: "youthfest-2023.appspot.com",
  messagingSenderId: "166973203981",
  appId: "1:166973203981:web:9ca472b398a7f3e09a1744",
};

const firebaseConfig2 = {
  apiKey: "AIzaSyBCSg219AuT5T0_nTBPgbvgpy_a63xXqfU",
  authDomain: "youthfest-2023-1c76f.firebaseapp.com",
  projectId: "youthfest-2023-1c76f",
  storageBucket: "youthfest-2023-1c76f.appspot.com",
  messagingSenderId: "969891118520",
  appId: "1:969891118520:web:95bd506c6baccabcb2234d",
};

const app = initializeApp(firebaseConfig2);

// const auth = getAuth();
// auth.languageCode = "en";

// Captcha
const generateCaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: (response) => {},
    },
    auth
  );
};
const resetCaptcha = () => {
  window.recaptchaVerifier.render().then(function (widgetId) {
    generateCaptcha.reset(widgetId);
  });
};

// Initialize Firebase

// const app2 = initializeApp(firebaseConfig2);
// export { generateCaptcha, resetCaptcha };
export const auth = getAuth(app);
export const storage = getStorage(app);
export const storageRef = ref(storage);
export const db = getFirestore(app);
