import Link from "next/link";

const Categoria = ({ categoria }) => {
  return (
    <li className="w-full flex-1">
      <Link href={{ pathname: "/", query: { categoria: categoria.nombre } }}>
        <a className="link-categoria">{categoria.nombre}</a>
      </Link>
    </li>
  );
};

export default Categoria;
