import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Projetos() {
  const redes = [
    {
      nome: "Instagram",
      usuario: "@llui_andre",
      link: "https://www.instagram.com/llui_andre/",
      descricao: "Minhas pinturas e desenhos",
      icone: FaInstagram,
      gradient: "from-purple-900/50 via-pink-900/40 to-orange-900/50",
      corIcone: "text-pink-400",
      corHover: "group-hover:text-pink-300",
    },
    {
      nome: "LinkedIn",
      usuario: "André Luís Cavalcanti",
      link: "https://www.linkedin.com/in/andreluiscavalcantiaraujo/",
      descricao: "Trajetória profissional e networking",
      icone: FaLinkedin,
      gradient: "from-blue-900/50 via-blue-800/40 to-cyan-900/50",
      corIcone: "text-blue-400",
      corHover: "group-hover:text-blue-300",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Redes
          </h1>
          <p className="text-neutral-500 text-lg">
            Me encontre por aí
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {redes.map((rede, index) => (
            <motion.a
              key={rede.nome}
              href={rede.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${rede.gradient} border border-neutral-800 hover:border-neutral-700 transition-all duration-500`}
            >
              <div className="p-12 md:p-16 lg:p-20 flex flex-col items-center text-center relative z-10">
                <rede.icone 
                  size={80} 
                  className={`${rede.corIcone} ${rede.corHover} transition-colors mb-8`} 
                />
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 group-hover:text-white transition-colors">
                  {rede.nome}
                </h2>
                
                <p className="text-neutral-400 text-lg mb-2">
                  {rede.usuario}
                </p>
                
                <p className="text-neutral-500 text-base max-w-xs">
                  {rede.descricao}
                </p>
                
                <span className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full border border-neutral-700 group-hover:border-neutral-500 text-sm font-medium text-neutral-300 group-hover:text-white transition-all">
                  Visitar perfil
                  <ExternalLink size={14} />
                </span>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}