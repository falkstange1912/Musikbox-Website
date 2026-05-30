import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, Music, Play } from 'lucide-react';

export default function App() {
  return (
    // Hintergrund ist jetzt hell (bg-gray-50) und Schrift dunkel (text-gray-800)
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-red-600 selection:text-white">
      
      {/* 🟢 BEREICH 1: NAVIGATION (HEADER) - Jetzt hell mit feiner Linie */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 border-b border-gray-200 bg-white/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Das Logo-Symbol: Jetzt Schwarz mit roter Musiknote */}
            <div className="w-8 h-8 rounded bg-black flex items-center justify-center shadow-md">
              <Music className="w-5 h-5 text-red-500" />
            </div>
            {/* Firmenname */}
            <span className="font-display font-black text-xl tracking-wider text-black">
              MUSIKBOX
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a href="#" className="hover:text-red-600 transition-colors">Unterricht & Kurse</a>
            <a href="#" className="hover:text-red-600 transition-colors">Über uns</a>
            <a href="#" className="hover:text-red-600 transition-colors">Preise</a>
            <a href="#" className="hover:text-red-600 transition-colors">Kontakt</a>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            {/* Der Haupt-Button glänzt jetzt im Logo-Rot */}
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md shadow-red-600/10 hover:shadow-red-600/20 flex items-center gap-2">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-800 text-xs font-bold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                [🎉 JETZT ANMELDEN FÜR DIE NEUEN KURSE!]
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-gray-900">
                [Hier eine einladende <br/>
                <span className="text-red-600">Überschrift</span><br/>
                für Groß & Klein].
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-lg leading-relaxed font-medium"
            >
              [PLATZHALTER: Ein herzlicher Text, der Eltern und Kindern sofort zeigt, dass Musikunterricht hier richtig viel Spaß macht und ohne Leistungsdruck funktioniert.]
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-red-600/20 hover:shadow-red-600/30 flex items-center gap-2 group">
                [Kostenlose Probestunde]
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
            {/* Hauptbild-Kreis: Kind am Instrument */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full overflow-hidden border-4 border-white z-10 shadow-xl">
               <img src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=800&auto=format&fit=crop" alt="Musikunterricht für Kinder" className="w-full h-full object-cover" />
            </div>
            
            {/* Kleiner Kreis 1: Detail Gitarre/Freude */}
            <div className="absolute top-[10%] -left-[5%] w-44 h-44 rounded-full overflow-hidden border-4 border-white opacity-90 shadow-lg animate-[float_6s_ease-in-out_infinite]">
                <img src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop" alt="Gitarre spielen" className="w-full h-full object-cover" />
            </div>

            {/* Kleiner Kreis 2: Fröhliches Detail */}
            <div className="absolute bottom-[15%] -right-[5%] w-40 h-40 rounded-full overflow-hidden border-4 border-white opacity-90 shadow-lg animate-[float_8s_ease-in-out_infinite_reverse]">
               <img src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=800&auto=format&fit=crop" alt="Spaß an der Musik" className="w-full h-full object-cover" />
            </div>

            {/* Weiche, bunte Farbwolken im Hintergrund für den "kinderfreundlichen" Touch */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-200/40 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-yellow-200/50 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-200/30 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </section>


        {/* 🟢 BEREICH 3: UNSERE INSTRUMENTE / ANGEBOTE */}
        <section className="py-32 relative bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center md:text-left">
              <span className="text-red-600 font-display font-extrabold tracking-widest text-sm uppercase">[Unser Angebot]</span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mt-4 max-w-2xl leading-tight">
                [PLATZHALTER: Entdecke die Instrumente in der Musikbox.]
              </h2>
            </div>

            {/* Die Leistungskarten sind jetzt weiß mit weichem Schatten */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "[Frühziehung & Kinder]",
                  desc: "[PLATZHALTER: Spielerisch Musik entdecken für die ganz Kleinen. Singen, Trommeln und Spaß haben.]",
                  icon: "01",
                  color: "group-hover:text-yellow-500"
                },
                {
                  title: "[Instrumentalunterricht]",
                  desc: "[PLATZHALTER: Gitarre, Klavier, Schlagzeug und mehr für Kinder, Jugendliche und Erwachsene.]",
                  icon: "02",
                  color: "group-hover:text-red-500"
                },
                {
                  title: "[Bands & Ensembles]",
                  desc: "[PLATZHALTER: Gemeinsam mit anderen in einer echten Band spielen. Zusammen musizieren macht am meisten Spaß!]",
                  icon: "03",
                  color: "group-hover:text-blue-500"
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 group"
                >
                  <div className={`text-5xl font-display font-black text-gray-200 ${feature.color} transition-colors mb-8`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-display font-black text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 🟢 BEREICH 4: ABSCHLUSS (CALL TO ACTION) */}
        <section className="py-32 relative overflow-hidden bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-5xl md:text-6xl font-display font-black text-gray-900 mb-6 leading-tight">
                [Lust auf ein <span className="text-red-600 italic">Abenteuer?</span>]
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium">
                [PLATZHALTER: Komm vorbei und probiere dein Wunschinstrument einfach aus. Unsere Lehrer freuen sich schon auf dich!]
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-red-600/20 hover:shadow-red-600/30 flex items-center justify-center gap-3">
                  [Jetzt Probestunde vereinbaren]
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 🟢 BEREICH 5: FOOTER - Passend zum Logo: Schwarz */}
      <footer className="bg-black text-gray-400 py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-red-600 flex items-center justify-center">
              <Music className="w-3 h-3 text-white" />
            </div>
            <span className="font-display font-black tracking-wider text-white">MUSIKBOX</span>
          </div>
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} Musikbox Musikschule. Alle Rechte vorbehalten. | [Impressum] | [Datenschutz]
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.01); }
        }
      `}</style>
    </div>
  );
}
