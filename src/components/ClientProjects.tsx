import { motion } from "motion/react";
import { ExternalLink, CheckCircle2, Globe, ArrowUpRight } from "lucide-react";

const clientProjects = [
  {
    title: "Anamika Roy Portfolio",
    category: "Professional Production",
    image: "/PHOTO.png",
    desc: "A bespoke digital showcase for traditional mehendi artistry and artisanal wool crafts. Built with high-performance optimization and custom aesthetics.",
    tags: ["Vercel", "Professional", "Lifestyle"],
    data: "PROD_REL_01",
    link: "https://anamika-roy.vercel.app/",
    metrics: ["100% Client Satisfaction", "Ultra-fast Loading", "Mobile Optimized"]
  },
  // Add more client projects here in the future
];

export default function ClientProjects() {
  return (
    <section id="clients" className="py-24 px-6 relative overflow-hidden bg-white/[0.01]">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-px w-8 bg-neon-cyan/50" />
            <span className="text-neon-cyan font-mono text-xs uppercase tracking-[0.5em]">Real World Infrastructure</span>
            <div className="h-px w-8 bg-neon-cyan/50" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Client <span className="text-white/40 italic font-display">Success Stories</span>
          </h2>
          <p className="max-w-2xl text-white/40 text-lg">
            Engineering robust digital solutions for visionary clients. Each project is a testament to technical excellence and professional commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {clientProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass p-8 rounded-[2rem] border border-white/5 hover:border-neon-cyan/20 transition-all duration-700"
            >
              {/* Image Side */}
              <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] lg:aspect-auto lg:h-[400px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-matte-black/80 to-transparent lg:hidden" />
                
                {/* Tech Badges */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="text-neon-cyan font-mono text-[10px] uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                    <Globe size={12} />
                    LIVE_DEPLOYMENT_ACTIVE
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed text-sm">
                    {project.desc}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 gap-3 py-4 border-y border-white/5">
                  {project.metrics.map(metric => (
                    <div key={metric} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-neon-cyan/10 flex items-center justify-center border border-neon-cyan/20">
                        <CheckCircle2 className="text-neon-cyan" size={10} />
                      </div>
                      <span className="text-[11px] font-mono text-white/60 uppercase tracking-wider">{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 bg-neon-cyan text-black font-bold rounded-xl flex items-center justify-center gap-2 group/btn hover:bg-white transition-all transform active:scale-95"
                  >
                    View Live Site
                    <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                  <div className="px-4 py-3 border border-white/10 rounded-xl font-mono text-[10px] text-white/30">
                    ID: {project.data}
                  </div>
                </div>
              </div>
              
              {/* Background HUD decorative lines */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-white/5 pointer-events-none group-hover:border-neon-cyan/20 transition-all" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-white/5 pointer-events-none group-hover:border-neon-cyan/20 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
