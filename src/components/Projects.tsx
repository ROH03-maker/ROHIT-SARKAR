import { motion } from "motion/react";
import { ExternalLink, Github, Monitor, PlayCircle } from "lucide-react";

const projects = [
  {
    title: "AEGIS AI Assistant",
    category: "AI & Automation",
    image: "/aegis logo.png",
    desc: "A multimodal AI agent capable of managing complex business workflows and voice interaction.",
    tags: ["Gemini", "Node.js", "React"],
    size: "large",
    data: "CORE_PROCESS_0x1A",
    link: "https://rohit-sarkar-3dja.vercel.app/",
  },
  {
    title: "Cyber-Pulse Dashboard",
    category: "Futuristic UI",
    image: "/ChatGPT Image May 15, 2026, 01_51_57 PM.png",
    desc: "Real-time biometric monitoring system with holographic visualizers.",
    tags: ["Three.js", "GSAP", "Socket.io"],
    size: "small",
    data: "BIO_METRIC_SENS",
    link: "#",
  },
  {
    title: "Neural-Loom",
    category: "Automation",
    image: "/ChatGPT Image May 15, 2026, 01_43_29 PM.png",
    desc: "Autonomous content generation engine for high-end digital brands.",
    tags: ["Python", "OpenAI", "Firebase"],
    size: "small",
    data: "GEN_V3_ACTIVE",
    link: "#",
  },
  {
    title: "Project Orion",
    category: "Interactive Web",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
    desc: "An immersive 3D space exploration portal for next-gen education.",
    tags: ["React Three Fiber", "Tailwind"],
    size: "large",
    data: "ORBIT_01_NAV",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background technical data */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] font-mono text-[8px] leading-none overflow-hidden select-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap mb-1">
            {Array.from({ length: 20 }).map((_, j) => (
              <span key={j} className="mr-8">
                {Math.random().toString(36).substring(2, 15).toUpperCase()} 
                {" | "} 
                0x{Math.floor(Math.random() * 0xFFFF).toString(16).padStart(4, '0')}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-px w-12 bg-neon-cyan/50" />
              <span className="text-neon-cyan font-mono text-sm uppercase tracking-widest">Experimental</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Bento <br />
              <span className="text-white/40 font-display italic">Showcase</span>
            </h2>
          </div>
          <p className="max-w-md text-white/40 text-lg md:text-right border-l md:border-l-0 md:border-r border-white/10 pl-6 md:pl-0 md:pr-6">
            A selection of state-of-the-art projects ranging from AI agents to immersive 3D universes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`group relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-md ${
                project.size === "large" ? "lg:col-span-2" : "col-span-1"
              } hover:border-neon-cyan/50 transition-all duration-700`}
            >
              {/* Technical readout corner */}
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[8px] font-mono text-neon-cyan bg-black/80 px-2 py-1 rounded-sm border border-neon-cyan/30">
                  {project.data}
                </span>
              </div>

              {/* Image Container */}
              <div className="aspect-[16/9] md:aspect-auto md:h-[450px] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-30 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/60 to-transparent" />
                
                {/* HUD Elements */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-neon-cyan/40" />
                  <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-neon-cyan/40" />
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-[10px] text-white/50 font-mono uppercase tracking-[0.2em] group-hover:border-neon-cyan/30 group-hover:text-neon-cyan/80 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-end justify-between gap-4">
                  <div className="flex-1">
                    <div className="overflow-hidden mb-1">
                       <motion.div 
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        className="text-[10px] font-mono text-neon-cyan/80 font-bold uppercase tracking-[0.4em]"
                       >
                        {project.category}
                       </motion.div>
                    </div>
                    <h3 className="text-3xl font-bold mb-3 group-hover:text-neon-cyan transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/40 line-clamp-2 max-w-sm group-hover:text-white/60 transition-colors leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/5 border border-white/10 hover:border-neon-cyan hover:bg-neon-cyan hover:text-black rounded-full backdrop-blur-xl transition-all duration-500 flex items-center justify-center"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex justify-center"
        >
          <button className="futuristic-btn group flex items-center gap-2">
            <span>Explore All Systems</span>
            <PlayCircle className="w-4 h-4 group-hover:scale-125 transition-all text-neon-cyan" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
