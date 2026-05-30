import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, Play } from 'lucide-react';

export default function App() {
  return (
    // Hintergrund ist hell (bg-gray-50) und Schrift dunkel (text-gray-800)
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-red-600 selection:text-white">
      
      {/* 🟢 BEREICH 1: NAVIGATION (HEADER) */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 border-b border-gray-200 bg-white/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Echtes Logo: Rotes M auf schwarzem Grund */}
            <div className="w-8 h-8 rounded bg-black flex items-center justify-center shadow-md">
              <span className="text-red-600 font-black text-xl font-display leading-none mt-0.5">M</span>
            </div>
            {/* Firmenname */}
            <span className="font-display font-black text-xl tracking-wider text-black">
              MUSIKBOX
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a href="#" className="hover:text-red-600 transition-colors">Musikunterricht</a>
            <a href="#" className="hover:text-red-600 transition-colors">Tanzunterricht</a>
            <a href="#" className="hover:text-red-600 transition-colors">Online-Unterricht</a>
            <a href="#" className="hover:text-red-600 transition-colors">Kontakt</a>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md shadow-red-600/10 hover:shadow-red-600/20 flex items-center gap-2">
              Kontakt aufnehmen
              <ArrowRight className="w-
