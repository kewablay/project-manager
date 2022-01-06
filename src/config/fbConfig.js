import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoWSnBFZ3xm_ev7OwyoSCljc3mFLvcQTE",
  authDomain: "project-manager-4118e.firebaseapp.com",
  projectId: "project-manager-4118e",
  storageBucket: "project-manager-4118e.appspot.com",
  messagingSenderId: "269865782825",
  appId: "1:269865782825:web:daed2d8924584982789638",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
