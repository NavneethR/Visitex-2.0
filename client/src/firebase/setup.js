import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrjPG-mBpXHH2by6IMEHKLFtAX_dpyv7c",
  authDomain: "visitex-2.firebaseapp.com",
  projectId: "visitex-2",
  storageBucket: "visitex-2.appspot.com",
  messagingSenderId: "126426154217",
  appId: "1:126426154217:web:de693cf79983640ce5dc78",
  measurementId: "G-RH8Y0QB25N",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
