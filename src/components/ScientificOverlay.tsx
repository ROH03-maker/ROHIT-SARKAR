import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function ScientificOverlay() {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = `0x${Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase()} | DATA_STREAM_${Math.floor(Math.random() * 100)} | ADDR_${Math.floor(Math.random() * 1000)}`;
      setData(prev => [newLog, ...prev].slice(0, 5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-24 left-6 z-50 pointer-events-none opacity-40 hidden lg:block">
      <div className="font-mono text-[9px] text-neon-cyan/60 space-y-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
          <span className="uppercase tracking-[0.2em] font-bold">Scientific Diagnostics</span>
        </div>
        {data.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1 - i * 0.2, x: 0 }}
            className="whitespace-nowrap"
          >
            {log}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
