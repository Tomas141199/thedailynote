import * as Yup from "yup";

export const registroSchema = () => {
  return Yup.object({
    nombre: Yup.string().required("El Nombre es obligatorio"),
    apellido: Yup.string().required("El Apellido es obligatorio"),
    email: Yup.string()
      .email("El Email no es valido")
      .required("El Email es obligatorio"),
    password: Yup.string()
      .required("La Contraseña es obligatorio")
      .min(6, "La Contraseña debe tener una longitud de 6"),
  });
};

const registroValues = {
  nombre: "",
  apellido: "",
  email: "",
  password: "",
};

export { registroValues };

export default registroSchema;

{
  /**Aqui va la petición y la nueva card */
}
// <div className="inline-block h85 rounded bg-white ml-8  shadow-xl mt-6  hover:scale-105 transition duration-700 hover:shadow-blue-500/50">
//   {/*<!-- card -->*/}
//   <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
//     {/*<!-- img -->*/}
//     <img
//       className="aspect-video w-96 rounded-t-2xl object-cover object-center"
//       src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     />
//     {/*<!-- text info -->*/}
//     <div className="p-4"></div>
//   </div>

//   <div className="flex justify-between justify-items-center content-center ">
//     <p className="m-2 mx-2 font-bold">
//       Hace: <span className="font-normal text-slate-500"></span>
//     </p>
//     <div>
//       <button className="mx-4">
//         <Image
//           blurDataURL="/images/logo-movil.svg"
//           src="/images/compartir.png"
//           width={30}
//           height={35}
//           alt="logo"
//         />
//       </button>
//       <button className="mx-4">
//         <Image
//           blurDataURL="/images/logo-movil.svg"
//           src="/images/heart.png"
//           width={30}
//           height={30}
//           alt="logo"
//         />
//       </button>
//     </div>
//   </div>
// </div>
