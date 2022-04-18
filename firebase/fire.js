//Funcion para inicializar la app
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";

//firebaseAuth
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//Firestore
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
class Fire {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.provider = new GoogleAuthProvider();
    this.auth = getAuth();
    this.db = getFirestore();
  }

  async addNoticia(noticia) {
    //Obtencion de la base de datos
    const db = getFirestore();
    //Manejo de execepcion que inserta el documento en la coleccion publicaciones, al igual que storage
    //No es necesario que exista la coleccion ya que si no existe firestore la crea dinamicamente e inserta el documento
    try {
      const docRef = await addDoc(collection(db, "Noticias"), noticia);
    } catch (e) {
      //Error
    }
  }

  async editNoticia(id, noticia) {
    //Obtencion de la base de datos
    const db = getFirestore();
    await setDoc(doc(db, "Noticias", id), {
      noticia,
    });
  }

  async getNoticia(id) {
    const db = getFirestore();
    const docRef = doc(db, "Noticias", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  }
}

const fire = new Fire();

export default fire;
