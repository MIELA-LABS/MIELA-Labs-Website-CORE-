import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const lines = [
  "INIT_SYSTEM v9.4.2",
  "Loading core modules...",
  "[OK] WebGL Context Established",
  "[OK] Neural Pathways Synced",
  "[OK] Cryptographic Keys Verified",
  "Mounting MIELA_LABS_OS...",
  "SYSTEM READY."
];

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= lines.length) {
          clearInterval(interval);
          setTimeout(onComplete, 800); // Wait a bit after finishing
          return prev;
        }
        return prev + 1;
      });
    }, 250);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-[#0a0a0c] flex flex-col justify-center px-8 md:px-24 font-mono text-xs md:text-sm text-[#0D9488]"
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="max-w-3xl">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }}
            className="mb-2"
          >
            {line.startsWith('[OK]') ? (
              <><span className="text-[#D4AF37]">[OK]</span> {line.replace('[OK] ', '')}</>
            ) : line.startsWith('SYSTEM READY') ? (
              <span className="text-white font-bold">{line}</span>
            ) : (
              line
            )}
          </motion.div>
        ))}
        {visibleLines < lines.length && (
          <motion.div 
            animate={{ opacity: [1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-3 h-4 bg-[#0D9488] inline-block ml-2 align-middle"
          />
        )}
      </div>
    </motion.div>
  );
}
