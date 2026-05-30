import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, Music, Play } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
              <Music className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-white">RESONANCE</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Kurse</a>
            <a href="#" className="hover:text-white transition-colors">Über uns</a>
            <a href="#" className="hover:text-white transition-colors">Community</a>
            <a href="#" className="hover:text-white transition-colors">Kontakt</a>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <a href="#" className="hidden md:block text-gray-300 hover:text-white transition-colors">Login</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full transition-colors flex items-center gap-2">
              Probestunde
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* Section 1: Hook & Promise of Value */}
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
                NEUE KURSE VERFÜGBAR
              </div>
              <h1 className="font-display text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight text-white">
                Entfessle dein <br/>
                <span className="text-orange-500">Potenzial.</span><br/>
                Spiel laut.
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-400 max-w-lg leading-relaxed"
            >
              Professioneller Musikunterricht, der sich nach dir richtet. Vom ersten Akkord bis zum eigenen Song – wir bringen dich auf dein nächstes Level.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 flex items-center gap-2 group">
                Jetzt starten
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4 text-sm font-medium text-gray-400 group cursor-pointer hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                Unterricht ansehen
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full hidden lg:block"
          >
            {/* Collage elements imitating the AENA design */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full overflow-hidden border-2 border-white/10 z-10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2070&auto=format&fit=crop" 
                alt="Guitarist" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
            </div>
            
            <div className="absolute top-[10%] -left-[10%] w-48 h-48 rounded-full overflow-hidden border border-white/20 blur-[1px] opacity-70 animate-[float_6s_ease-in-out_infinite]">
              <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
            </div>

            <div className="absolute bottom-[20%] -right-[5%] w-40 h-40 rounded-full overflow-hidden border text-white/20 opacity-80 shadow-xl animate-[float_8s_ease-in-out_infinite_reverse]">
              <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="" />
            </div>
            
             <div className="absolute top-[60%] -left-[5%] w-32 h-32 rounded-full overflow-hidden border text-white/20 opacity-90 shadow-lg z-20">
              <img src="https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="" />
            </div>

            {/* Decorative circles */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </section>

        {/* Bar divider like AENA bottom collage placeholder */}
        <section className="mt-20 border-y border-white/5 bg-white/[0.02] py-8 overflow-hidden">
           <div className="max-w-7xl mx-auto px-6">
              <p className="text-center font-display text-sm tracking-[0.2em] text-gray-400 mb-8 uppercase">Was du bei uns lernst</p>
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-xl font-display font-medium text-gray-500">
                <span className="hover:text-blue-500 transition-colors cursor-default">Akustik Gitarre</span>
                <span className="text-white/20">•</span>
                <span className="text-white hover:text-orange-500 transition-colors cursor-default">E-Gitarre</span>
                <span className="text-white/20">•</span>
                <span className="hover:text-blue-500 transition-colors cursor-default">Klavier & Keys</span>
                <span className="text-white/20">•</span>
                <span className="hover:text-orange-500 transition-colors cursor-default">Musikproduktion</span>
                <span className="text-white/20">•</span>
                <span className="hover:text-blue-500 transition-colors cursor-default">Schlagzeug</span>
              </div>
           </div>
        </section>

        {/* Section 2: Details of Value Proposition */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <span className="text-blue-500 font-display font-bold tracking-widest text-sm uppercase">Der Unterricht</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4 max-w-2xl leading-tight">
                Warum unsere Schüler schneller Fortschritte machen.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Individueller Lehrplan",
                  desc: "Wir passen den Unterricht genau an deine musikalischen Ziele, deinen Geschmack und dein Lerntempo an. Keine Standard-Bücher.",
                  icon: "01"
                },
                {
                  title: "Dozenten aus der Praxis",
                  desc: "Ziele erreichen mit Lehrern, die selbst als professionelle Musiker auf der Bühne stehen oder in Studios produzieren.",
                  icon: "02"
                },
                {
                  title: "Maximale Flexibilität",
                  desc: "Entscheide selbst: Lerne vor Ort in unseren Studios, ganz bequem online von zu Hause oder im flexiblen Wechsel.",
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
                  <div className="mt-8 flex items-center text-sm font-medium text-white/30 group-hover:text-orange-500 transition-colors">
                    Mehr erfahren <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Proof / Testimonials */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <span className="text-orange-500 font-display font-bold tracking-widest text-sm uppercase">Erfolgsgeschichten</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4">
                Was unsere <span className="text-blue-500">Schüler</span> sagen
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  quote: "Ein Jahr lang habe ich versucht, mir Gitarre über YouTube beizubringen. Hier habe ich in zwei Monaten mehr gelernt. Die Lehrer sind fantastisch!",
                  author: "Sarah L.",
                  role: "Anfängerin",
                  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces&auto=format",
                  highlight: false
                },
                {
                  quote: "Die strukturierte Herangehensweise und das ehrliche Feedback haben mein Songwriting komplett verändert. Genau das, was ich brauchte für meine Band.",
                  author: "Marcus T.",
                  role: "Fortgeschritten",
                  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces&auto=format",
                  highlight: true
                },
                {
                  quote: "Tolle Atmosphäre, super Equipment in den Proberäumen und Lehrer, die motivieren statt frustrieren. Jeden Cent wert.",
                  author: "Elena R.",
                  role: "Wiedereinsteigerin",
                  image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=faces&auto=format",
                  highlight: false
                }
              ].map((testimonial, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`p-10 rounded-2xl flex flex-col justify-between ${
                    testimonial.highlight 
                      ? 'bg-blue-600 text-white shadow-2xl shadow-blue-900/50 scale-105 z-10' 
                      : 'bg-white/[0.03] border border-white/5 text-gray-300'
                  }`}
                >
                  <div>
                    <div className="text-5xl font-serif text-white/20 leading-none mb-6">"</div>
                    <p className={`text-lg leading-relaxed mb-10 ${testimonial.highlight ? 'text-white/90' : 'text-gray-400'}`}>
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover grayscale" />
                    <div>
                      <div className={`font-bold font-display ${testimonial.highlight ? 'text-white' : 'text-gray-200'}`}>{testimonial.author}</div>
                      <div className={`text-sm ${testimonial.highlight ? 'text-blue-200' : 'text-gray-500'}`}>{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Final Call to Action */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 sepia-[.3] hue-rotate-180" alt="Studio background" />
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
                Bereit für den ersten <span className="text-orange-500 italic">Akkord?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Buche jetzt deine unverbindliche Probestunde. Lerne unsere Dozenten kennen, besprich deine Ziele und starte deine musikalische Reise noch heute.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-orange-600/20 hover:shadow-orange-600/40 flex items-center justify-center gap-3">
                  Probestunde buchen
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/10 px-10 py-5 rounded-full font-bold text-lg transition-all">
                  Kursübersicht
                </button>
              </div>
              
              <p className="mt-6 text-sm text-gray-500 font-medium">
                Keine versteckten Kosten. Keine Verpflichtung.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#020202] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
              <Music className="w-3 h-3 text-white" />
            </div>
            <span className="font-display font-bold tracking-wider text-white">RESONANCE</span>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Resonance Music School. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>

      {/* Adding a global keyframe for floating elements */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.02); }
        }
      `}</style>
    </div>
  );
}
