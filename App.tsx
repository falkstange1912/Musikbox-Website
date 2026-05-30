import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, Play, MapPin, Phone, Mail } from 'lucide-react';

export default function App() {
  // Die echten Kontaktdaten der Musikbox
  const emailAdresse = "info@musikbox-cremlingen.de"; 
  const telefon = "05306911273";
  const betreff = "Anfrage für eine Probestunde";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-red-600 selection:text-white">
      
      {/* 🟢 BEREICH 1: NAVIGATION (HEADER) */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 border-b border-gray-200 bg-white/85 backdrop-blur-md">
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
            <a href={`mailto:${emailAdresse}?subject=${betreff}`} className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md shadow-red-600/10 hover:shadow-red-600/20 flex items-center gap-2">
              Kontakt aufnehmen
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-0">
        
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
                SEIT 2005 IN CREMLINGEN
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-gray-900">
                Dein Raum für <br/>
                <span className="text-red-600">Musik & Tanz</span>.
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-lg leading-relaxed font-medium"
            >
              Von der elementaren Musikpädagogik über Gitarre und Klavier bis hin zu Kindertanz und Freestyle. Entdecke Unterricht, der motiviert und richtig Spaß macht!
            </motion.p>

            <motion.div 
              initial={{ opacity:
