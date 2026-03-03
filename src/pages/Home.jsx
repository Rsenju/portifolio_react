import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-100">

      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl md:text-6xl font-light tracking-wide">
          Front-end Developer
        </h1>

        <p className="mt-4 text-zinc-400 text-lg">
          Focada em UI & UX.
        </p>

        <p className="mt-6 text-zinc-500">
          Crio interfaces modernas, organizadas
          e pensadas para a melhor experiência do usuário.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <Link
            to="/projects"
            className="border border-zinc-700 px-6 py-2 hover:border-zinc-400 transition"
          >
            Ver Projetos
          </Link>

          <Link
            to="/about"
            className="border border-zinc-700 px-6 py-2 hover:border-zinc-400 transition"
          >
            About
          </Link>
        </div>
      </div>

    </section>
  )
}