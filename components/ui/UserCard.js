import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import Router from "next/router";

const logOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      Router.reload();
    })
    .catch((error) => {
      // An error happened.
    });
};

const UserCard = ({ usuario }) => {
  const [activeClass, setActiveClass] = useState(false);
  return (
    <li>
      <div className="relative flex items-center gap-1">
        <Image
          className="rounded-full"
          src={usuario.photoURL}
          width={40}
          height={40}
          alt={`${usuario.displayName} photo`}
        />
        <button onClick={() => setActiveClass(!activeClass)}>
          <Image
            src="/images/down-filled-triangular-arrow.png"
            width={16}
            height={16}
            alt="arrow"
          />
        </button>
        <nav
          className={`absolute scale-0 duration-300 ease-in-out origin-top top-0 -left-8 w-28 bg-white rounded p-2 text-primary-gray dropdown ${activeClass} drop-shadow-lg`}
        >
          <ul className="divide-y-2 text-center">
            <li>
              <div className="font-semibold">{usuario.displayName}</div>
            </li>
            <li className="transition hover:bg-slate-50 rounded-2xl">
              <Link href="/crear-noticia">Publicar</Link>
            </li>
            <li className="transition hover:bg-slate-50 rounded-2xl">
              <button onClick={() => logOut()}>Salir</button>
            </li>
          </ul>
        </nav>
      </div>
    </li>
  );
};

export default UserCard;
