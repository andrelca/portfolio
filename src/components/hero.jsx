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

// Assumindo que você tem a imagem do peixe em assets/peixo.jpg
import peixeImg from '../assets/peixo.jpg'

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
    <main className="relative flex min-h-screen flex-col text-white bg-[#1a1a1a]">
      {/* Imagem de Fundo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={peixeImg} 
          alt="Fundo Portfólio" 
          /* Mantemos object-cover, mas adicionamos object-top para priorizar a visualização da parte superior/rosto da pintura em telas menores */
          className="h-full w-full object-cover object-top md:object-center"
        />
      </div>

      {/* Seção do Texto Principal (Ajustado mais para o centro dependendo da tela) */}
      {/* O uso do "pl" (padding-left) dinâmico empurra o texto da esquerda para mais perto do centro em telas maiores */}
      <section className="relative z-10 flex-grow w-full pt-28 sm:pt-32 md:pt-40 pl-8 sm:pl-16 md:pl-32 lg:pl-[18%] xl:pl-[22%]">
        <div className="flex flex-col items-start justify-start max-w-3xl">
          <h1
            className="text-5xl sm:text-6xl leading-tight md:text-7xl lg:text-[6.5rem]"
            style={{
              fontFamily: "'Arial Black', 'Impact', 'Poppins', sans-serif",
              fontWeight: '900',
              color: '#ffffff',
              letterSpacing: '-0.02em',
              textShadow: '2px 2px 8px rgba(0,0,0,0.4)', // Sombra sutil para garantir leitura
            }}
          >
            Meu
          </h1>
          
          <h1
            className="text-5xl sm:text-6xl leading-none md:text-7xl lg:text-[6.5rem]"
            style={{
              fontFamily: "'Arial Black', 'Impact', 'Poppins', sans-serif",
              fontWeight: '900',
              color: '#ffffff',
              letterSpacing: '-0.02em',
              textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
            }}
          >
            Portfólio
          </h1>

          <h2
            className="mt-4 text-2xl sm:text-3xl tracking-wide md:text-4xl lg:text-5xl"
            style={{
              fontFamily: "'Arial Black', 'Impact', 'Inter', sans-serif",
              fontWeight: '900',
              color: '#ffffff',
              textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
            }}
          >
            André Luis
          </h2>
        </div>
      </section>

      {/* Seção de Tecnologias */}
      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-8 mt-auto">
        <div className="pt-6">
          <p className="mb-4 text-center text-sm font-bold text-white drop-shadow-md">Tecnologias que utilizo</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
            {tecnologias.map((tech) => (
              <div
                key={tech.nome}
                className="group flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110"
              >
                <div className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]">
                  {tech.icone}
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition-colors md:text-sm">
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