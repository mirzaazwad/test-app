import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database";
import {GoogleAuthProvider,getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env._API_KEY,
  authDomain: import.meta.env._AUTH_DOMAIN,
  projectId: import.meta.env._PROJECT_ID,
  storageBucket: import.meta.env._STORAGE_BUCKET,
  messagingSenderId: import.meta.env._MESSAGE_SENDER_ID,
  appId: import.meta.env._APP_ID,
  measurementId: import.meta.env._MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore();
export const db = getDatabase();
export const provider = new GoogleAuthProvider();
