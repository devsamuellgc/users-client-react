import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <header className="flex h-24 bg-indigo-500 shadow px-4 items-center gap-4">
        <Link
          className="text-white font-semibold text-xl p-2 border rounded-md hover:opacity-80"
          to="/login"
        >
          Faça o seu Login!
        </Link>
        <Link
          className="text-white font-semibold text-xl p-2 border rounded-md hover:opacity-80"
          to="/criar-conta"
        >
          Crie a sua conta!
        </Link>
      </header>
      <section>
        <h1>Página inicial</h1>
      </section>
    </main>
  );
}
