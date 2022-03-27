import Navbar from "../components/ui/Navbar";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <img
        src="/images/hero.jpg"
        className="w-screen height60 relative object-cover object-top"
      />
      <Navbar />

      <div className="mt-6 text-2xl text-black text-center animate-bounce 1s infinity">
        Hola
      </div>
    </div>
  );
}
