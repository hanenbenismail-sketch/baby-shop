import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-pink-50 px-6 text-center">
      <h1 className="text-8xl font-extrabold text-pink-500">404</h1>

      <h2 className="mt-4 text-3xl font-bold text-gray-800">
        Page introuvable
      </h2>

      <p className="mt-3 max-w-md text-gray-600">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-pink-500 px-6 py-3 text-white font-semibold transition hover:bg-pink-600"
      >
        🏠 Retour à l'accueil
      </Link>
    </main>
  );
}