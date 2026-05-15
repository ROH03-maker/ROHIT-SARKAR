import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const skeletonX = useSpring(cursorX, springConfig);
  const skeletonY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Main Glow */}
      <motion.div
        style={{
          x: skeletonX,
          y: skeletonY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="w-8 h-8 rounded-full bg-neon-cyan/30 blur-xl"
      />
      {/* Dot */}
      <motion.div
        style={{
          x: skeletonX,
          y: skeletonY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_10px_#00F0FF]"
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-neon-cyan opacity-50" />
      </motion.div>
      {/* Ring */}
      <motion.div
        style={{
          x: skeletonX,
          y: skeletonY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="w-12 h-12 rounded-full border border-neon-cyan/20 scale-100"
      />
    </div>
  );
}
