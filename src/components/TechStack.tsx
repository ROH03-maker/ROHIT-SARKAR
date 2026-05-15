import { motion } from "motion/react";
import { Cpu, CpuIcon as Chip, Code2, Database, LayoutTemplate, Layers, Globe, Zap, Settings } from "lucide-react";

const technologies = [
  { name: "React", icon: LayoutTemplate, color: "text-blue-400" },
  { name: "Three.js", icon: Globe, color: "text-white" },
  { name: "Framer Motion", icon: Layers, color: "text-purple-400" },
  { name: "GSAP", icon: Zap, color: "text-green-400" },
  { name: "Node.js", icon: Code2, color: "text-emerald-400" },
  { name: "Firebase", icon: Database, color: "text-orange-400" },
  { name: "OpenAI", icon: Chip, color: "text-cyan-400" },
  { name: "Tailwind", icon: Globe, color: "text-sky-400" },
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white/[0.02]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] uppercase font-mono tracking-[0.3em] mb-8"
        >
          Integrated Systems
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter">
          Weapon of <br />
          <span className="text-neon-cyan">Choice</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="group p-8 glass rounded-3xl glow-border flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all duration-500"
            >
              <div className={`p-4 rounded-2xl bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-500 ${tech.color}`}>
                <tech.icon size={32} />
              </div>
              <span className="font-display font-medium text-sm tracking-wide opacity-60 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Ambient background lines */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-glow-purple to-transparent" />
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-neon-cyan to-transparent" />
          <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-glow-purple to-transparent" />
        </div>
      </div>
    </section>
  );
}
