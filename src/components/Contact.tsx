import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MessageSquare, Shield, Bot, Sparkle, Loader2 } from "lucide-react";

export default function Contact() {
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: "user" | "ai"; text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = chatMessage;
    setChatMessage("");
    setChatHistory(prev => [...prev, { role: "user", text: userMsg }]);
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.details || data.error || "Neural desync detected.");
      }
      setChatHistory(prev => [...prev, { role: "ai", text: data.text }]);
    } catch (error: any) {
      console.error("Chat Error:", error);
      setChatHistory(prev => [...prev, { role: "ai", text: `Protocol Error: ${error.message}` }]);
    } finally {
      setIsTyping(false);
    }
  };
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-px w-12 bg-neon-cyan/50" />
              <span className="text-neon-cyan font-mono text-sm uppercase tracking-widest">Initialization</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
              Let's build <br />
              <span className="text-white/40">the Future.</span>
            </h2>
            <p className="text-white/50 text-xl mb-12 max-w-md leading-relaxed">
              Available for ultra-premium freelance projects, AI integration roles, and futuristic collaborative ventures.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 rounded-2xl glass glow-border group cursor-pointer hover:bg-white/5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/40 uppercase">Direct Protocol</div>
                  <div className="text-lg font-medium group-hover:text-neon-cyan transition-colors tracking-tight">rohitsarkarwork03@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 rounded-2xl glass glow-border group cursor-pointer hover:bg-white/5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                  <Shield size={24} />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/40 uppercase">Encrypted Signal</div>
                  <div className="text-lg font-medium group-hover:text-green-400 transition-colors tracking-tight">+91 8927598500</div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Chat Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden flex flex-col h-[600px] border border-white/5 shadow-2xl relative"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center border border-neon-cyan/30">
                    <Bot className="text-neon-cyan" size={20} />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-matte-black" />
                </div>
                <div>
                  <div className="text-sm font-bold tracking-tight">AEGIS</div>
                  <div className="text-[7px] font-mono text-white/40 uppercase leading-none mb-1">Autonomous Executive Guardian Intelligence System</div>
                  <div className="text-[10px] font-mono text-green-500/80 uppercase">AI Online</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />)}
              </div>
            </div>

            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide" ref={scrollRef}>
              {chatHistory.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <Sparkle className="mb-4 animate-pulse" size={32} />
                  <p className="text-sm font-mono uppercase tracking-widest">Interface Ready. Speak to the Core.</p>
                </div>
              )}
              <AnimatePresence initial={false}>
                {chatHistory.map((chat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex ${chat.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[80%] p-4 rounded-2xl ${
                      chat.role === "user" ? "bg-neon-cyan text-black" : "bg-white/10 text-white/90"
                    }`}>
                      <p className="text-sm leading-relaxed">{chat.text}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl">
                    <Loader2 className="animate-spin text-neon-cyan" size={16} />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleChat} className="p-6 border-t border-white/5 bg-white/5">
              <div className="relative group">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Query the AI..."
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-6 pr-14 focus:outline-none focus:border-neon-cyan/50 text-sm transition-all"
                />
                <button
                  type="submit"
                  disabled={isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-neon-cyan/10 text-neon-cyan rounded-xl hover:bg-neon-cyan hover:text-black transition-all disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none border-2 border-white/5 rounded-3xl" />
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 border border-white/5 shadow-2xl relative"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-neon-cyan uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-neon-cyan/50 text-sm transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-neon-cyan uppercase tracking-wider">Project Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-neon-cyan/50 text-sm transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-neon-cyan text-black font-bold rounded-xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none border-2 border-white/5 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
