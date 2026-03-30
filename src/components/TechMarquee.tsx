import { motion } from 'motion/react';

const techStack = [
  "React", "Three.js", "WebGL", "Rust", "Solidity", "PyTorch", 
  "TensorFlow", "Next.js", "Node.js", "GraphQL", "Web3.js", "Framer Motion", "TailwindCSS"
];

export default function TechMarquee() {
  return (
    <div className="w-full overflow-hidden py-12 border-y border-white/5 bg-white/[0.02] relative flex items-center">
      <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-[#1E1C22] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-[#1E1C22] to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        className="flex whitespace-nowrap gap-16 px-8 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {[...techStack, ...techStack].map((tech, i) => (
          <span key={i} className="text-white/30 font-space text-xl md:text-2xl font-medium uppercase tracking-widest hover:text-[#D4AF37] transition-colors cursor-default">
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
