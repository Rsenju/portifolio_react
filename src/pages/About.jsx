export default function About() {
  return (
    <div className="bg-zinc-950 text-zinc-100 pt-24">

      <div className="max-w-3xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-light">
          Sobre
        </h2>

        <p className="mt-6 text-zinc-400">
          Sou formada em Análise e Desenvolvimento de Sistemas
          e encontrei no Front-end a união entre lógica e criatividade.
        </p>

        <p className="mt-4 text-zinc-500">
          Foco na criação de interfaces modernas, organizadas
          e com atenção à experiência do usuário.
        </p>

        <div className="mt-10">
          <h3 className="text-lg text-zinc-300">Stack</h3>
          <p className="mt-2 text-zinc-500">
            React · JavaScript · Tailwind · Git
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-lg text-zinc-300">Contato</h3>
          <p className="mt-2 text-zinc-500">
            email@email.com
          </p>
        </div>

      </div>
    </div>
  )
}