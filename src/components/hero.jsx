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

import peixeImg from '../assets/mar.jpg'

export default function Hero() {
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
   <main className="relative flex min-h-screen flex-col text-white bg-black border-[12px] border-white overflow-hidden">

  {/* IMAGEM PRINCIPAL */}
  <div className="absolute inset-4 sm:inset-8 z-0">
    <img
      src={peixeImg}
      className="w-full h-full object-cover"
    />
  </div>

      {/* TEXTO */}
      <section className="relative z-10 flex-grow w-full pt-28 sm:pt-32 md:pt-40 pl-8 sm:pl-16 md:pl-32 lg:pl-[18%] xl:pl-[22%]">
        <div className="flex flex-col items-start max-w-3xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black leading-tight drop-shadow-lg">
            Meu
          </h1>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black leading-none drop-shadow-lg">
            Portfólio
          </h1>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black drop-shadow-lg">
            André Luis
          </h2>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      
    </main>
  )
}