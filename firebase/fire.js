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
  deleteDoc,
  where,
  query,
  getDocs
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
    await setDoc(doc(db, "Noticias", id), noticia);
  }

  async getNoticias()
  {
    const db = getFirestore();
    const coleccion = query(collection(db, "Noticias"));
    const docs = await getDocs(coleccion);
    const noticias = [];
    docs.forEach((doc) => {
      noticias.push(doc.data());
    })
    return noticias;
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

  async delNoticia(id) {
    await deleteDoc(doc(this.db, "Noticias", id));
  }
}

const fire = new Fire();

export default fire;
