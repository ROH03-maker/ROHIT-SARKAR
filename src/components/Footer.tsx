import { motion } from "motion/react";
import { Cpu, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="py-20 px-6 border-t border-white/5 relative overflow-hidden bg-matte-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 flex items-center justify-center border border-neon-cyan/20">
                <Cpu className="w-5 h-5 text-neon-cyan" />
              </div>
              <span className="font-display font-bold text-lg tracking-tighter uppercase">
                ROHIT<span className="text-neon-cyan">.AI</span>
              </span>
            </div>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              Pioneering the web of tomorrow through engineering excellence and artistic audacity. Operating at the frontier of AI and human experience.
            </p>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, color: "#00F0FF" }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 font-mono text-[11px] text-white/40 uppercase tracking-widest">
              <li><a href="#about" className="hover:text-neon-cyan transition-colors">About Core</a></li>
              <li><a href="#services" className="hover:text-neon-cyan transition-colors">Systems</a></li>
              <li><a href="#projects" className="hover:text-neon-cyan transition-colors">Archives</a></li>
              <li><a href="#contact" className="hover:text-neon-cyan transition-colors">Initialize</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6 text-sm uppercase tracking-widest">Legal / Identity</h4>
            <ul className="space-y-4 font-mono text-[11px] text-white/40 uppercase tracking-widest">
              <li><span className="opacity-50">EST: 2024</span></li>
              <li><span className="opacity-50">LOC: WB_IN</span></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Privacy Protocal</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
          <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
            © 2024 Rohit Sarkar. All Rights Reserved. Systems Synchronized.
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/30 hover:text-white transition-all group"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Back to Top</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-all">
              <ArrowUpRight size={14} className="-rotate-45" />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Decorative Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
    </footer>
  );
}
