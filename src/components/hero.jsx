import { FaJava } from 'react-icons/fa'
import {
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

export default function App() {
  const tecnologias = [
    { nome: 'Java', icone: <FaJava className="h-8 w-8 text-[#007396]" /> },
    { nome: 'JavaScript', icone: <SiJavascript className="h-8 w-8 text-[#F7DF1E]" /> },
    { nome: 'React', icone: <SiReact className="h-8 w-8 text-[#61DAFB]" /> },
    { nome: 'Tailwind', icone: <SiTailwindcss className="h-8 w-8 text-[#38BDF8]" /> },
    { nome: 'HTML', icone: <SiHtml5 className="h-8 w-8 text-[#E34F26]" /> },
    { nome: 'CSS', icone: <SiCss className="h-8 w-8 text-[#1572B6]" /> },
    { nome: 'Git', icone: <SiGit className="h-8 w-8 text-[#F05032]" /> },
    { nome: 'GitHub', icone: <SiGithub className="h-8 w-8 text-white" /> },
    { nome: 'VSCode', icone: <VscVscode className="h-8 w-8 text-[#007ACC]" /> },
    { nome: 'Figma', icone: <SiFigma className="h-8 w-8 text-[#F24E1E]" /> },
  ]

  return (
    <main
      className="relative flex min-h-screen flex-col text-white"
      style={{
        background: 'radial-gradient(circle at 40% 40%, #026fd4 0%, #03286c 100%)',
      }}
    >
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
        <nav className="mx-auto flex h-14 max-w-6xl items-center px-6">
          <h1 className="text-base font-semibold tracking-tight text-white">AndrelcA</h1>
        </nav>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl flex-grow px-6 py-32 text-center">
        <div className="flex flex-col items-center justify-center">
          <h1
            className="text-7xl leading-none md:text-8xl lg:text-[10rem]"
            style={{
              fontFamily: "'Noto Serif Display', serif",
              color: '#ffffff',
            }}
          >
            PORTFÓLIO
          </h1>

          <h2
            className="mt-6 text-4xl tracking-tight md:text-5xl lg:text-6xl"
            style={{
              fontFamily: "'Ultra', serif",
              color: '#dadada',
            }}
          >
            André Luis
          </h2>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-12">
        <div className="border-t border-white/20 pt-10">
          <p className="mb-6 text-center text-sm text-white/60">Tecnologias que utilizo</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {tecnologias.map((tech) => (
              <div
                key={tech.nome}
                className="group flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110"
              >
                {tech.icone}
                <span className="text-xs text-white/70 transition-colors group-hover:text-white/90 md:text-sm">
                  {tech.nome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
