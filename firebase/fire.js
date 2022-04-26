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
  getDocs,
  onSnapshot,
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
      throw e;
    }
  }

  async editNoticia(id, noticia) {
    //Obtencion de la base de datos
    const db = getFirestore();
    await setDoc(doc(db, "Noticias", id), noticia);
  }

  async getNoticias() {
    const db = getFirestore();
    const coleccion = query(collection(db, "Noticias"));
    const docs = await getDocs(coleccion);
    const noticias = [];
    docs.forEach((doc) => {
      noticias.push(doc.data());
    });
    return noticias;
  }

  async getNoticiasByUserId(id) {
    //Aplicamos un where para que se muestren las puras notas que tengan el mismo id del usuario que está logeado
    const q = query(
      collection(fire.db, "Noticias"),
      where("creador.id", "==", id)
    );
    //Snapshot
    console.log("Query: ", id);
    try {
      const querySnapshot = await getDocs(q);
      return this.manejarSnapShot(querySnapshot);
    } catch (e) {
      console.log(e);
    }
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

  //Devolucion del query
  manejarSnapShot(querySnapshot) {
    const notas = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    return notas;
  }
}

const fire = new Fire();

export default fire;
