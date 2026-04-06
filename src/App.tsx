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
  MousePointerClick,
  ExternalLink,
  Building2,
  Briefcase,
  Shield,
  Battery,
  BatteryMedium,
  BatteryLow,
  BatteryFull,
  ClipboardList,
  Search,
  Building,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Globe
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

// --- Main App ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      content: (
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <div className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full font-black text-xs md:text-sm uppercase tracking-widest mb-6 md:mb-8 shadow-lg shadow-blue-600/20">
              Admisión 2026
            </div>
            <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-black tracking-tighter leading-[0.85] mb-6 md:mb-10 italic">
              Guía Interactiva <br/>
              <span className="text-blue-600">PACE 2026</span>
            </h1>
            <p className="text-[clamp(1.1rem,2.5vw,1.8rem)] text-text-secondary max-w-3xl mx-auto font-bold leading-tight mb-8 md:mb-12">
              Todo lo que necesitas saber para asegurar tu cupo en la Educación Superior. <br className="hidden md:block"/>
              Tu esfuerzo tiene recompensa.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <button 
                onClick={() => setCurrentSlide(1)}
                className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-black text-white rounded-2xl md:rounded-3xl font-black italic uppercase tracking-widest hover:bg-blue-600 transition-all shadow-2xl hover:scale-105 active:scale-95"
              >
                Comenzar Ruta
              </button>
            </div>
          </Reveal>
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3.5rem)] font-black mb-8 md:mb-12 italic leading-tight">
              Ecosistema de <br/>
              <span className="text-blue-600">Educación Superior</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "CFT", desc: "Centros de Formación Técnica. Carreras de 2 años (Técnico de Nivel Superior).", icon: <Building2 />, color: "bg-blue-600" },
              { title: "IP", desc: "Institutos Profesionales. Carreras técnicas y profesionales sin grado de licenciado.", icon: <Briefcase />, color: "bg-teal-500" },
              { title: "Universidades", desc: "Carreras profesionales con grado de licenciado (5+ años).", icon: <GraduationCap />, color: "bg-amber-500" },
              { title: "FF.AA. y de Orden", desc: "Escuelas matrices de las Fuerzas Armadas y de Orden.", icon: <Shield />, color: "bg-red-500" }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="card p-6 md:p-8 h-full flex flex-col group hover:bg-blue-50 transition-colors">
                  <div className={`w-12 h-12 md:w-16 md:h-16 ${item.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black italic mb-3">{item.title}</h3>
                  <p className="text-sm md:text-base font-medium text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.5}>
            <div className="mt-8 md:mt-12 p-4 md:p-6 bg-blue-50 border border-blue-100 rounded-2xl">
              <p className="text-sm md:text-base text-blue-800 font-bold text-center italic">
                Objetivo principal: Acompañarte en 3° y 4° medio con apoyo permanente para asegurar tu futuro.
              </p>
            </div>
          </Reveal>
        </div>
      )
    },
    {
      id: 3,
      content: (
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3.5rem)] font-black mb-8 md:mb-12 italic leading-tight">
              Financiamiento y el <span className="text-blue-600">FUAS</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              {[
                { level: "Gratuidad", desc: "Cubre matrícula y arancel por la duración nominal de la carrera.", icon: <BatteryFull />, color: "text-blue-600", pct: "60%" },
                { level: "Becas", desc: "Aportes del Estado que cubren parte del arancel.", icon: <BatteryMedium />, color: "text-teal-500", pct: "70%" },
                { level: "Créditos", desc: "Préstamos con baja tasa de interés (CAE y Fondo Solidario).", icon: <BatteryLow />, color: "text-amber-500", pct: "80%" }
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex gap-4 md:gap-6 items-start group">
                    <div className={`mt-1 shrink-0 ${item.color} group-hover:scale-110 transition-transform`}>
                      {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl md:text-2xl font-black italic">{item.level}</h3>
                        <span className={`text-xs font-black px-2 py-0.5 rounded-full bg-gray-100 ${item.color}`}>Hasta {item.pct} RSH</span>
                      </div>
                      <p className="text-sm md:text-base font-medium text-text-secondary leading-snug">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.4}>
              <div className="card p-8 bg-black text-white border-none shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20"><Zap size={80} /></div>
                <h3 className="text-2xl font-black italic mb-4">¿Cómo se postula?</h3>
                <p className="text-lg font-bold mb-6 opacity-90 leading-relaxed">
                  A través del Formulario Único de Acreditación Socioeconómica (FUAS). Es el paso OBLIGATORIO para acceder a todos los beneficios.
                </p>
                <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                  <p className="text-sm font-black uppercase tracking-widest text-teal-400 mb-2">Dato Clave</p>
                  <p className="text-xs md:text-sm font-medium italic">
                    "No importa tu nota para la Gratuidad, importa tu situación socioeconómica."
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      )
    },
    {
      id: 4,
      content: (
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3.5rem)] font-black mb-8 md:mb-12 italic leading-tight">
              ¿Qué es el <span className="text-blue-600">Programa PACE?</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { phase: "PEM", title: "Preparación Enseñanza Media", desc: "Acompañamiento en 3° y 4° medio para fortalecer tus competencias.", color: "bg-blue-600" },
              { phase: "Puente", title: "Transición", desc: "Apoyo en el proceso de postulación y matrícula a la universidad.", color: "bg-teal-500" },
              { phase: "AES", title: "Acompañamiento Ed. Superior", desc: "Tutorías y apoyo durante tus dos primeros años de carrera.", color: "bg-amber-500" }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="card p-8 h-full border-t-8 border-black/5 hover:border-blue-600 transition-all">
                  <div className={`inline-block px-3 py-1 rounded-lg ${item.color} text-white font-black text-xs mb-4`}>
                    FASE {item.phase}
                  </div>
                  <h3 className="text-xl font-black italic mb-3">{item.title}</h3>
                  <p className="text-sm font-medium text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.5}>
            <div className="mt-12 text-center">
              <p className="text-lg md:text-2xl font-bold text-text-muted italic max-w-4xl mx-auto">
                "Restituir el derecho a la educación superior a estudiantes de sectores vulnerables, garantizando cupos en las universidades en convenio."
              </p>
            </div>
          </Reveal>
        </div>
      )
    },
    {
      id: 5,
      content: (
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3.5rem)] font-black mb-8 md:mb-12 italic leading-tight">
              La Red <span className="text-blue-600">PACE Atacama</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { prov: "Provincia de Copiapó", liceos: ["Liceo Polivalente el Palomar", "Liceo José Antonio Carvajal", "Liceo Jorge Alessandri Rodríguez", "Escuela de Concentración Fronteriza \"Los Loros\"", "Instituto Comercial Alejandro Rivera Díaz", "Liceo Tecnológico de Copiapó", "Liceo Manuel Blanco Encalada"], color: "border-blue-600" },
              { prov: "Provincia de Huasco", liceos: ["Liceo Bicentenario de Vallenar", "Liceo Bicentenario Pedro Troncoso Machuca", "Liceo Bicentenario de Alto del Carmen", "Liceo Bicentenario de Freirina", "Liceo Bicentenario de Huasco"], color: "border-teal-500" },
              { prov: "Provincia de Chañaral", liceos: ["Liceo Bicentenario de Chañaral", "Liceo Bicentenario de Diego de Almagro"], color: "border-amber-500" }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`card p-6 md:p-8 border-l-8 ${item.color} h-full`}>
                  <h3 className="text-xl font-black italic mb-6">{item.prov}</h3>
                  <ul className="space-y-3">
                    {item.liceos.map((liceo, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm font-bold text-text-secondary leading-tight">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />
                        {liceo}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 6,
      content: (
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display text-[clamp(1.5rem,4vw,3.5rem)] font-black mb-8 md:mb-12 italic text-center">
              Vías de Ingreso: <br/>
              <span className="text-blue-600">¿Cómo entro a la Universidad?</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Admisión Regular", desc: "Basada en tu puntaje ponderado (PAES + NEM + Ranking). Compites con todos a nivel nacional.", icon: <Users />, color: "bg-gray-100 text-gray-900" },
              { title: "Vía PACE", desc: "Cupos garantizados para estudiantes habilitados. No compites por puntaje PAES, sino por tu trayectoria escolar.", icon: <Trophy />, color: "bg-blue-600 text-white" },
              { title: "Admisión Especial", desc: "Para deportistas destacados, talentos artísticos, pueblos originarios, etc.", icon: <Zap />, color: "bg-teal-500 text-white" }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`card p-8 h-full flex flex-col items-center text-center ${item.color} border-none shadow-xl`}>
                  <div className="mb-6">{React.cloneElement(item.icon as React.ReactElement, { size: 48 })}</div>
                  <h3 className="text-2xl font-black italic mb-4">{item.title}</h3>
                  <p className="text-base font-bold opacity-90 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 7,
      content: (
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display text-[clamp(1.5rem,4vw,3.5rem)] font-black mb-8 md:mb-12 italic text-center">
              Las 3 Llaves: <br/>
              <span className="text-blue-600">Criterios de Habilitación PACE</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-teal-500/20 -translate-y-1/2 hidden lg:block" />
            {[
              { 
                title: "Trayectoria", 
                desc: "Cursar 3° y 4° medio en un liceo PACE, y egresar (Promoción 2026/correspondiente) de un establecimiento con la misma condition.",
                icon: <Route />,
                color: "bg-blue-600"
              },
              { 
                title: "Rendimiento Académico", 
                desc: "Estar en el 25% superior de puntaje ranking de notas de tu establecimiento OR obtener un ranking igual o superior a 815 puntos (Admisión 2027).",
                icon: <BarChart3 />,
                color: "bg-teal-500"
              },
              { 
                title: "Pruebas PAES", 
                desc: "Rendir obligatoriamente: PAES Competencia Lectora, PAES Competencia Matemática 1, PLUS una prueba electiva para el proceso de admisión 2027.",
                icon: <ClipboardList />,
                color: "bg-amber-500"
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="card p-6 md:p-8 h-full flex flex-col items-center text-center bg-white relative z-10">
                  <div className={`w-16 h-16 ${item.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <h3 className="text-xl font-black italic mb-4">{item.title}</h3>
                  <p className="text-sm font-medium text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.5}>
            <div className="mt-12 p-4 bg-teal-500 text-white rounded-xl text-center font-black uppercase tracking-widest text-xs md:text-sm">
              Debes poseer estas tres llaves simultáneamente para asegurar tu cupo.
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
            <h2 className="font-display text-[clamp(1.5rem,4vw,3.5rem)] font-black mb-8 md:mb-12 italic text-center">
              Tu Equipo de Apoyo: <br/>
              <span className="text-blue-600">¿Qué hacemos contigo en 4° Medio?</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { title: "Orientación Diaria", desc: "Talleres en aula, recreos informativos y entrevistas a profesionales.", icon: <Map /> },
              { title: "Trámites Clave", desc: "Acompañamiento guiado en inscripción PAES y postulación FUAS.", icon: <ClipboardList /> },
              { title: "Inmersión Universitaria", desc: "Visitas pedagógicas a la universidad y charlas para futuros estudiantes de pedagogía.", icon: <Building /> },
              { title: "Gestión Familiar", desc: "Jornadas con apoderados, talleres sobre RSH y situación migratoria.", icon: <Users /> }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="card p-6 flex items-center gap-6 hover:bg-blue-50 transition-colors group">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <div>
                    <h3 className="text-xl font-black italic mb-1">{item.title}</h3>
                    <p className="text-sm font-medium text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.5}>
            <div className="mt-12 text-center">
              <p className="text-lg font-bold text-text-muted italic">
                "Metodología participativa, dialogante y colaborativa en horario de clases."
              </p>
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
            <h2 className="font-display text-[clamp(1.5rem,4vw,3.5rem)] font-black mb-8 md:mb-12 italic text-center">
              Centro de Control: <br/>
              <span className="text-blue-600">Tu Lista de Tareas (Parte 1)</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Reveal delay={0.1}>
              <div className="card p-8 bg-white border-t-8 border-blue-600 h-full">
                <h3 className="text-2xl font-black italic mb-6 flex items-center gap-3">
                  <IdCard className="text-blue-600" /> Trámites Personales
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded border-2 border-blue-600 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-3 h-3 bg-blue-600 rounded-sm" />
                    </div>
                    <p className="text-base font-bold text-text-secondary leading-tight">
                      Mantener y cuidar la Cédula de Identidad (debe estar vigente para junio 2026).
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded border-2 border-blue-600 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-3 h-3 bg-blue-600 rounded-sm" />
                    </div>
                    <p className="text-base font-bold text-text-secondary leading-tight">
                      Crear un correo electrónico personal definitivo (con clave recordable, listo para junio).
                    </p>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="card p-8 bg-white border-t-8 border-teal-500 h-full">
                <h3 className="text-2xl font-black italic mb-6 flex items-center gap-3">
                  <Users className="text-teal-500" /> Gestión Familiar (El RSH)
                </h3>
                <ul className="space-y-4">
                  {[
                    "Verificar que el Registro Social de Hogares (RSH) esté actualizado y vigente (antes de septiembre 2026).",
                    "Recopilar datos exactos del grupo familiar residente (RUT, Nombre, Estado Civil, Parentesco, Actividad, Nivel de Estudio) para octubre.",
                    "Conseguir el promedio mensual de los ingresos del grupo familiar (años 2025 y 2026)."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded border-2 border-teal-500 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-3 h-3 bg-teal-500 rounded-sm" />
                      </div>
                      <p className="text-sm font-bold text-text-secondary leading-tight">{text}</p>
                    </li>
                  ))}
                </ul>
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
            <h2 className="font-display text-[clamp(1.5rem,4vw,3.5rem)] font-black mb-8 md:mb-12 italic text-center">
              Centro de Control: <br/>
              <span className="text-blue-600">Tu Lista de Tareas (Parte 2)</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Reveal delay={0.1}>
              <div className="card p-8 bg-white border-t-8 border-amber-500 h-full">
                <h3 className="text-2xl font-black italic mb-6 flex items-center gap-3">
                  <GraduationCap className="text-amber-500" /> Académico
                </h3>
                <ul className="space-y-4">
                  {[
                    "Mantener un promedio de notas alto en 4° medio (cada décima cuenta para tu Ranking).",
                    "Asegurar una asistencia a clases superior al 85% (requisito de promoción escolar).",
                    "Participar activamente en todos los talleres y jornadas PACE programadas."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded border-2 border-amber-500 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-3 h-3 bg-amber-500 rounded-sm" />
                      </div>
                      <p className="text-sm font-bold text-text-secondary leading-tight">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="card p-8 bg-white border-t-8 border-red-500 h-full">
                <h3 className="text-2xl font-black italic mb-6 flex items-center gap-3">
                  <Target className="text-red-500" /> Desafío PAES
                </h3>
                <ul className="space-y-4">
                  {[
                    "Inscribir la PAES Regular en el portal DEMRE (junio - agosto 2026).",
                    "Rendir las pruebas obligatorias (Lectora, M1) y al menos una electiva (Ciencias o Historia).",
                    "Descargar y guardar la Tarjeta de Identificación PAES (noviembre 2026)."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded border-2 border-red-500 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-3 h-3 bg-red-500 rounded-sm" />
                      </div>
                      <p className="text-sm font-bold text-text-secondary leading-tight">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      )
    },
    {
      id: 11,
      content: (
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display text-[clamp(1.5rem,4vw,3.5rem)] font-black mb-8 md:mb-12 italic text-center">
              Hoja de Ruta 2026-2027: <br/>
              <span className="text-blue-600">Hitos que no puedes olvidar</span>
            </h2>
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-blue-100 -translate-x-1/2 hidden md:block" />
            <div className="space-y-8 md:space-y-12">
              {[
                { month: "Junio - Agosto", title: "Inscripción PAES", desc: "Proceso obligatorio en demre.cl para rendir las pruebas en noviembre.", color: "bg-blue-600" },
                { month: "Octubre", title: "Postulación FUAS", desc: "Inscripción para gratuidad y beneficios en beneficiosestudiantiles.cl.", color: "bg-teal-500" },
                { month: "Diciembre", title: "Rendición PAES", desc: "Días clave para demostrar tus competencias a nivel nacional.", color: "bg-amber-500" },
                { month: "Enero 2027", title: "Postulación Centralizada", desc: "Momento de elegir tus carreras y universidades usando tu cupo PACE.", color: "bg-red-500" }
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-600 z-10" />
                    <div className="w-full md:w-1/2 text-center md:text-left">
                      <div className={`inline-block px-4 py-1 rounded-full text-white font-black text-xs mb-2 ${item.color}`}>
                        {item.month}
                      </div>
                      <h3 className="text-xl font-black italic mb-1">{item.title}</h3>
                      <p className="text-sm font-medium text-text-secondary">{item.desc}</p>
                    </div>
                    <div className="hidden md:block w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 12,
      content: (
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="w-24 h-24 bg-blue-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl rotate-3">
              <Rocket size={48} />
            </div>
            <h2 className="font-display text-[clamp(2rem,6vw,4.5rem)] font-black mb-6 italic leading-tight">
              Tú eres el <br/>
              <span className="text-blue-600">Protagonista</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold text-text-secondary mb-12 leading-relaxed">
              El camino a la Educación Superior no lo recorres solo. <br/>
              El equipo PACE UDA está aquí para impulsarte.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Instagram />, label: "@paceuda", url: "https://instagram.com/paceuda" },
              { icon: <Globe />, label: "pace.uda.cl", url: "https://pace.uda.cl" },
              { icon: <Mail />, label: "pace@uda.cl", url: "mailto:pace@uda.cl" }
            ].map((item, i) => (
              <Reveal key={i} delay={0.5 + i * 0.1}>
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="card p-6 flex flex-col items-center gap-3 hover:bg-blue-50 transition-all hover:-translate-y-1"
                >
                  <div className="text-blue-600">{React.cloneElement(item.icon as React.ReactElement, { size: 32 })}</div>
                  <span className="font-black italic">{item.label}</span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={1}>
            <div className="mt-16">
              <button 
                onClick={() => setCurrentSlide(0)}
                className="px-8 py-4 bg-black text-white rounded-2xl font-black italic uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-xl"
              >
                Reiniciar Guía
              </button>
            </div>
          </Reveal>
        </div>
      )
    }
  ];

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

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="fixed left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 p-2 md:p-4 rounded-full bg-white/80 backdrop-blur-xl border border-black/5 shadow-xl text-blue-600 hover:bg-blue-600 hover:text-white transition-all group active:scale-95"
        aria-label="Anterior"
      >
        <ChevronLeft size={24} className="md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button 
        onClick={nextSlide}
        className="fixed right-2 md:right-8 top-1/2 -translate-y-1/2 z-50 p-2 md:p-4 rounded-full bg-white/80 backdrop-blur-xl border border-black/5 shadow-xl text-blue-600 hover:bg-blue-600 hover:text-white transition-all group active:scale-95"
        aria-label="Siguiente"
      >
        <ChevronRight size={24} className="md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Branding / Logo Placeholder */}
      <div className="fixed top-8 left-8 z-50 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
          <GraduationCap size={24} />
        </div>
        <span className="font-display font-extrabold text-xl tracking-tight hidden sm:block">PACE 2026</span>
      </div>

      {/* Creator Footer */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 text-right">
        <p className="text-[10px] md:text-xs font-bold text-text-muted opacity-60 leading-tight">
          Creado por: Christian Núñez <br/>
          Asesor Pedagógico, Programa PACE-UDA, 2026.
        </p>
      </div>
    </div>
  );
}
