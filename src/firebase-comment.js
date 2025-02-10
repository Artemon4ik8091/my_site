import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_e2OSELt07HTpWOsTY7wzcNE7B0QGCQk",
  authDomain: "my-bio-site.firebaseapp.com",
  databaseURL: "https://my-bio-site-default-rtdb.firebaseio.com",
  projectId: "my-bio-site",
  storageBucket: "my-bio-site.firebasestorage.app",
  messagingSenderId: "378087715564",
  appId: "1:378087715564:web:b19d0f319d88a94fd62bc9",
  measurementId: "G-MVZ0SD7DVN"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };