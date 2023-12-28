import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuNgqYTC6QImetcKEdAoidO9nOGQs53LA",
  authDomain: "switter-reloaded.firebaseapp.com",
  projectId: "switter-reloaded",
  storageBucket: "switter-reloaded.appspot.com",
  messagingSenderId: "956965757296",
  appId: "1:956965757296:web:d8020afa967e8185026fb5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
