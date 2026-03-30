import { motion } from 'motion/react';
import { Cpu, Database, Layers, Mic, ShieldCheck, LineChart, Activity, CheckCircle, Network } from 'lucide-react';

const iconMap: Record<string, any> = {
  Cpu, Database, Layers, Mic, ShieldCheck, LineChart, Activity, CheckCircle, Network
};

export default function TechBadge({ tech, color }: { tech: any, color: string }) {
  const Icon = tech.lucide ? iconMap[tech.lucide] : null;
  
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2, borderColor: color, backgroundColor: `${color}1A` }}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all cursor-default group"
    >
      {tech.icon ? (
        <img 
          src={tech.icon} 
          alt={tech.name} 
          className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity object-contain" 
        />
      ) : Icon ? (
        <Icon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
      ) : (
        <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
      )}
      <span className="text-xs font-medium text-white/70 group-hover:text-white transition-colors tracking-wide whitespace-nowrap">
        {tech.name}
      </span>
    </motion.div>
  );
}
