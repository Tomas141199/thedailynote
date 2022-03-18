import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "./components/ui/Navbar";

export default function Home() {
  return (
    <div>
      <img src="/img/hero.jpg" className="w-screen max-h-96 relative object-cover object-top"/>
      <Navbar/>

      <div className="mt-6 text-2xl text-black text-center animate-bounce 1s infinity">
        Hola
      </div>
      
    </div>
  );
}
