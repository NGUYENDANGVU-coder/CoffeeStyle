import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import { useEffect, useState } from "react";
const firebaseConfig = {
  apiKey: "AIzaSyCTlZqu_KnSm4yr-8LeNsC2H29Jczo-KSY",
  authDomain: "coffee-ndv.firebaseapp.com",
  projectId: "coffee-ndv",
  storageBucket: "coffee-ndv.appspot.com",
  messagingSenderId: "747965778410",
  appId: "1:747965778410:web:b3931bdd4b44239e880a93",
  measurementId: "G-BGXB9RZ6DN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = getAuth();
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}
export const signin=async(email,pass)=>{
  return await signInWithEmailAndPassword(auth,email,pass);
}
export const signup=async(email,pass)=>{
  return await createUserWithEmailAndPassword(auth,email,pass);
}
export const logout=async()=>{
  return signOut(auth);
}
// Change profile 
const storage=getStorage();
export const upload = async (file,currentUser,setLoading) =>{
  const fileRef = ref(storage, currentUser.uid + '.png');

  // setLoading(true);
  
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, {photoURL});
  
  // setLoading(false);
}
export { auth,storage };