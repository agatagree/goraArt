import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebase.config";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);