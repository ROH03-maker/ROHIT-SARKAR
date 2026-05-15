import { motion } from "motion/react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO, TechNova",
    text: "Rohit is operating on a completely different level. The website he built for us looks like it's from 2035. Pure magic.",
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Chen",
    role: "Product Manager, OpenAI",
    text: "His ability to integrate AI into seamless, beautiful interfaces is unmatched. A true visionary of the next-gen web.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Markus Thorne",
    role: "Director, Cyber Dynamics",
    text: "Interactive, immersive, and incredibly fast. Rohit delivered a digital experience that our competitors simply can't touch.",
    avatar: "https://i.pravatar.cc/150?u=markus",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-glow-purple/10 border border-glow-purple/20 text-glow-purple text-[10px] uppercase font-mono tracking-[0.3em] mb-4"
          >
            Encryption Verified
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            System <span className="text-white/40">Feedbacks</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass glow-border relative group overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-cyan/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" />
                <div>
                  <div className="font-bold tracking-tight text-white/90">{t.name}</div>
                  <div className="text-xs text-white/40 font-mono tracking-widest uppercase">{t.role}</div>
                </div>
              </div>
              <p className="text-white/60 italic leading-relaxed text-sm">
                "{t.text}"
              </p>
              
              {/* Star HUD */}
              <div className="mt-6 flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-neon-cyan/40" />)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
