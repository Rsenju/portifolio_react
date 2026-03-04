const mainProject = {
  title: "PetFinder",
  description: "Pequenas ONGs e abrigos de animais frequentemente enfrentam dificuldades de visibilidade digital.",
  details: "O PetFinder centraliza informações de ONGs de uma região, facilitando adoções e doações de forma organizada e acessível.",
  tech: ["React", "JavaScript", "Tailwind", "Vite"],
  github: "https://github.com/Rsenju/Projeto---SitePet",
  deploy: "https://sitepetlanding-page.vercel.app",
  image: "/petfinder-preview.png"
}

const secondaryProjects = [
  {
    id: 1,
    title: "Contact Page UI",
    description: "Interface de página de contato desenvolvida com foco em usabilidade e organização visual.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Rsenju/projeto-contatos",
    deploy: "https://contact-page-ui.vercel.app",
    image: "/contact-page-preview.png"
  },
  {
    id: 2,
    title: "Planning Page",
    description: "Landing page para apresentação de planos e preços, com design clean e responsivo.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Rsenju/Projeto_pag_plano",
    deploy: "https://planning-page-ui.vercel.app",
    image: "/planning-page-preview.png"
  },
  {
    id: 3,
    title: "Portfólio v1",
    description: "Meu primeiro portfólio desenvolvido com HTML e CSS puro, explorando animações e design responsivo.",
    tech: ["HTML5", "CSS3", "Google Fonts"],
    github: "https://github.com/Rsenju/projeto_portifolio",
    deploy: "https://rebeca-machado-portfolio.vercel.app",
    image: "/portfolio-v1-preview.png"
  }
]

export default function Projects() {
  return (
    <div className="bg-zinc-950 text-zinc-100 pt-24 min-h-screen">

      <div className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-light mb-16 text-center">
          Projetos
        </h2>

        {/* PROJETO PRINCIPAL - PetFinder */}
        <section className="grid md:grid-cols-2 gap-16 items-center border-b border-zinc-800 pb-20 mb-20">
          
          <div>
            <span className="text-xs text-zinc-500 uppercase tracking-widest mb-2 block">
              Projeto em Destaque
            </span>
            
            <h3 className="text-3xl md:text-4xl font-light">
              {mainProject.title}
            </h3>

            <p className="mt-6 text-zinc-400">
              {mainProject.description}
            </p>

            <p className="mt-4 text-zinc-500">
              {mainProject.details}
            </p>

            <div className="mt-8 text-sm text-zinc-500">
              {mainProject.tech.join(" · ")}
            </div>

            <div className="mt-8 flex gap-6">
              <a 
                href={mainProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-700 px-5 py-2 hover:border-zinc-400 hover:text-zinc-100 transition"
              >
                GitHub
              </a>

              <a 
                href={mainProject.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-700 px-5 py-2 hover:border-zinc-400 hover:text-zinc-100 transition"
              >
                Ver Online
              </a>
            </div>
          </div>

          <div className="order-first md:order-last">
            <img
              src={mainProject.image}
              alt={`${mainProject.title} preview`}
              className="rounded-xl border border-zinc-800 w-full hover:border-zinc-600 transition duration-300"
            />
          </div>
        </section>

        {/* PROJETOS SECUNDÁRIOS */}
        <section>
          <h3 className="text-xl text-zinc-300 mb-8">
            Outros Projetos
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {secondaryProjects.map((project) => (
              <div 
                key={project.id}
                className="border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition duration-300 group flex flex-col"
              >
                {/* Imagem do projeto */}
                <div className="aspect-video overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-lg font-light text-zinc-100 group-hover:text-zinc-300 transition">
                    {project.title}
                  </h4>

                  <p className="mt-3 text-zinc-400 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <p className="mt-4 text-xs text-zinc-500">
                    {project.tech.join(" · ")}
                  </p>

                  <div className="mt-4 flex gap-4 text-sm">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-100 transition"
                    >
                      GitHub →
                    </a>
                    <a 
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-100 transition"
                    >
                      Ver →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}