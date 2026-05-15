import { motion } from "motion/react";
import { CheckCircle2, FastForward, Globe, Smartphone, ShieldCheck, Cpu, Lightbulb } from "lucide-react";

const features = [
  {
    title: "Velocity Optimized",
    desc: "Next-gen caching and asset optimization for instantaneous load times.",
    icon: FastForward,
  },
  {
    title: "AI-First Architecture",
    desc: "Deep integration with LLMs and neural systems for intelligent user experiences.",
    icon: Cpu,
  },
  {
    title: "Cross-Reality Design",
    desc: "Responsive layouts that adapt perfectly from smartphones to futuristic VR displays.",
    icon: Smartphone,
  },
  {
    title: "Global Scalability",
    desc: "Built on battle-tested cloud infrastructure capable of serving millions.",
    icon: Globe,
  },
];

export default function Features() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-px w-12 bg-neon-cyan/50" />
              <span className="text-neon-cyan font-mono text-sm uppercase tracking-widest">Protocol Analysis</span>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-tight">
              Engineering <br />
              <span className="text-white/40 italic font-display">Precision</span>
            </h2>
            <p className="text-white/50 text-xl mb-12 max-w-lg leading-relaxed font-light">
              Fusing theoretical science with practical engineering to create digital artifacts that redefine user interaction.
            </p>

            <div className="space-y-6">
              {["Deterministic logic architecture", "Neuro-adaptive interfaces", "Quantum-ready encryption flows", "Zero-latency synaptic response"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full border border-neon-cyan/20 flex items-center justify-center group-hover:bg-neon-cyan/10 group-hover:border-neon-cyan/50 transition-all">
                    <CheckCircle2 className="text-neon-cyan" size={14} />
                  </div>
                  <span className="text-white/70 font-mono text-[11px] uppercase tracking-widest group-hover:text-white transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Scientific Visualization Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden glass glow-border"
            >
              <img 
                src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1000&q=80" 
                alt="Scientific Visualization"
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-transparent mix-blend-overlay" />
              
              {/* HUD elements */}
              <div className="absolute top-10 left-10 p-4 border-l border-t border-neon-cyan/50 font-mono text-[10px] text-neon-cyan/80">
                DATA_STREAM: [STABLE]<br />
                BUFFER_LINK: 0x8F2
              </div>
              
              <div className="absolute bottom-10 right-10 p-4 border-r border-b border-neon-cyan/50 text-right font-mono text-[10px] text-white/40">
                SYSTEM_RENDER: V4.0.2<br />
                CORE_TEMP: 32.4°C
              </div>

              {/* Animated scanning line */}
              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-px bg-neon-cyan/40 shadow-[0_0_10px_#00F0FF] z-20"
              />
            </motion.div>

            {/* Grid of details */}
            <div className="absolute -bottom-12 -left-12 grid grid-cols-2 gap-4">
              <div className="p-4 glass rounded-2xl border border-white/5 shadow-2xl">
                 <Cpu className="text-neon-cyan mb-2" size={20} />
                 <div className="text-[10px] font-mono opacity-40">CHIPSET_ID</div>
                 <div className="text-sm font-bold">X-9 NEURAL</div>
              </div>
              <div className="p-4 glass rounded-2xl border border-white/5 shadow-2xl">
                 <Lightbulb className="text-neon-cyan mb-2" size={20} />
                 <div className="text-[10px] font-mono opacity-40">INNOVATION_INDEX</div>
                 <div className="text-sm font-bold">99.98%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
