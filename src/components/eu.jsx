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

export default function PortifolioAltaVoltagem() {
  // Variantes para o container principal (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  // Variantes para itens padrão (fade in + slide up)
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  // Animação de flutuação para os ícones da stack
  const floatVariants = {
    animate: (i) => ({
      y: [0, -15, 0, 15, 0],
      x: [0, i % 2 === 0 ? 8 : -8, 0],
      rotate: [0, i % 2 === 0 ? 3 : -3, 0],
      transition: {
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      },
    }),
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
      link: "https://kaleidoscope.com.br/",
      descricao: "Site institucional com design moderno e animações fluidas",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      titulo: "Econect Ambiental",
      link: "https://econectambiental.com.br/",
      descricao: "Dashboard e landing page para consultoria ambiental",
      tags: ["React", "Vite", "TypeScript"],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans overflow-hidden relative selection:bg-blue-600 selection:text-white">
      
      {/* 1. BACKGROUND AZUL PROFUNDO E ANIMADO */}
      <div className="absolute inset-0 z-0">
        {/* Gradiente radial de fundo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,24,120,0.3)_0%,rgba(10,10,10,1)_70%)]" />
        
        {/* Nebulosa giratória lenta */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-10"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PGZpbHRlciBpZD0idGhlTm9pc2UiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjY1IiBzdGlja205ZGVzPSIzIiBzdGlja2hvbD0ieWVzIi8+PC9maWx0ZXI+PHJlY3QgdGlkeT0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjdGhlTm9pc2UpIiBmaWxsPSJub25lIi8+PC9zdmc+')] opacity-30"></div>
        </motion.div>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full space-y-24"
        >
          {/* HEADER COM TÍTULO NEON ANIMADO */}
          <motion.header variants={itemVariants} className="text-center space-y-4">
            <motion.h1 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              André Cavalcanti
            </motion.h1>
            <p className="text-2xl md:text-3xl text-neutral-300 font-light tracking-wide">
              Front-End Developer <span className="text-blue-500">⚡</span> UI Enthusiast
            </p>
            
            {/* BOTÕES SOCIAIS COM GIRO E BRILHO */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <SocialLink href="https://github.com/andrelca" icon={<FaGithub />} />
              <SocialLink href="https://www.linkedin.com/in/andreluiscavalcantiaraujo/" icon={<FaLinkedin />} />
              <SocialLink href="mailto:andreluiscaraujo@gmail.com" icon={<Mail />} />
            </div>
          </motion.header>

          {/* STACK DE TECNOLOGIAS COM ÍCONES FLUTUANTES */}
          <motion.section variants={itemVariants} className="space-y-6">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <h2 className="text-2xl font-black text-cyan-400 uppercase tracking-widest text-center">
                Tecnologias
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {tecnologias.map((tech, i) => (
                <motion.div
                  key={tech.nome}
                  custom={i}
                  variants={floatVariants}
                  animate="animate"
                  whileHover={{ 
                    scale: 1.3, 
                    filter: "drop-shadow(0 0 20px rgba(59,130,246,0.8))",
                  }}
                  className="flex flex-col items-center gap-3 p-4 bg-neutral-900/50 border border-blue-900/30 rounded-2xl backdrop-blur-sm transition-all hover:border-cyan-400 hover:bg-blue-950/50 cursor-default"
                >
                  {tech.icone}
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    {tech.nome}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* SEÇÃO DE EXPERIÊNCIA PROFISSIONAL */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-black text-cyan-400 uppercase tracking-widest text-center">
                Experiência Profissional
              </h2>
              <Briefcase className="w-6 h-6 text-cyan-400" />
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="p-8 rounded-3xl bg-blue-950/20 border-2 border-blue-900 backdrop-blur-xl hover:border-cyan-400 transition-all duration-300 group shadow-[0_0_15px_rgba(17,24,120,0.2)]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1 bg-cyan-400/20 text-cyan-400 text-sm font-bold rounded-full border border-cyan-400/30">
                    Atual
                  </span>
                </div>
                <h3 className="text-3xl font-black mb-2 group-hover:text-cyan-300 transition-colors">
                  Dipolum Consultoria
                </h3>
                <p className="text-xl text-neutral-300 mb-6 font-medium">
                  Front-end Developer & UI/UX
                </p>
                <p className="text-base text-neutral-300 leading-relaxed">
                  Criação de interfaces modernas, responsivas e focadas na usabilidade. 
                  Transformando designs em código limpo e performático para projetos de ponta. 
                  Desenvolvimento de dashboards e landing pages com React, TypeScript e Tailwind CSS.
                </p>
                
                {/* Tags de habilidades */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {["React", "TypeScript", "Tailwind CSS", "Vite", "UI/UX", "Responsivo"].map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-blue-900/30 border border-blue-700/30 rounded-full text-sm text-blue-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* SEÇÃO DE PROJETOS */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <FolderGit2 className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-black text-cyan-400 uppercase tracking-widest text-center">
                Projetos
              </h2>
              <FolderGit2 className="w-6 h-6 text-cyan-400" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {projetos.map((projeto, index) => (
                <ProjectCard key={index} projeto={projeto} />
              ))}
            </div>
          </motion.section>

        </motion.div>
      </main>
    </div>
  );
}

// Componentes Auxiliares com Animações Intensas

function SocialLink({ href, icon }) {
  return (
    <motion.a
      whileHover={{ 
        scale: 1.2, 
        rotate: 360, 
        boxShadow: "0 0 25px rgba(37,99,235,1)",
        borderColor: "#22d3ee"
      }}
      whileTap={{ scale: 0.9 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-5 bg-neutral-900 border-2 border-blue-700/50 rounded-full text-blue-500 backdrop-blur-sm shadow-[0_0_10px_rgba(37,99,235,0.3)]"
      style={{ fontSize: '24px' }}
    >
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {icon}
      </motion.div>
    </motion.a>
  );
}

function ProjectCard({ projeto }) {
  return (
    <motion.a
      href={projeto.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 0 30px rgba(37,99,235,0.4)",
        borderColor: "#22d3ee",
        y: -5
      }}
      className="block p-8 rounded-3xl bg-blue-950/30 border-2 border-blue-900 backdrop-blur-xl transition-all group h-full"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-black text-neutral-100 group-hover:text-cyan-300 transition-colors flex-1">
            {projeto.titulo}
          </h3>
          <motion.div 
            whileHover={{ rotate: 45 }}
            className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_10px_rgba(37,99,235,0.5)] group-hover:bg-cyan-400 group-hover:text-neutral-950 transition-colors flex-shrink-0 ml-4"
          >
            <ExternalLink size={22} />
          </motion.div>
        </div>
        
        <p className="text-neutral-400 mb-6 flex-1">
          {projeto.descricao}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {projeto.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs text-blue-300 font-bold bg-blue-900/50 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}