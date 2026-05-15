import { motion } from "motion/react";
import { Bot, Code, Layout, Cpu, Zap, Radio, Terminal, Smartphone } from "lucide-react";

const services = [
  {
    title: "AI Assistant Development",
    desc: "Custom LLM integrations, conversational agents, and intelligent workflow automation.",
    icon: Bot,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Futuristic Web Design",
    desc: "State-of-the-art UI/UX that combines high-end aesthetics with high-performance code.",
    icon: Layout,
    color: "from-purple-500/20 to-blue-500/20",
  },
  {
    title: "Automation Systems",
    desc: "Streamlining business processes with custom-built software and autonomous scripts.",
    icon: Cpu,
    color: "from-cyan-500/20 to-emerald-500/20",
  },
  {
    title: "Interactive Experiences",
    desc: "Three.js and GSAP powered immersive worlds that live inside your browser.",
    icon: Zap,
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Voice Assistant Interfaces",
    desc: "Voice-activated futuristic dashboards and multimodal interface ecosystems.",
    icon: Radio,
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Portfolio Websites",
    desc: "Ultra-premium personal branding websites that help you stand out from the noise.",
    icon: Terminal,
    color: "from-pink-500/20 to-rose-500/20",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-matte-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-px w-12 bg-neon-cyan/50" />
            <span className="text-neon-cyan font-mono text-sm uppercase tracking-widest">Capabilities</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Architecting the <br />
            <span className="text-white/40">Next Digital Era</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-2xl group hover:border-neon-cyan/50 transition-all overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute -inset-2 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} />
              
              <div className="relative z-10">
                <div className="text-[10px] text-neon-cyan font-mono mb-6 uppercase tracking-[0.3em] font-semibold">0{i + 1} — {service.title.split(' ')[0]}</div>
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-neon-cyan transition-all group-hover:bg-neon-cyan/10">
                  <service.icon className="w-8 h-8 text-white group-hover:text-neon-cyan transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-neon-cyan text-[10px] font-mono font-bold tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  <span>INITIATE_SERVICE</span>
                  <div className="h-[1px] w-4 bg-neon-cyan" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
