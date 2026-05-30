import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, Play, MapPin, Phone, Mail } from 'lucide-react';

export default function App() {
  const emailAdresse = "info@musikbox-cremlingen.de"; 
  const telefon = "05306911273";
  const betreff = "Anfrage für eine Probestunde";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-red-600 selection:text-white">
      
      {/* 🟢 BEREICH 1: NAVIGATION (HEADER) */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:py-6 border-b border-gray-200 bg-white/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-black flex items-center justify-center shadow-md">
              <span className="text-red-600 font-black text-xl font-display leading-none mt-0.5">M</span>
            </div>
            <span className="font-display font-black text-xl tracking-wider text-black">
              MUSIKBOX
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a href="#angebote" className="hover:text-red-600 transition-colors">Unterricht</a>
            <a href="#philosophie" className="hover:text-red-600 transition-colors">Philosophie</a>
            <a href="#team" className="hover:text-red-600 transition-colors">Leitung</a>
            <a href={`mailto:${emailAdresse}`} className="hover:text-red-600 transition-colors">Kontakt</a>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <a href={`mailto:${emailAdresse}?subject=${betreff}`} className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full font-bold transition-all shadow-md shadow-red-600/10 hover:shadow-red-600/20 flex items-center gap-2">
              Kontakt
              <ArrowRight className="w-4 h-4 hidden sm:block" />
            </a>
          </div>
        </div>
      </nav>

      {/* Padding auf dem Handy verkleinert (pt-24 statt pt-32) */}
      <main className="pt-24 md:pt-32 pb-0">
        
        {/* 🟢 BEREICH 2: STARTBILDSCHIRM (HERO SECTION) */}
        {/* Lücken (gap) für Handys optimiert */}
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh]">
          
          {/* NEU: EINLADENDES BILD NUR FÜR HANDYS GANZ OBEN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-[220px] sm:h-[300px] rounded-3xl overflow-hidden shadow-xl lg:hidden relative mt-4"
          >
             <img src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=800&auto=format&fit=crop" alt="Musikunterricht" className="w-full h-full object-cover" />
          </motion.div>

          <div className="space-y-6 lg:space-y-8 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-800 text-xs font-bold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                SEIT 2005 IN CREMLINGEN
              </div>
              {/* Schriftgröße auf Handys (text-4xl) etwas kompakter */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-gray-900">
                Dein Raum für <br/>
                <span className="text-red-600">Musik & Tanz</span>.
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed font-medium"
            >
              Von der elementaren Musikpädagogik über Gitarre und Klavier bis hin zu Kindertanz und Freestyle. Entdecke Unterricht, der motiviert und richtig Spaß macht!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6"
            >
              <a href={`mailto:${emailAdresse}?subject=${betreff}`} className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-red-600/20 hover:shadow-red-600/30 flex items-center justify-center gap-2 group">
                Kostenlose Probestunde
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Desktop-Collage bleibt für große Bildschirme erhalten */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full hidden lg:block"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full overflow-hidden border-4 border-white z-10 shadow-xl">
               <img src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=800&auto=format&fit=crop" alt="Musikunterricht" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-[10%] -left-[5%] w-44 h-44 rounded-full overflow-hidden border-4 border-white opacity-90 shadow-lg animate-[float_6s_ease-in-out_infinite]">
                <img src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop" alt="Gitarre" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-[15%] -right-[5%] w-40 h-40 rounded-full overflow-hidden border-4 border-white opacity-90 shadow-lg animate-[float_8s_ease-in-out_infinite_reverse]">
               <img src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=800&auto=format&fit=crop" alt="Spaß" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-200/40 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-yellow-200/50 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-200/30 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </section>

        {/* 🟢 BEREICH 3: UNSERE ANGEBOTE */}
        {/* py-20 für Handy, py-32 für Desktop */}
        <section id="angebote" className="py-20 lg:py-32 relative bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 lg:mb-16 text-center md:text-left">
              <span className="text-red-600 font-display font-extrabold tracking-widest text-sm uppercase">Unser Angebot</span>
              <h2 className="text-3xl md:text-5xl font-display font-black text-gray-900 mt-4 max-w-2xl leading-tight">
                Entdecke das vielseitige Programm der Musikbox.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "Elementare Musikpädagogik",
                  desc: "Der spielerische Einstieg in die Welt der Klänge für die Kleinsten. Rhythmusgefühl, Singen und Musik von Anfang an erleben.",
                  icon: "01",
                  color: "group-hover:text-yellow-500"
                },
                {
                  title: "Instrumente aller Art",
                  desc: "Egal ob Tasten-, Streich-, Blas-, Zupf- oder Schlaginstrumente. Wir bieten professionellen Unterricht für jedes Wunschinstrument.",
                  icon: "02",
                  color: "group-hover:text-red-500"
                },
                {
                  title: "Tanzunterricht",
                  desc: "Von Kindertanz bis hin zu Freestyle! Bewegung, Rhythmusgefühl und jede Menge Energie für alle Altersklassen.",
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
                  className="p-6 lg:p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 group"
                >
                  <div className={`text-4xl lg:text-5xl font-display font-black text-gray-200 ${feature.color} transition-colors mb-6 lg:mb-8`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-display font-black text-gray-900 mb-3 lg:mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium text-sm lg:text-base">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 🟢 BEREICH 4: ÜBER UNS & PHILOSOPHIE */}
        <section id="philosophie" className="py-20 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-red-600 font-display font-extrabold tracking-widest text-sm uppercase">Philosophie</span>
                <h2 className="text-3xl lg:text-4xl font-display font-black text-gray-900 mt-4 mb-6 lg:mb-8 leading-tight">
                  „Musik ist kein <br/>Hochleistungssport.“
                </h2>
                <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-gray-600 font-medium">
                  <p>
                    Bei uns geht es nicht nur darum, geschriebene Noten richtig wiederzugeben, sondern darum, <strong>Musik zu machen</strong>. Mit Musik kann man sich ausdrücken und Emotionen erfahren.
                  </p>
                  <p>
                    Die Individualität des Schülers – zumeist ein Kind – steht für uns im Mittelpunkt. Deshalb orientieren wir uns an dem strukturierten Lehrplan des Verbands deutscher Musikschulen, passen das Lernkonzept aber immer persönlich an.
                  </p>
                  <p className="text-gray-900 font-bold border-l-4 border-red-600 pl-4">
                    Unser Ziel: Damit jedem Schüler unserer Musikbox der Spaß am Musikmachen aus den Augen scheint.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                id="team"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 lg:p-8 rounded-3xl shadow-xl border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 shrink-0 rounded-full overflow-hidden border-4 border-gray-50 shadow-md">
                    <img src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=400&auto=format&fit=crop" alt="Tobias Friedrich" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl lg:text-2xl font-black text-gray-900">Tobias Friedrich</h3>
                    <p className="text-red-600 font-bold text-xs lg:text-sm uppercase tracking-wider mb-3 lg:mb-4">Inhaber & Leitung</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">
                      Seit seiner frühsten Kindheit macht Tobias Musik. Er hat Bildungswissenschaft studiert und leitet die Musikbox seit der Gründung 2005 als zeitgemäße Bildungseinrichtung. 
                      <br/><br/>
                      Neben E-Bass unterrichtet er Schlagzeug, Cajon, Bongo und sehr erfolgreich die Musikalische Früherziehung.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 🟢 BEREICH 5: ABSCHLUSS (CALL TO ACTION) */}
        <section className="py-20 lg:py-32 relative overflow-hidden bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-black text-gray-900 mb-6 leading-tight">
                Lust auf ein <span className="text-red-600 italic">Abenteuer?</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 mb-10 lg:mb-12 max-w-2xl mx-auto font-medium">
                Komm in Cremlingen vorbei und probiere dein Wunschinstrument oder deine Tanzrichtung einfach aus. Wir freuen uns auf dich!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={`mailto:${emailAdresse}?subject=${betreff}`} className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-red-600/20 hover:shadow-red-600/30 flex items-center justify-center gap-3">
                  Jetzt Probestunde vereinbaren
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 🟢 BEREICH 6: FOOTER */}
      <footer className="bg-black text-gray-400 py-12 lg:py-16 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 lg:gap-12 items-center">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-black border border-gray-800 flex items-center justify-center">
                <span className="text-red-600 font-black text-lg font-display leading-none mt-0.5">M</span>
              </div>
              <span className="font-display font-black text-xl tracking-wider text-white">MUSIKBOX</span>
            </div>
            <p className="text-sm font-medium text-gray-500 text-center md:text-left max-w-xs">
              Die Musikschule in Cremlingen. Für Musik, Tanz und Freude am Lernen.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3 text-sm font-medium">
            <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <MapPin className="w-4 h-4 text-red-600" />
              <span>Im Rübenkamp 4, 38162 Cremlingen</span>
            </div>
            <a href={`tel:${telefon}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-red-600" />
              <span>05306 - 911273</span>
            </a>
            <a href={`mailto:${emailAdresse}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-red-600" />
              <span>{emailAdresse}</span>
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} Musikbox Cremlingen.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            </div>
          </div>

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
