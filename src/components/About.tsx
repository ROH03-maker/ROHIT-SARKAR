import { motion } from "motion/react";
import { Globe, GraduationCap, MapPin, User } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "AI Systems Built", value: "12" },
  { label: "Coffee Consumed", value: "∞" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden glow-border aspect-square">
              <img
                src="Human Brain And Electric Cheap Creative Art Design Backgrounds _ JPG Free Download - Pikbest.jpeg"
                alt="AI Neural Network"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/80 to-transparent" />
            </div>
            
            {/* HUD element */}
            <div className="absolute -bottom-6 -right-6 z-20 glass p-6 rounded-xl border-neon-cyan/30 overflow-hidden group">
              <div className="flex items-center gap-4 relative">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-neon-cyan/30 rounded-full"
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-6 rounded-full bg-neon-cyan/20 blur-sm"
                  />
                  <div className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_10px_#00F0FF]" />
                </div>
                <div>
                  <motion.div 
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-[10px] font-mono text-neon-cyan uppercase tracking-tighter"
                  >
                    Neural_Link_Scanning...
                  </motion.div>
                  <div className="text-sm font-bold tracking-tight text-white/90">AUTH_SUCCESS</div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/5">
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-neon-cyan shadow-[0_0_10px_#00F0FF]"
                />
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs uppercase font-mono tracking-widest mb-4"
              >
                Visionary Developer
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pushing the boundaries of <br />
                <span className="text-neon-cyan">Digital Existence</span>
              </h2>
              <p className="text-white/60 leading-relaxed max-w-xl text-lg">
                I am Rohit Sarkar, a West Bengal-based developer obsessed with the intersection of aesthetics and intelligence. 
                I don't just build websites; I craft digital ecosystems that breathe, learn, and captivate.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <MapPin className="text-neon-cyan mt-1" size={20} />
                <div>
                  <div className="text-xs text-white/40 uppercase font-mono tracking-wider">Location</div>
                  <div className="text-sm font-medium">West Bengal, India</div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <GraduationCap className="text-neon-cyan mt-1" size={20} />
                <div>
                  <div className="text-xs text-white/40 uppercase font-mono tracking-wider">Focus</div>
                  <div className="text-sm font-medium">AI & Future-Web</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/5">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-display font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
