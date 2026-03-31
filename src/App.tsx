import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  GraduationCap, 
  Target, 
  CheckCircle2, 
  BarChart3, 
  Route, 
  IdCard, 
  Rocket,
  Info,
  Key,
  ShieldCheck,
  Zap,
  Map,
  Calendar,
  QrCode,
  MousePointer2,
  Users,
  Trophy,
  FileText,
  MousePointerClick
} from "lucide-react";

// --- Components ---

const Background = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#f0f7ff]">
    <div className="blob w-[460px] h-[460px] -top-[100px] -right-[80px] bg-blue-400 opacity-[0.18]" />
    <div className="blob w-[320px] h-[320px] -bottom-[80px] -left-[50px] bg-teal-400 opacity-[0.14]" />
    <div className="blob w-[220px] h-[220px] top-[42%] left-[16%] bg-amber-400 opacity-[0.12]" />
    <div className="absolute inset-0 z-1 pointer-events-none opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20512%20512%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22n%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.7%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23n)%22%20opacity=%220.03%22/%3E%3C/svg%3E')]" />
  </div>
);

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number; key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

const Counter = ({ value, duration = 1.5 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = totalMiliseconds / end;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
};

const ProgressBar = ({ label, value, delay = 0 }: { label: string; value: number; delay?: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-2">
      <span className="font-semibold text-text-secondary">{label}</span>
      <span className="text-text-muted">{value}%</span>
    </div>
    <div className="bar-track">
      <motion.div
        className="bar-fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
      />
    </div>
  </div>
);

// --- Slides ---

const slides = [
  {
    id: 1,
    content: (
      <div className="text-center relative">
        <motion.div 
          className="absolute -top-24 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Route size={400} />
        </motion.div>
        <Reveal delay={0.1}>
          <div className="pill mx-auto mb-6 bg-blue-600 text-white border-none px-6 py-2">
            Implementado por la Universidad de Atacama
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <h1 className="font-display text-[clamp(2.2rem,7vw,5.5rem)] font-black tracking-tighter mb-4 md:mb-6 leading-[0.9] uppercase italic">
            Tu Ruta Hacia la <br/>
            <span className="text-blue-600">Educación Superior</span>
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="inline-block bg-black text-white px-6 md:px-8 py-3 md:py-4 transform -skew-x-12 mb-6 md:mb-8">
            <span className="font-display text-2xl md:text-4xl font-bold italic block skew-x-12">Descubre tu Poder PACE 2026</span>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="text-[clamp(1rem,2vw,1.6rem)] text-text-secondary max-w-2xl mx-auto font-medium px-4 md:px-0">
            El mapa estratégico para duplicar tus opciones de ingreso a la universidad.
          </p>
        </Reveal>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <Reveal>
            <h2 className="font-display text-[clamp(1.5rem,4vw,3rem)] font-extrabold tracking-tight italic">
              No es solo un programa, es tu <span className="text-blue-600">ventaja estratégica</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Reveal delay={0.1}>
            <div className="card p-6 md:p-8 text-center border-b-8 border-blue-500 bg-white/50 backdrop-blur-sm">
              <div className="text-5xl md:text-7xl font-black text-blue-600 mb-4 tracking-tighter">
                <Counter value={29} />
              </div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-text-muted leading-tight">
                Instituciones de Educación Superior participantes en todo Chile
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="card p-6 md:p-8 text-center border-b-8 border-amber-500 bg-white/50 backdrop-blur-sm">
              <div className="text-5xl md:text-7xl font-black text-amber-500 mb-4 tracking-tighter">
                <Counter value={16} />
              </div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-text-muted leading-tight">
                Establecimientos adheridos en la región de Atacama
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="card p-6 md:p-8 text-center border-b-8 border-teal-500 bg-teal-500 text-white">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={32} className="md:w-10 md:h-10" />
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase mb-2">Cupos Garantizados</h3>
              <p className="text-xs md:text-sm font-medium opacity-90">
                Para estudiantes habilitados. Estar en PACE te permite duplicar tus opciones reales de ingreso.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.5}>
          <div className="mt-8 md:mt-12 p-4 md:p-6 bg-black text-white text-center rounded-2xl font-display text-lg md:text-xl italic">
            Objetivo principal: Acompañar tu 3° y 4° medio con apoyo permanente para asegurar tu futuro.
          </div>
        </Reveal>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-display text-[clamp(1.5rem,4vw,3.5rem)] font-black mb-6 md:mb-10 tracking-tighter italic text-center">
            Las 3 llaves para desbloquear la <span className="text-blue-600">Fila VIP PACE</span>
          </h2>
        </Reveal>
        <div className="space-y-3 md:space-y-4">
          {[
            { icon: <Key />, title: "Llave 1: Constancia", desc: "Cursar 3° y 4° medio en un liceo PACE", sub: "(Tú ya estás en este camino)", color: "bg-blue-600" },
            { icon: <ShieldCheck />, title: "Llave 2: Excelencia Relativa", desc: "Egresar dentro del 25% superior de tu generación", sub: "(Tu puntaje ranking frente a tu propio liceo)", color: "bg-amber-500" },
            { icon: <Zap />, title: "Llave 3: El Desafío", desc: "Rendir la PAES", sub: "(Debes rendir las pruebas obligatorias + 1 electiva)", color: "bg-teal-500" }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white border border-black/5 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
                <div className={`w-12 h-12 md:w-16 md:h-16 ${item.color} text-white rounded-xl flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform`}>
                  {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black italic">{item.title}</h3>
                  <p className="text-base md:text-lg font-bold text-text-secondary">{item.desc}</p>
                  <p className="text-xs md:text-sm font-medium text-blue-600">{item.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.6}>
          <div className="mt-8 md:mt-10 p-4 md:p-6 bg-teal-500 text-white rounded-2xl text-center font-black text-lg md:text-xl uppercase tracking-tight shadow-xl shadow-teal-500/20">
            Completar estas 3 misiones te transforma oficialmente en un ESTUDIANTE HABILITADO
          </div>
        </Reveal>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display text-[clamp(1.5rem,4vw,3rem)] font-black mb-6 md:mb-10 italic">
            El Triángulo de la Admisión: <br/>
            <span className="text-blue-600">Conoce tus factores de selección</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { 
              title: "NEM - Notas Media", 
              icon: <FileText size={24} className="md:w-8 md:h-8" />, 
              color: "bg-blue-600",
              q: "¿Qué es?", 
              a: "El promedio absoluto de tus notas de 1° a 4° medio.",
              f: "¿Cómo funciona?",
              d: "Se transforma matemáticamente a un puntaje estándar. Es tu esfuerzo constante."
            },
            { 
              title: "Ranking", 
              icon: <Trophy size={24} className="md:w-8 md:h-8" />, 
              color: "bg-teal-500",
              q: "¿Qué es?", 
              a: "Tu posición en la carrera.",
              f: "¿Cómo funciona?",
              d: "Compara tus notas relativas frente a las tres generaciones anteriores de tu propio liceo."
            },
            { 
              title: "PAES - Prueba Acceso", 
              icon: <Target size={24} className="md:w-8 md:h-8" />, 
              color: "bg-amber-500",
              q: "¿Qué es?", 
              a: "El desafío estandarizado a nivel nacional.",
              f: "¿Cómo funciona?",
              d: "Mide tus competencias específicas en distintas áreas (Lectora, Matemática, Ciencias/Historia)."
            }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="card p-0 overflow-hidden h-full flex flex-col">
                <div className={`${item.color} p-4 md:p-6 text-white flex items-center gap-3 md:gap-4`}>
                  {item.icon}
                  <h3 className="font-black text-lg md:text-xl leading-tight italic">{item.title}</h3>
                </div>
                <div className="p-6 md:p-8 space-y-4 md:space-y-6 flex-grow">
                  <div>
                    <p className={`font-black uppercase text-[10px] tracking-widest mb-1 md:mb-2 ${item.color.replace('bg-', 'text-')}`}>{item.q}</p>
                    <p className="text-base md:text-lg font-medium leading-snug">{item.a}</p>
                  </div>
                  <div>
                    <p className={`font-black uppercase text-[10px] tracking-widest mb-1 md:mb-2 ${item.color.replace('bg-', 'text-')}`}>{item.f}</p>
                    <p className="text-sm md:text-base text-text-secondary leading-relaxed">{item.d}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 5,
    content: (
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-black mb-10 italic text-center">
            El Peaje de Entrada y tu <span className="text-blue-600">Pase de Batalla</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-center">
          <Reveal delay={0.2}>
            <div className="bg-amber-500 p-6 md:p-10 rounded-[30px] md:rounded-[40px] text-white text-center shadow-2xl shadow-amber-500/40 transform -rotate-1 md:-rotate-2">
              <div className="text-7xl md:text-[120px] font-black leading-none tracking-tighter mb-2">458</div>
              <div className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-4 md:min-h-0 md:mb-6">Puntos</div>
              <p className="text-lg md:text-xl font-bold leading-tight">
                Puntaje mínimo de postulación. Es el promedio obligatorio que debes obtener entre la prueba de Competencia Lectora y Competencia Matemática 1 (M1).
              </p>
            </div>
          </Reveal>
          <div className="space-y-4 md:space-y-6">
            <Reveal delay={0.3}>
              <div className="card p-6 md:p-8 bg-white/80 backdrop-blur-xl border-blue-100">
                <h3 className="text-xl md:text-2xl font-black italic mb-4 md:mb-6 flex items-center gap-3">
                  <IdCard className="text-blue-600" /> Tarjeta de Identificación
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {[
                    "Documento OBLIGATORIO que certifica tu inscripción.",
                    "Llega automáticamente a tu correo tras inscribirte.",
                    "DEBES llevarlo impreso el día de la rendición."
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 md:gap-4">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-black shrink-0 text-xs md:text-base">{i + 1}</div>
                      <p className="text-base md:text-lg font-bold text-text-secondary">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-blue-800 font-medium text-sm">
                Nota: Se puede rendir sin inconvenientes la PAES portando Tarjeta que no incluya información de Local de Rendición y/o NEM.
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    content: (
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-black mb-8 italic text-center">
            El modelo tradicional: <span className="text-blue-600">Ponderaciones variables</span>
          </h2>
        </Reveal>
        <div className="card p-0 overflow-hidden shadow-2xl border-black/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-black text-white">
                  <th className="p-3 md:p-4 font-black italic uppercase text-xs md:text-sm">Factores de Selección</th>
                  <th className="p-3 md:p-4 font-black italic uppercase text-xs md:text-sm text-center">Ponderaciones</th>
                  <th className="p-3 md:p-4 font-black italic uppercase text-xs md:text-sm text-center">Puntaje</th>
                  <th className="p-3 md:p-4 font-black italic uppercase text-xs md:text-sm text-center">Resultado</th>
                </tr>
              </thead>
              <tbody className="text-base md:text-lg font-bold">
                {[
                  { f: "Puntaje NEM", p: "20%", v: "622", r: "124,4" },
                  { f: "Puntaje Ranking", p: "20%", v: "670", r: "134" },
                  { f: "Competencia Lectora", p: "25%", v: "656", r: "164" },
                  { f: "Competencia Matemática 1", p: "20%", v: "720", r: "144" },
                  { f: "Historia y Ciencias Sociales", p: "15%", v: "698", r: "104,7" },
                  { f: "Ciencias", p: "0%", v: "-", r: "-" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-black/5 hover:bg-blue-50 transition-colors">
                    <td className="p-3 md:p-4 text-text-secondary">{row.f}</td>
                    <td className="p-3 md:p-4 text-center text-blue-600">{row.p}</td>
                    <td className="p-3 md:p-4 text-center">{row.v}</td>
                    <td className="p-3 md:p-4 text-center font-black">{row.r}</td>
                  </tr>
                ))}
                <tr className="bg-blue-600 text-white">
                  <td colSpan={3} className="p-3 md:p-4 font-black italic uppercase text-sm md:text-base">Puntaje Ponderado de Postulación</td>
                  <td className="p-3 md:p-4 text-center text-xl md:text-2xl font-black">671,10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Reveal delay={0.5}>
          <div className="mt-8 p-6 bg-amber-100 border border-amber-200 rounded-2xl flex items-start gap-4">
            <Info className="text-amber-600 shrink-0" size={24} />
            <p className="text-amber-900 font-bold">
              En la ruta tradicional, cada universidad y carrera asigna sus propios porcentajes a tus puntajes. Las reglas cambian dependiendo de a dónde quieras ir.
            </p>
          </div>
        </Reveal>
      </div>
    )
  },
  {
    id: 7,
    content: (
      <div className="max-w-6xl mx-auto text-center">
        <Reveal>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.5rem)] font-black mb-12 italic leading-tight">
            El Motor PACE: <br/>
            <span className="text-blue-600">Tu trayectoria escolar es tu mayor poder</span>
          </h2>
        </Reveal>
        <div className="relative inline-block scale-75 sm:scale-90 md:scale-100">
          <motion.div 
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border-[12px] md:border-[20px] border-teal-500 flex flex-col items-center justify-center relative z-10 bg-white shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="text-5xl md:text-7xl font-black text-teal-500 tracking-tighter">80%</div>
            <div className="text-xl md:text-2xl font-black italic text-text-secondary">Ranking</div>
            <div className="w-full h-[2px] bg-black/5 my-2 md:my-4 max-w-[100px] md:max-w-[150px]" />
            <div className="text-3xl md:text-4xl font-black text-blue-600 tracking-tighter">20%</div>
            <div className="text-lg md:text-xl font-black italic text-text-secondary">NEM</div>
          </motion.div>
          <motion.div 
            className="absolute -top-6 -left-10 md:-top-10 md:-left-20 bg-teal-500 text-white p-3 md:p-6 rounded-xl md:rounded-2xl font-black italic text-base md:text-2xl shadow-xl z-20 whitespace-nowrap"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            80% PUNTAJE <br className="hidden md:block"/> RANKING
          </motion.div>
          <motion.div 
            className="absolute -bottom-6 -right-10 md:-bottom-10 md:-right-20 bg-blue-600 text-white p-3 md:p-6 rounded-xl md:rounded-2xl font-black italic text-base md:text-2xl shadow-xl z-20 whitespace-nowrap"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            20% PUNTAJE <br className="hidden md:block"/> NEM
          </motion.div>
        </div>
        <Reveal delay={1}>
          <div className="mt-8 md:mt-16 p-6 md:p-8 bg-black text-white rounded-2xl md:rounded-[32px] font-bold text-base md:text-xl leading-relaxed max-w-4xl mx-auto border-2 md:border-4 border-teal-500">
            Para la ponderación interna de los cupos PACE, la PAES es un requisito, pero el 100% del peso de tu puntaje base recae en lo que ya lograste en tu liceo (Ranking + NEM).
          </div>
        </Reveal>
      </div>
    )
  },
  {
    id: 8,
    content: (
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display text-[clamp(1.5rem,4vw,3rem)] font-black mb-6 md:mb-10 italic text-center">
            Hackeando el sistema: <br/>
            <span className="text-blue-600">Multiplicadores y Bonificaciones</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <Reveal delay={0.1}>
            <div className="card p-6 md:p-8 bg-linear-to-br from-teal-500 to-teal-600 text-white border-none shadow-xl shadow-teal-500/30">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <Map size={24} className="md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black italic mb-4 md:mb-6">Booster de Territorio</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4 bg-white/10 p-3 md:p-4 rounded-xl">
                  <span className="text-3xl md:text-4xl font-black">+7.0%</span>
                  <p className="text-sm md:text-base font-bold leading-tight">extra si postulas en la misma región de tu liceo.</p>
                </div>
                <div className="flex items-center gap-3 md:gap-4 bg-white/10 p-3 md:p-4 rounded-xl">
                  <span className="text-3xl md:text-4xl font-black">+3.5%</span>
                  <p className="text-sm md:text-base font-bold leading-tight">extra si postulas dentro de la misma macrozona.</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="card p-6 md:p-8 bg-linear-to-br from-blue-600 to-blue-700 text-white border-none shadow-xl shadow-blue-600/30">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <Trophy size={24} className="md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black italic mb-2 md:mb-4">Booster de Estrategia</h3>
              <p className="text-sm md:text-base font-bold mb-4 md:mb-6 opacity-90">El orden de tus preferencias importa. ¡Y mucho!</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-black">
                <div className="flex justify-between border-b border-white/20 pb-1"><span>Pref 1:</span> <span className="text-amber-400">25 pts</span></div>
                <div className="flex justify-between border-b border-white/20 pb-1"><span>Pref 2:</span> <span>24 pts</span></div>
                <div className="flex justify-between border-b border-white/20 pb-1"><span>Pref 3:</span> <span>23 pts</span></div>
                <div className="flex justify-between border-b border-white/20 pb-1"><span>Pref 4:</span> <span>22 pts</span></div>
                <div className="flex justify-between border-b border-white/20 pb-1"><span>Pref 5:</span> <span>21 pts</span></div>
                <div className="flex justify-between border-b border-white/20 pb-1"><span>Pref 10:</span> <span>16 pts</span></div>
              </div>
              <p className="mt-4 text-[10px] md:text-xs font-medium opacity-80 italic">Bonificación decreciente hasta la preferencia 20 (0 pts).</p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.5}>
          <div className="mt-8 md:mt-10 p-4 md:p-6 bg-black text-white text-center rounded-2xl font-black text-lg md:text-xl italic">
            Elige con estrategia: Quedarte en tu región y poner tu carrera soñada en primer lugar inyecta máximo poder a tu puntaje final.
          </div>
        </Reveal>
      </div>
    )
  },
  {
    id: 9,
    content: (
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display text-[clamp(1.5rem,4vw,3.5rem)] font-black mb-8 md:mb-10 italic text-center">
            El Pasaporte al Financiamiento: <span className="text-blue-600">FUAS</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            {[
              { title: "La Ventana de Acción", desc: "Se completa online en octubre (www.beneficiosestudiantiles.cl).", color: "text-teal-500" },
              { title: "El Requisito Vital", desc: "Debes tener tu Registro Social de Hogares (RSH) actualizado. Migrantes requieren residencia definitiva.", color: "text-blue-600" },
              { title: "El Botín", desc: "Llenar este único formulario te postula simultáneamente a Gratuidad, Becas y Créditos del Estado.", color: "text-amber-500" },
              { title: "La Data", desc: "Te pedirá antecedentes académicos, personales y los ingresos de tu grupo familiar.", color: "text-blue-600" }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex gap-3 md:gap-4 group">
                  <div className={`mt-1 shrink-0 ${item.color}`}><CheckCircle2 size={24} className="md:w-7 md:h-7" /></div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black italic leading-none mb-2">{item.title}</h3>
                    <p className="text-base md:text-lg font-bold text-text-secondary leading-snug">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.5}>
            <div className="card p-6 md:p-8 bg-black text-white border-none shadow-2xl relative overflow-hidden scale-90 md:scale-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-teal-500" />
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center"><MousePointerClick size={20} className="md:w-6 md:h-6" /></div>
                <div className="font-mono text-[10px] md:text-xs opacity-50">www.beneficiosestudiantiles.cl/FUAS</div>
              </div>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="h-8 md:h-10 bg-white/5 rounded-lg w-full" />
                <div className="h-8 md:h-10 bg-white/5 rounded-lg w-full" />
                <div className="h-8 md:h-10 bg-white/5 rounded-lg w-3/4" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-24 md:w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-teal-500" initial={{ width: 0 }} whileInView={{ width: "75%" }} transition={{ duration: 1.5 }} />
                  </div>
                  <span className="text-[8px] md:text-[10px] font-bold text-teal-500">75% Completado</span>
                </div>
                <div className="px-4 md:px-6 py-1.5 md:py-2 bg-teal-500 text-black font-black text-xs md:text-sm rounded-lg">Enviar</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    )
  },
  {
    id: 10,
    content: (
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display text-[clamp(1.5rem,4vw,3.5rem)] font-black mb-8 md:mb-12 italic text-center leading-tight">
            Línea de tiempo FUAS: <br/>
            <span className="text-blue-600">Sigue el estado de tu beneficio</span>
          </h2>
        </Reveal>
        <div className="relative py-4 md:py-12">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-black/5 -translate-y-1/2 hidden lg:block" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 relative z-10">
            {[
              { step: 1, title: "Completar FUAS", desc: "(Tu acción inicial)", icon: <FileText /> },
              { step: 2, title: "Nivel Socioeconómico", desc: "(Cruce de datos)", icon: <Users /> },
              { step: 3, title: "Preselección", desc: "(¿A qué calificas?)", icon: <Target /> },
              { step: 4, title: "Matrícula", desc: "(Inscribirte en la U)", icon: <GraduationCap /> },
              { step: 5, title: "Resultados", desc: "(El botín asegurado)", icon: <Trophy /> },
              { step: 6, title: "Apelación", desc: "(Tu derecho a reclamo)", icon: <ShieldCheck /> }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-white border-2 md:border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center mb-2 md:mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                  </div>
                  <div className="font-black text-blue-600 mb-1 text-xs md:text-sm">Paso {item.step}</div>
                  <h3 className="font-bold text-[10px] md:text-sm leading-tight mb-1">{item.title}</h3>
                  <p className="text-[9px] md:text-xs text-text-muted italic">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 11,
    content: (
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display text-[clamp(1.5rem,4vw,3.5rem)] font-black mb-10 italic text-center">
            Tu Equipo de Soporte: <span className="text-blue-600">Acompañamiento PACE</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Reveal delay={0.1}>
            <div className="card p-6 md:p-10 border-amber-500/20 bg-amber-50/30 text-center group hover:bg-amber-500 hover:text-white transition-all duration-500">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:bg-white group-hover:text-amber-500 transition-colors shadow-xl">
                <Map size={32} className="md:w-12 md:h-12" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black italic mb-4 md:mb-6">Exploración Vocacional</h3>
              <p className="text-base md:text-xl font-bold leading-relaxed opacity-80">
                Actividades prácticas dentro de tu horario escolar diseñadas para ayudarte a descubrir tus pasiones, talentos y tu camino profesional ideal.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="card p-6 md:p-10 border-teal-500/20 bg-teal-50/30 text-center group hover:bg-teal-500 hover:text-white transition-all duration-500">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:bg-white group-hover:text-teal-500 transition-colors shadow-xl">
                <MousePointer2 size={32} className="md:w-12 md:h-12" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black italic mb-4 md:mb-6">Admisión a la Ed. Superior</h3>
              <p className="text-base md:text-xl font-bold leading-relaxed opacity-80">
                Apoyo táctico en laboratorios de computación. Te guiamos paso a paso en tu Inscripción a la PAES, el llenado del FUAS y la postulación final.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    )
  },
  {
    id: 12,
    content: (
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display text-[clamp(1.5rem,4vw,3.5rem)] font-black mb-8 md:mb-12 italic text-center">
            Tu Caja de Herramientas Digitales <br/>
            <span className="text-blue-600">(Escanea Ahora)</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { title: "Mifuturo.cl", desc: "Empleabilidad y sueldos", icon: <BarChart3 />, color: "text-black" },
            { title: "Portal DEMRE", desc: "Todo lo oficial de la PAES", icon: <FileText />, color: "text-red-600" },
            { title: "Simulador Ponderado", desc: "Proyecta tu futuro", icon: <Zap />, color: "text-blue-600" },
            { title: "Simulador Ranking", desc: "Calcula tu posición", icon: <Target />, color: "text-teal-500" }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="card p-4 md:p-6 text-center group bg-white hover:scale-105 transition-transform">
                <div className={`w-full aspect-square bg-gray-100 rounded-xl mb-3 md:mb-4 flex items-center justify-center ${item.color}`}>
                  <QrCode size={60} className="md:w-20 md:h-20" strokeWidth={1} />
                </div>
                <h3 className="font-black italic text-sm md:text-lg leading-tight mb-1">{item.title}</h3>
                <p className="text-[10px] md:text-xs font-bold text-text-muted">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 13,
    content: (
      <div className="text-center relative">
        <motion.div 
          className="text-6xl md:text-[120px] mb-6 md:mb-8"
          animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          🎯
        </motion.div>
        <Reveal delay={0.2}>
          <h2 className="font-display text-[clamp(2rem,6vw,5rem)] font-black tracking-tighter mb-4 md:mb-6 italic leading-[0.9]">
            El mapa está trazado. <br/>
            <span className="text-blue-600">El futuro es tuyo.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="text-[clamp(1rem,2vw,1.6rem)] text-text-secondary max-w-3xl mx-auto font-bold mb-8 md:mb-10">
            Tienes el talento, tienes los cupos garantizados y tienes a tu equipo de soporte en el liceo. El Programa PACE es tu ventaja competitiva: úsala.
          </p>
        </Reveal>
        <Reveal delay={0.6}>
          <div className="inline-block p-6 md:p-8 bg-teal-500 text-white rounded-2xl md:rounded-[32px] shadow-2xl shadow-teal-500/40 hover:scale-105 transition-transform cursor-pointer">
            <p className="text-lg md:text-2xl font-black italic uppercase tracking-tight">
              Acércate hoy a tu coordinador PACE <br className="hidden md:block"/>
              y asegura tu ruta hacia el 2026.
            </p>
          </div>
        </Reveal>
      </div>
    )
  }
];

// --- Main App ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative w-screen h-screen bg-[#f0f7ff] text-[#102033] overflow-hidden font-body">
      <Background />
      
      <main className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden p-4 md:p-12">
        <div className="min-h-full w-full flex items-center justify-center py-20 md:py-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full max-w-7xl mx-auto"
            >
              {slides[currentSlide].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Navigation Controls */}
      <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 md:gap-6 px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-xl rounded-full border border-black/5 shadow-2xl scale-90 md:scale-100">
        <button 
          onClick={prevSlide}
          className="p-1.5 md:p-2 rounded-full hover:bg-blue-600/10 text-blue-600 transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft size={24} className="md:w-7 md:h-7" />
        </button>
        
        <div className="flex gap-1.5 md:gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? "bg-blue-600 scale-110 md:scale-125 w-4 md:w-6" : "bg-blue-600/20 w-2 md:w-2.5"
              }`}
              aria-label={`Ir a diapositiva ${i + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="p-1.5 md:p-2 rounded-full hover:bg-blue-600/10 text-blue-600 transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight size={24} className="md:w-7 md:h-7" />
        </button>

        <div className="hidden sm:block pl-3 md:pl-4 border-l border-black/10 text-xs md:text-sm font-bold text-text-muted min-w-[40px] md:min-w-[60px] text-center">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Branding / Logo Placeholder */}
      <div className="fixed top-8 left-8 z-50 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
          <GraduationCap size={24} />
        </div>
        <span className="font-display font-extrabold text-xl tracking-tight hidden sm:block">PACE 2026</span>
      </div>
    </div>
  );
}
