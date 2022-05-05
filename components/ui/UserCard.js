import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { getAuth, signOut } from "firebase/auth";
import Router from "next/router";
import useClickOutside from "./../../hooks/useClickOutside";
import { useRouter } from "next/router";

const logOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      Router.push("/", null, { shallow: false });
    })
    .catch((error) => {
      // An error happened.
    });
};

const UserCard = ({ usuario }) => {
  const { activeClass, wrapperRef, toggleClass } = useClickOutside();
  const router = useRouter();
  return (
    <li ref={wrapperRef}>
      <div className="relative flex items-center gap-1">
        <Image
          className="rounded-full"
          src={usuario.photoURL ?? "/images/usericon.png"}
          width={40}
          height={40}
          alt={`${usuario.displayName} photo`}
        />
        <button
          className={`arrow ${activeClass} duration-300 ease-in-out`}
          onClick={toggleClass}
        >
          <Image
            src="/images/down-filled-triangular-arrow.png"
            width={16}
            height={16}
            alt="arrow"
          />
        </button>
        <nav
          className={`absolute scale-0 duration-300 ease-in-out origin-top top-0 -left-4 w-28 bg-white rounded p-2 text-primary-gray dropdown ${activeClass} drop-shadow-lg z-50`}
        >
          <ul className="divide-y-2 text-center">
            <li>
              <div className="text-overflow font-semibold">
                {usuario.displayName}
              </div>
            </li>
            <li className="transition hover:bg-slate-100 hover:rounded-2xl">
              <Link href="/crear-noticia">Publicar</Link>
            </li>
            <li className="transition hover:bg-slate-100 hover:rounded-2xl">
              <Link href={`/ver-publicaciones?id=${usuario.uid}`}>
                Publicaciones
              </Link>
            </li>
            <li className="transition hover:bg-slate-100 hover:rounded-2xl">
              <button onClick={() => logOut()}>Salir</button>
            </li>
          </ul>
        </nav>
      </div>
    </li>
  );
};

export default UserCard;
