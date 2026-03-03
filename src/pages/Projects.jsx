export default function Projects() {
  return (
    <div className="bg-zinc-950 text-zinc-100 pt-24">

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Destaque Principal */}
        <section className="grid md:grid-cols-2 gap-16 items-center border-b border-zinc-800 pb-20">

          <div>
            <h2 className="text-3xl md:text-4xl font-light">
              PetFinder
            </h2>

            <p className="mt-6 text-zinc-400">
              Pequenas ONGs e abrigos de animais frequentemente enfrentam
              dificuldades de visibilidade digital.
            </p>

            <p className="mt-4 text-zinc-500">
              O PetFinder centraliza informações de ONGs de uma região,
              facilitando adoções e doações de forma organizada e acessível.
            </p>

            <div className="mt-8 text-sm text-zinc-500">
              React · JavaScript · Tailwind · Vite
            </div>

            <div className="mt-8 flex gap-6">
              <a className="border border-zinc-700 px-5 py-2 hover:border-zinc-400 transition">
                GitHub
              </a>

              <a className="border border-zinc-700 px-5 py-2 hover:border-zinc-400 transition">
                Deploy
              </a>
            </div>
          </div>

          <div>
            <img
              src="/petfinder-preview.png"
              alt="PetFinder preview"
              className="rounded-xl border border-zinc-800"
            />
          </div>

        </section>

      </div>
    </div>
  )
}

