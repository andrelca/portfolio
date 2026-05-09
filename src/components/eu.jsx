import { motion } from "framer-motion";
import { Mail, ExternalLink, Briefcase, FolderGit2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaJava } from "react-icons/fa";
import {
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import logoKaleidoscope from '../assets/logoComNome.svg';
import logoEconect from '../assets/logeconect.svg';


export default function Portfolio() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const tecnologias = [
    { nome: "Java", icone: <FaJava className="h-10 w-10 text-[#007396]" /> },
    { nome: "TypeScript", icone: <SiTypescript className="h-10 w-10 text-[#3178C6]" /> },
    { nome: "JavaScript", icone: <SiJavascript className="h-10 w-10 text-[#F7DF1E]" /> },
    { nome: "React", icone: <SiReact className="h-10 w-10 text-[#61DAFB]" /> },
    { nome: "Tailwind", icone: <SiTailwindcss className="h-10 w-10 text-[#38BDF8]" /> },
    { nome: "HTML", icone: <SiHtml5 className="h-10 w-10 text-[#E34F26]" /> },
    { nome: "CSS", icone: <SiCss className="h-10 w-10 text-[#1572B6]" /> },
    { nome: "Vite", icone: <SiVite className="h-10 w-10 text-[#646CFF]" /> },
    { nome: "Git", icone: <SiGit className="h-10 w-10 text-[#F05032]" /> },
    { nome: "GitHub", icone: <SiGithub className="h-10 w-10 text-white" /> },
    { nome: "VSCode", icone: <VscVscode className="h-10 w-10 text-[#007ACC]" /> },
    { nome: "Figma", icone: <SiFigma className="h-10 w-10 text-[#F24E1E]" /> },
  ];

  const projetos = [
    {
      titulo: "Kaleidoscope",
      imagem: logoKaleidoscope,
      link: "https://kaleidoscope.com.br/",
      descricao: "Site institucional com design moderno e animações fluidas",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      titulo: "Econect Ambiental",
      imagem: logoEconect,
      link: "https://econectambiental.com.br/",
      descricao: "Dashboard e landing page para consultoria ambiental",
      tags: ["React", "Vite", "TypeScript"],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-blue-600/30 selection:text-blue-200">
      <main className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="space-y-32"
        >
          {/* Header */}
          <motion.header variants={fadeInUp} className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              André Cavalcanti
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 font-light">
              Front-End Developer & UI Enthusiast
            </p>
            
            <div className="flex items-center justify-center gap-4 pt-4">
              <a
                href="https://github.com/andrelca"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/andreluiscavalcantiaraujo/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="mailto:andreluiscaraujo@gmail.com"
                className="p-3 text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                <Mail size={22} />
              </a>
            </div>
          </motion.header>

          {/* Stack */}
          <motion.section variants={fadeInUp} className="space-y-10">
            <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-[0.2em] text-center">
              Tecnologias
            </h2>
            
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
              {tecnologias.map((tech) => (
                <div
                  key={tech.nome}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-neutral-900/50 transition-colors"
                >
                  {tech.icone}
                  <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">
                    {tech.nome}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Experiência */}
          <motion.section variants={fadeInUp} className="space-y-10">
            <div className="flex items-center justify-center gap-3">
              <Briefcase className="w-4 h-4 text-neutral-500" />
              <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-[0.2em]">
                Experiência
              </h2>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30">
                
                <h3 className="text-2xl font-semibold mb-1">Kaleidoscope</h3>
                <p className="text-neutral-400 mb-6">Front-end Developer & UI/UX</p>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  Responsável pelo desenvolvimento front-end dos projetos Kaleidoscope e Econect, 
                  atuando desde o design até a implementação das interfaces. Criação de layouts 
                  responsivos com foco em performance e usabilidade, utilizando React e Tailwind CSS.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {["React", "TypeScript", "Tailwind CSS", "Vite", "UI/UX", "Responsivo"].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 text-xs text-neutral-400 bg-neutral-800/50 rounded-full border border-neutral-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Projetos */}
          <motion.section variants={fadeInUp} className="space-y-10">
            <div className="flex items-center justify-center gap-3">
              <FolderGit2 className="w-4 h-4 text-neutral-500" />
              <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-[0.2em]">
                Projetos
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {projetos.map((projeto) => (
                <a
                  key={projeto.titulo}
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all"
                >
                  <div className="h-32 flex items-center justify-center mb-6 bg-neutral-900/50 rounded-xl border border-neutral-800 p-6">
                    <img 
                      src={projeto.imagem} 
                      alt={projeto.titulo}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold group-hover:text-neutral-200 transition-colors">
                      {projeto.titulo}
                    </h3>
                    <ExternalLink size={16} className="text-neutral-600 group-hover:text-neutral-400 transition-colors flex-shrink-0 mt-1" />
                  </div>
                  
                  <p className="text-sm text-neutral-500 mb-4">
                    {projeto.descricao}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {projeto.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[11px] text-neutral-500 bg-neutral-800/50 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </motion.section>

        </motion.div>
      </main>
    </div>
  );
}