//Funcion para inicializar la app
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";

//firebaseAuth
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//Firestore
import { getFirestore } from "firebase/firestore";

class Fire {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.provider = new GoogleAuthProvider();
    this.auth = getAuth();
    this.db = getFirestore();
  }
}

const fire = new Fire();

export default fire;
