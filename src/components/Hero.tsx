import { motion } from "motion/react";
import { ArrowDown, Bot, Sparkles, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Scientific Technical Data Overlays */}
      <div className="absolute inset-x-0 top-32 pointer-events-none container mx-auto px-12 flex justify-between items-start opacity-30 h-0 z-0">
        <div className="font-mono text-[8px] space-y-1">
          <div className="text-neon-cyan">[BOOT_SEQUENCE_V2.4]</div>
          <div>CPU_THREAD_STABLE: 0x8FA4</div>
          <div>MEM_ALLOC: 4096GB/EXA</div>
          <div className="text-white/20">{" >> "} INITIALIZING_AEGIS_CORE...</div>
        </div>
        <div className="text-right font-mono text-[8px] space-y-1">
          <div className="text-neon-cyan">LATITUDE: 22.5726° N</div>
          <div>LONGITUDE: 88.3639° E</div>
          <div>TIME_SYNC_STABLE</div>
          <div className="text-white/20">{" >> "} PROTOCOL_ESTABLISHED</div>
        </div>
      </div>

      {/* HUD Overlays */}
      <div className="absolute inset-0 pointer-events-none container mx-auto">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-neon-cyan/10 rounded-full opacity-20"
        >
          <div className="absolute top-0 left-1/2 w-4 h-4 bg-neon-cyan rounded-full shadow-[0_0_15px_#00F0FF]" />
        </motion.div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="w-16 h-16 mx-auto mb-8 relative"
        >
          <div className="absolute inset-0 bg-neon-cyan/20 blur-xl rounded-full animate-pulse" />
          <div className="w-full h-full border border-neon-cyan/50 rounded-lg flex items-center justify-center rotate-45 group">
             <div className="w-8 h-8 bg-neon-cyan/10 rounded-sm -rotate-45" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-8"
        >
          ROHIT <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-neon-cyan/50">
            SARKAR
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl font-light text-white/60 max-w-lg mx-auto leading-relaxed border-l-2 border-white/10 pl-6 mb-12"
        >
          Designing next-generation digital experiences that feel fast, immersive, intelligent, and unforgettable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#projects" className="futuristic-btn bg-white text-black hover:bg-neon-cyan hover:text-black border-transparent scale-110">
            View Projects
          </a>
          <a href="#contact" className="futuristic-btn">
            Hire Me
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
}
