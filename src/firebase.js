import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBX9jWLe3dS4YSrEfjlolyjjNVAKyRszJY",
  authDomain: "shreeji-a8067.firebaseapp.com",
  projectId: "shreeji-a8067",
  storageBucket: "shreeji-a8067.appspot.com",
  messagingSenderId: "384882244096",
  appId: "1:384882244096:web:3b734ce985c434a4ffb6e5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
