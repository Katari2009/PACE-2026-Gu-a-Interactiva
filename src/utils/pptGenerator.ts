import PptxGenJS from "pptxgenjs";

export const generatePACEPresentation = () => {
  const pptx = new PptxGenJS();

  pptx.layout = "LAYOUT_WIDE";

  // Slide 1: Portada
  const slide1 = pptx.addSlide();
  slide1.background = { color: "F5F5F5" };
  slide1.addText("Programa PACE 2026", {
    x: 0.5,
    y: 1.5,
    w: "90%",
    fontSize: 44,
    bold: true,
    color: "1A365D",
    align: "center",
  });
  slide1.addText("Jornada para Estudiantes de 3° y 4° Medio", {
    x: 0.5,
    y: 2.5,
    w: "90%",
    fontSize: 28,
    color: "2D3748",
    align: "center",
  });
  slide1.addText("Preparación Enseñanza Media - Exploración Vocacional", {
    x: 0.5,
    y: 3.5,
    w: "90%",
    fontSize: 18,
    italic: true,
    color: "4A5568",
    align: "center",
  });
  slide1.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 5.0,
    w: "100%",
    h: 0.5,
    fill: { color: "1A365D" },
  });

  // Slide 2: ¿Qué es el PACE?
  const slide2 = pptx.addSlide();
  slide2.addText("¿Qué es el PACE?", {
    x: 0.5,
    y: 0.5,
    w: "90%",
    fontSize: 32,
    bold: true,
    color: "1A365D",
  });
  slide2.addText(
    [
      { text: "• Programa de Acceso a la Educación Superior.", options: { bullet: true, fontSize: 20 } },
      { text: "• Vía de admisión inclusiva a la Educación Superior chilena.", options: { bullet: true, fontSize: 20 } },
      { text: "• Busca restituir el derecho a la educación superior a estudiantes de sectores vulnerables.", options: { bullet: true, fontSize: 20 } },
      { text: "• Participan 29 instituciones de Educación Superior a lo largo del país.", options: { bullet: true, fontSize: 20 } },
      { text: "• Ofrece cupos garantizados para estudiantes que resulten habilitados.", options: { bullet: true, fontSize: 20 } },
    ],
    { x: 0.5, y: 1.5, w: "90%", h: 3.5 }
  );

  // Slide 3: Objetivos del Programa
  const slide3 = pptx.addSlide();
  slide3.addText("Objetivos del Programa", {
    x: 0.5,
    y: 0.5,
    w: "90%",
    fontSize: 32,
    bold: true,
    color: "1A365D",
  });
  slide3.addText("01. Acompañamiento", {
    x: 0.5,
    y: 1.5,
    w: "40%",
    fontSize: 24,
    bold: true,
    color: "2B6CB0",
  });
  slide3.addText(
    "Acompañar a las y los estudiantes de 3° y 4° año medio mediante acciones de preparación y apoyo permanente en sus liceos.",
    { x: 0.5, y: 2.2, w: "40%", fontSize: 18 }
  );
  slide3.addText("02. Aseguramiento de Cupos", {
    x: 5.0,
    y: 1.5,
    w: "45%",
    fontSize: 24,
    bold: true,
    color: "2B6CB0",
  });
  slide3.addText(
    "Garantizar cupos adicionales para estudiantes habilitados por parte de las Universidades e Institutos que son parte del Programa.",
    { x: 5.0, y: 2.2, w: "45%", fontSize: 18 }
  );

  // Slide 4: Criterios de Habilitación
  const slide4 = pptx.addSlide();
  slide4.addText("Criterios de Habilitación PACE", {
    x: 0.5,
    y: 0.5,
    w: "90%",
    fontSize: 32,
    bold: true,
    color: "1A365D",
  });
  slide4.addText("¿Qué significa ser estudiante habilitado/a?", {
    x: 0.5,
    y: 1.2,
    w: "90%",
    fontSize: 18,
    italic: true,
  });
  slide4.addText(
    [
      { text: "1. Egresar de enseñanza media dentro del 25% superior del puntaje ranking de su Liceo.", options: { bullet: true, fontSize: 18 } },
      { text: "2. Haber cursado 3° y 4° medio en un liceo adscrito al Programa PACE.", options: { bullet: true, fontSize: 18 } },
      { text: "3. Rendir las pruebas obligatorias de la PAES (Comprensión Lectora y Matemáticas 1) y al menos una electiva.", options: { bullet: true, fontSize: 18 } },
    ],
    { x: 0.5, y: 2.0, w: "90%", h: 2.5 }
  );
  slide4.addText(
    "La habilitación permite al estudiante duplicar sus opciones de ingreso (vía regular y vía PACE).",
    { x: 0.5, y: 4.5, w: "90%", fontSize: 16, color: "718096" }
  );

  // Slide 5: Factores de Selección
  const slide5 = pptx.addSlide();
  slide5.addText("Factores de Selección", {
    x: 0.5,
    y: 0.5,
    w: "90%",
    fontSize: 32,
    bold: true,
    color: "1A365D",
  });
  slide5.addText(
    [
      { text: "• NEM:", options: { bold: true } },
      { text: " Promedio de notas de enseñanza media (1° a 4°), transformado a puntaje estándar." },
      { text: "\n• Ranking:", options: { bold: true } },
      { text: " Puntaje según posición relativa de las notas respecto a generaciones previas del liceo." },
      { text: "\n• PAES:", options: { bold: true } },
      { text: " Puntajes obtenidos en la Prueba de Acceso a la Educación Superior." },
    ],
    { x: 0.5, y: 1.5, w: "90%", fontSize: 20 }
  );

  // Slide 6: Puntaje Ponderado PACE
  const slide6 = pptx.addSlide();
  slide6.addText("Cálculo de Puntaje Ponderado PACE", {
    x: 0.5,
    y: 0.5,
    w: "90%",
    fontSize: 32,
    bold: true,
    color: "1A365D",
  });
  slide6.addTable(
    [
      [
        { text: "Componente", options: { bold: true, fill: { color: "E2E8F0" } } },
        { text: "Ponderación", options: { bold: true, fill: { color: "E2E8F0" } } },
      ],
      [
        { text: "Puntaje Ranking de Notas", options: {} },
        { text: "80%", options: {} }
      ],
      [
        { text: "Puntaje Notas Enseñanza Media (NEM)", options: {} },
        { text: "20%", options: {} }
      ],
    ],
    { x: 0.5, y: 1.5, w: 9, border: { type: "solid", color: "CBD5E0" } }
  );
  slide6.addText("Bonificaciones Adicionales:", {
    x: 0.5,
    y: 3.5,
    w: "90%",
    fontSize: 22,
    bold: true,
    color: "2B6CB0",
  });
  slide6.addText(
    "• Territorio: 7% si postula a la misma región del liceo; 3.5% en otra región.\n• Preferencia: Puntos extra según el orden de postulación a la carrera.",
    { x: 0.5, y: 4.2, w: "90%", fontSize: 18 }
  );

  // Slide 7: Acompañamiento
  const slide7 = pptx.addSlide();
  slide7.addText("Nuestro Acompañamiento", {
    x: 0.5,
    y: 0.5,
    w: "90%",
    fontSize: 32,
    bold: true,
    color: "1A365D",
  });
  slide7.addText("Exploración Vocacional", {
    x: 0.5,
    y: 1.5,
    w: "40%",
    fontSize: 22,
    bold: true,
    color: "2B6CB0",
  });
  slide7.addText(
    "Actividades dentro del horario escolar que propician la exploración vocacional y el autoconocimiento.",
    { x: 0.5, y: 2.2, w: "40%", fontSize: 16 }
  );
  slide7.addText("Apoyo en Admisión", {
    x: 5.0,
    y: 1.5,
    w: "45%",
    fontSize: 22,
    bold: true,
    color: "2B6CB0",
  });
  slide7.addText(
    "Apoyo en laboratorios para inscripción PAES, postulación a beneficios (FUAS) y postulación a Universidades.",
    { x: 5.0, y: 2.2, w: "45%", fontSize: 16 }
  );

  // Slide 8: FUAS y Beneficios
  const slide8 = pptx.addSlide();
  slide8.addText("Beneficios Estudiantiles (FUAS)", {
    x: 0.5,
    y: 0.5,
    w: "90%",
    fontSize: 32,
    bold: true,
    color: "1A365D",
  });
  slide8.addText(
    "El Formulario Único de Acreditación Socioeconómica (FUAS) es el primer paso para acceder a:",
    { x: 0.5, y: 1.2, w: "90%", fontSize: 18 }
  );
  slide8.addText(
    "• Gratuidad\n• Becas de Arancel\n• Fondo Solidario de Crédito Universitario\n• Crédito con Garantía Estatal (CAE)",
    { x: 1.0, y: 2.0, w: "80%", fontSize: 20, color: "2D3748" }
  );
  slide8.addText("Fechas Clave: Inscripciones generalmente en OCTUBRE.", {
    x: 0.5,
    y: 4.5,
    w: "90%",
    fontSize: 20,
    bold: true,
    color: "C53030",
  });

  // Slide 9: Páginas de Interés
  const slide9 = pptx.addSlide();
  slide9.addText("Páginas Web de Interés", {
    x: 0.5,
    y: 0.5,
    w: "90%",
    fontSize: 32,
    bold: true,
    color: "1A365D",
  });
  slide9.addText(
    [
      { text: "• demre.cl:", options: { bold: true } },
      { text: " Información oficial sobre la PAES y el proceso de admisión." },
      { text: "\n• mifuturo.cl:", options: { bold: true } },
      { text: " Estadísticas de empleabilidad e ingresos de carreras." },
      { text: "\n• beneficiosestudiantiles.cl:", options: { bold: true } },
      { text: " Todo sobre el FUAS, Gratuidad y becas." },
      { text: "\n• eligecarrera.cl:", options: { bold: true } },
      { text: " Orientación vocacional y buscador de carreras." },
    ],
    { x: 0.5, y: 1.5, w: "90%", fontSize: 18 }
  );

  // Slide 10: Cierre
  const slide10 = pptx.addSlide();
  slide10.addText("¡Muchas Gracias!", {
    x: 0.5,
    y: 2.0,
    w: "90%",
    fontSize: 48,
    bold: true,
    color: "1A365D",
    align: "center",
  });
  slide10.addText("Programa PACE 2026", {
    x: 0.5,
    y: 3.5,
    w: "90%",
    fontSize: 24,
    color: "4A5568",
    align: "center",
  });

  pptx.writeFile({ fileName: "Presentacion_PACE_2026.pptx" });
};
