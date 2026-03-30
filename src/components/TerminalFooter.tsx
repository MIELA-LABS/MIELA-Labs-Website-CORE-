import { Terminal, Github, Mail, Code } from 'lucide-react';

export default function TerminalFooter() {
  return (
    <section id="contact" className="py-24 px-6 relative z-10 border-t border-white/5 bg-[#0a0a0c]">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-xl border border-white/10 bg-[#13111A] overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="mx-auto flex items-center gap-2 text-white/40 text-xs font-mono">
              <Terminal className="w-3 h-3" /> root@mielalabs:~
            </div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base text-white/70 space-y-4">
            <div><span className="text-[#9D4EDD]">root@mielalabs</span>:<span className="text-[#0D9488]">~</span>$ ./initiate_contact.sh</div>
            <div className="text-white/50">Initializing secure communication channels...</div>
            <div className="text-[#D4AF37]">[SUCCESS] Channels open.</div>
            
            <div className="pt-4 space-y-4">
              <a href="mailto:contact@mielalabs.proton.me" className="flex items-center gap-4 hover:text-white transition-colors group w-fit">
                <span className="text-[#4C1D95]">{'>'}</span> <Mail className="w-4 h-4 text-white/40 group-hover:text-[#D4AF37]" /> contact@mielalabs.proton.me
              </a>
              <a href="https://github.com/hakanovski" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-white transition-colors group w-fit">
                <span className="text-[#4C1D95]">{'>'}</span> <Github className="w-4 h-4 text-white/40 group-hover:text-[#D4AF37]" /> github.com/hakanovski
              </a>
              <a href="https://codepen.io/mielalabs" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-white transition-colors group w-fit">
                <span className="text-[#4C1D95]">{'>'}</span> <Code className="w-4 h-4 text-white/40 group-hover:text-[#D4AF37]" /> codepen.io/mielalabs
              </a>
            </div>
            
            <div className="pt-8 flex items-center gap-2">
              <span className="text-[#9D4EDD]">root@mielalabs</span>:<span className="text-[#0D9488]">~</span>$ <span className="w-2 h-5 bg-white/70 animate-pulse inline-block align-middle" />
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center text-xs text-white/30 font-space tracking-widest uppercase">
          © {new Date().getFullYear()} MIELA LABS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </section>
  );
}
