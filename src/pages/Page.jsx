import { useState, useEffect, useRef } from "react";

const mainProject = {
  title: "PetFinder",
  description:
    "Pequenas ONGs e abrigos de animais frequentemente enfrentam dificuldades de visibilidade digital.",
  details:
    "O PetFinder centraliza informações de ONGs de uma região, facilitando adoções e doações de forma organizada e acessível.",
  tech: ["React", "JavaScript", "Tailwind", "Vite"],
  github: "https://github.com/Rsenju/petfinder",
  deploy: "https://petfinder-six.vercel.app",
  image: "/petfinder-preview.png",
};

const secondaryProjects = [
  {
    id: 1,
    title: "Chama Burger",
    description:
      "Sistema de delivery para lanchonete com cardápio digital e gerenciamento de pedidos.",
    tech: ["React", "JavaScript", "Tailwind", "Vite"],
    github: "https://github.com/Rsenju/Chama-Burger_final",
    deploy: "https://chama-burger-final.vercel.app",
    image: "/chama-burger-preview.png",
  },
  {
    id: 2,
    title: "Bar do Bruce",
    description:
      "Landing page moderna para bar e restaurante com design atrativo e responsivo.",
    tech: ["React", "JavaScript", "Tailwind", "Vite"],
    github: "https://github.com/Rsenju/bar-do-bruce",
    deploy: "https://bar-do-bruce.vercel.app",
    image: "/bar-do-bruce-preview.png",
  },
  {
    id: 3,
    title: "Contact Page UI",
    description:
      "Interface de página de contato desenvolvida com foco em usabilidade e organização visual.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Rsenju/projeto-contatos",
    deploy: "https://contact-page-ui.vercel.app",
    image: "/contact-page-preview.png",
  },
  {
    id: 4,
    title: "Planning Page",
    description:
      "Landing page para apresentação de planos e preços, com design clean e responsivo.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Rsenju/Projeto_pag_plano",
    deploy: "https://planning-page-ui.vercel.app",
    image: "/planning-page-preview.png",
  },
  {
    id: 5,
    title: "Portfólio v1",
    description:
      "Meu primeiro portfólio desenvolvido com HTML e CSS puro, explorando animações e design responsivo.",
    tech: ["HTML5", "CSS3", "Google Fonts"],
    github: "https://github.com/Rsenju/projeto_portifolio",
    deploy: "https://rebeca-machado-portfolio.vercel.app",
    image: "/portfolio-v1-preview.png",
  },
];

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");
  const [visibleProjects, setVisibleProjects] = useState(3);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      
      if (aboutRef.current && scrollPos > aboutRef.current.offsetTop) {
        setActiveSection("about");
      } else if (projectsRef.current && scrollPos > projectsRef.current.offsetTop) {
        setActiveSection("projects");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleProjects < secondaryProjects.length) {
          setVisibleProjects((prev) => Math.min(prev + 3, secondaryProjects.length));
        }
      },
      { threshold: 0.1 }
    );

    const loader = document.getElementById("projects-loader");
    if (loader) observer.observe(loader);
    return () => observer.disconnect();
  }, [visibleProjects]);

  const scrollTo = (section) => {
    if (section === "home") window.scrollTo({ top: 0, behavior: "smooth" });
    if (section === "projects") projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "about") aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-zinc-950 text-zinc-100">
      {/* HOME */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
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
            <button
              onClick={() => scrollTo("projects")}
              className="border border-zinc-700 px-6 py-2 hover:border-zinc-400 transition"
            >
              Ver Projetos
            </button>

            <button
              onClick={() => scrollTo("about")}
              className="border border-zinc-700 px-6 py-2 hover:border-zinc-400 transition"
            >
              About
            </button>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" ref={projectsRef} className="min-h-screen pt-24">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-light mb-16 text-center">Projetos</h2>

          <section className="grid md:grid-cols-2 gap-16 items-center border-b border-zinc-800 pb-20 mb-20">
            <div>
              <span className="text-xs text-zinc-500 uppercase tracking-widest mb-2 block">
                Projeto em Destaque
              </span>

              <h3 className="text-3xl md:text-4xl font-light">
                {mainProject.title}
              </h3>

              <p className="mt-6 text-zinc-400">{mainProject.description}</p>

              <p className="mt-4 text-zinc-500">{mainProject.details}</p>

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

          <section>
            <h3 className="text-xl text-zinc-300 mb-8">Outros Projetos</h3>

            <div className="grid md:grid-cols-3 gap-8">
              {secondaryProjects.slice(0, visibleProjects).map((project) => (
                <div
                  key={project.id}
                  className="border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition duration-300 group flex flex-col"
                >
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

            {visibleProjects < secondaryProjects.length && (
              <div id="projects-loader" className="h-20 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-zinc-700 border-t-zinc-400 rounded-full animate-spin"></div>
              </div>
            )}
          </section>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" ref={aboutRef} className="min-h-screen pt-24">
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
            
            <div className="mt-4 flex flex-col gap-3">
              <a 
                href="mailto:msena.rebeca@gmail.com" 
                className="text-zinc-500 hover:text-zinc-300 transition flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                msena.rebeca@gmail.com
              </a>

              <a 
                href="https://wa.me/5571994043159?text=Olá! Vi seu portfólio e gostaria de conversar."
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-green-400 transition flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}