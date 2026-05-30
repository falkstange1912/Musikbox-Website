import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, Music, Play } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 🟢 BEREICH 1: NAVIGATION (HEADER) */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
              {/* Hier kommt später das Firmenlogo hin */}
              <Music className="w-5 h-5 text-white" />
            </div>
            {/* Firmenname */}
            <span className="font-display font-bold text-xl tracking-wider text-white">
              [FIRMENNAME]
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Leistungen</a>
            <a href="#" className="hover:text-white transition-colors">Über uns</a>
            <a href="#" className="hover:text-white transition-colors">Referenzen</a>
            <a href="#" className="hover:text-white transition-colors">Kontakt</a>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full transition-colors flex items-center gap-2">
              [Kontakt aufnehmen]
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        
        {/* 🟢 BEREICH 2: STARTBILDSCHIRM (HERO SECTION) */}
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          <div className="space-y-8 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                [AKTUELLES ANGEBOT / NEWS]
              </div>
              <h1 className="font-display text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight text-white">
                [Starke Headline] <br/>
                <span className="text-orange-500">[Haupt-Nutzen]</span><br/>
                [Zusatz].
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-400 max-w-lg leading-relaxed"
            >
              [PLATZHALTER: Ein kurzer, überzeugender Text darüber, welches Problem das Unternehmen löst und warum der Kunde hier richtig ist.]
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 flex items-center gap-2 group">
                [Haupt-Button]
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full hidden lg:block"
          >
            {/* Hier können später Bilder des Unternehmens eingefügt werden */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full overflow-hidden border-2 border-white/10 z-10 shadow-2xl bg-white/5 flex items-center justify-center">
               <span className="text-gray-500">[PLATZHALTER: HAUPTBILD]</span>
            </div>
            
            <div className="absolute top-[10%] -left-[10%] w-48 h-48 rounded-full overflow-hidden border border-white/20 bg-white/5 flex items-center justify-center opacity-70 animate-[float_6s_ease-in-out_infinite]">
                <span className="text-gray-500 text-sm">[BILD 2]</span>
            </div>

            <div className="absolute bottom-[20%] -right-[5%] w-40 h-40 rounded-full overflow-hidden border border-white/20 bg-white/5 flex items-center justify-center opacity-80 shadow-xl animate-[float_8s_ease-in-out_infinite_reverse]">
               <span className="text-gray-500 text-sm">[BILD 3]</span>
            </div>

            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </section>

        {/* 🟢 BEREICH 3: EIGENSCHAFTEN / LEISTUNGEN */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <span className="text-blue-500 font-display font-bold tracking-widest text-sm uppercase">[Kategorie]</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4 max-w-2xl leading-tight">
                [PLATZHALTER: Warum Kunden dieses Unternehmen wählen sollten.]
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "[Leistung / Vorteil 1]",
                  desc: "[PLATZHALTER: Kurze Beschreibung, was dieser Vorteil dem Kunden bringt.]",
                  icon: "01"
                },
                {
                  title: "[Leistung / Vorteil 2]",
                  desc: "[PLATZHALTER: Kurze Beschreibung, was dieser Vorteil dem Kunden bringt.]",
                  icon: "02"
                },
                {
                  title: "[Leistung / Vorteil 3]",
                  desc: "[PLATZHALTER: Kurze Beschreibung, was dieser Vorteil dem Kunden bringt.]",
                  icon: "03"
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group"
                >
                  <div className="text-5xl font-display font-bold text-white/10 group-hover:text-blue-500/20 transition-colors mb-8">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 🟢 BEREICH 4: ABSCHLUSS (CALL TO ACTION) */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-white/5">
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]" />
          </div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                [PLATZHALTER: Letzte Aufforderung zur <span className="text-orange-500 italic">Aktion?</span>]
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                [PLATZHALTER: Kurzer Text, der dem Kunden den letzten Schubs gibt, sich zu melden.]
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-orange-600/20 flex items-center justify-center gap-3">
                  [Letzter Button]
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 🟢 BEREICH 5: FOOTER */}
      <footer className="border-t border-white/10 bg-[#020202] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-display font-bold tracking-wider text-white">
            [FIRMENNAME]
          </span>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} [FIRMENNAME]. Alle Rechte vorbehalten. | [Impressum] | [Datenschutz]
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.02); }
        }
      `}</style>
    </div>
  );
}
