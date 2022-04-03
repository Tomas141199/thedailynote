//Funcion para inicializar la app
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";

//firebaseAuth
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//Firestore
import { getFirestore, addDoc, collection } from "firebase/firestore";

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
}

const fire = new Fire();

export default fire;
