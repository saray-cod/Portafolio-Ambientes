(function () {
  "use strict";

  window.EspaciosData = {
    site: {
      title: "Espacios que conectan",
      projectLabel: "Gestión Tecnológica – Bucaramanga",
      heroTitle: "Espacios que conectan",
      heroSubtitle: "Infraestructura tecnológica para aprender, compartir y crear",
      heroDescription:
        "La seccional Bucaramanga integra ambientes para la docencia, el trabajo con recursos digitales y los encuentros académicos e institucionales. Conozca sus aforos, equipamientos y recorridos virtuales.",
      heroImage: {
        src: "assets/IMG/portada/auditorio-mayor-nave-principal.webp",
        alt: "Nave principal del Auditorio Mayor de la Universidad Cooperativa de Colombia, Seccional Bucaramanga",
        width: 1700,
        height: 1033
      },
      heroHighlight: "Nave principal · Auditorio Mayor"
    },

    navigation: [
      { id: "inicio", label: "Inicio" },
      { id: "infraestructura", label: "Infraestructura" },
      { id: "audiovisuales", label: "Audiovisuales" },
      { id: "hyflex", label: "HyFlex" },
      { id: "informatica", label: "Informática" },
      { id: "auditorios", label: "Auditorios" },
      { id: "recomendaciones", label: "Recomendaciones" },
      { id: "recorridos", label: "Recorridos 360°" }
    ],

    stats: [
      {
        icon: "auditorio",
        value: "3",
        label: "Auditorios",
        detail: "Auditorio Mayor, Menor e Intermedio"
      },
      {
        icon: "computador",
        value: "8",
        label: "Salas de informática",
        detail: "Distribuidas en las tipologías A–D"
      },
      {
        icon: "hibrido",
        value: "2",
        label: "Salas HyFlex",
        detail: "Interacción presencial y remota"
      },
      {
        icon: "pantalla",
        value: "5",
        label: "Salas de audiovisuales",
        detail: "Cifra del resumen documental"
      }
    ],

    statsNote:
      "El resumen del documento registra 5 salas de audiovisuales, pero el detalle identifica Sala 611 y las salas 612, 613 y 619. No se ha añadido una quinta sala.",

    attractions: [
      {
        icon: "pantalla",
        title: "Experiencias presenciales",
        text: "Salas audiovisuales y auditorios para presentaciones, clases y eventos de distinto tamaño."
      },
      {
        icon: "hibrido",
        title: "Participación simultánea",
        text: "Equipamiento Cisco y recursos de videoconferencia en salas identificadas para actividades híbridas."
      },
      {
        icon: "computador",
        title: "Trabajo con tecnología",
        text: "Estaciones Windows y Mac para tareas académicas y uso de recursos informáticos."
      },
      {
        icon: "modular",
        title: "Formatos ajustables",
        text: "Mobiliario colaborativo y división modular documentada en el Auditorio Mayor."
      }
    ],

    audiovisuales: {
      eyebrow: "Salas audiovisuales",
      title: "Presentaciones que se ven y se comparten",
      intro:
        "Ambientes con pantallas de gran formato, mobiliario para sesiones de clase y sistemas Cisco de videoconferencia.",
      image: {
        src: "assets/IMG/audiovisuales/sala-audiovisual-vista-01.webp",
        alt: "Fotografía de una sala audiovisual institucional; el PDF no identifica el número específico de la sala",
        width: 818,
        height: 670
      },
      secondaryImage: {
        src: "assets/IMG/audiovisuales/sala-audiovisual-vista-02.webp",
        alt: "Segunda fotografía de salas audiovisuales institucionales; el PDF no identifica el número específico de la sala",
        width: 818,
        height: 670
      },
      uses: [
        "Actividades académicas con apoyo multimedia",
        "Seminarios y presentaciones de proyectos",
        "Sesiones de trabajo colaborativo",
        "Actividades con participantes remotos, de acuerdo con los recursos descritos"
      ],
      rooms: [
        {
          id: "sala-611",
          name: "Sala 611",
          tag: "32 puestos",
          summary: "Mesas trapezoidales y computadores de escritorio con internet.",
          details: [
            { label: "Aforo y mobiliario", value: "32 puestos. Mesas trapezoidales de 150 × 67,6 × 73 cm." },
            { label: "Pantallas", value: "Pantalla de 72 pulgadas." },
            { label: "Equipos disponibles", value: "Computadores de escritorio con internet." },
            { label: "Videoconferencia", value: "Videoconferencia Cisco." }
          ],
          note: "El PDF presenta dos fotografías generales de salas audiovisuales sin asociarlas a un número de sala."
        },
        {
          id: "salas-612-613-619",
          name: "Salas 612, 613 y 619",
          tag: "28 puestos por sala",
          summary: "Escritorios dobles, portátil docente y videoconferencia Cisco.",
          details: [
            { label: "Aforo y mobiliario", value: "28 puestos por sala. Escritorios dobles de 150 × 60 cm." },
            { label: "Pantallas", value: "Pantallas de 72 pulgadas." },
            { label: "Equipos disponibles", value: "Portátil para el docente con internet." },
            { label: "Videoconferencia", value: "Videoconferencia Cisco." }
          ],
          note: "El PDF presenta dos fotografías generales de salas audiovisuales sin asociarlas a un número de sala."
        }
      ]
    },

    hyflex: {
      eyebrow: "Aprendizaje híbrido",
      title: "Presencia y conexión en una misma experiencia",
      intro:
        "Dos espacios con videoconferencia Cisco para facilitar la interacción entre participantes en el aula y a distancia. La elección depende del tamaño del grupo y del tipo de interacción prevista.",
      rooms: [
        {
          id: "hyflex-1",
          name: "HyFlex 1",
          capacity: "40 personas",
          image: {
            src: "assets/IMG/hyflex/hyflex-1.webp",
            alt: "Fotografía de la Sala HyFlex 1 del documento institucional",
            width: 1700,
            height: 727
          },
          summary: "Pantallas y audio de sala para actividades académicas híbridas.",
          details: [
            "Uso exclusivo para actividades académicas híbridas.",
            "Dos pantallas LG de 75 pulgadas.",
            "Audio Peavey XR 600G y bafle Yamaki.",
            "Cámara Cisco Webex PTZ 4K y Cisco Room Navigator.",
            "Portátil; micrófono BOYALINK opcional, previa solicitud.",
            "Dos unidades de aire acondicionado."
          ],
          note: null
        },
        {
          id: "hyflex-2",
          name: "HyFlex 2",
          capacity: "25 personas",
          image: null,
          summary: "Panel interactivo móvil y videoconferencia Cisco.",
          details: [
            "Mobiliario: 14 mesas con dos sillas por mesa.",
            "Panel interactivo móvil MAXHUB E8630.",
            "Módulo OPS72A, procesador Intel Core i7-13620H, 16 GB de RAM y SSD de 250 GB.",
            "Cámara Cisco Webex PTZ 4K y Cisco Room Navigator.",
            "Portátil; micrófono BOYALINK opcional, previa solicitud.",
            "Una unidad de aire acondicionado."
          ],
          note:
            "El documento indica 25 personas en la ficha de la sala, mientras que la tabla de recomendaciones se refiere a un aprendizaje híbrido de hasta 28 personas. Ambos datos se conservan y deben verificarse."
        }
      ],
      comparison: [
        { label: "Capacidad", one: "40 personas", two: "25 personas" },
        { label: "Uso y mobiliario", one: "Uso exclusivo para actividades académicas híbridas", two: "14 mesas con dos sillas por mesa" },
        { label: "Imagen", one: "Dos pantallas LG de 75 pulgadas", two: "Panel interactivo móvil MAXHUB E8630" },
        { label: "Cómputo", one: "No documentado en el detalle", two: "Módulo OPS72A · Intel Core i7-13620H · 16 GB RAM · SSD 250 GB" },
        { label: "Audio", one: "Peavey XR 600G y bafle Yamaki", two: "No documentado en el detalle" },
        { label: "Videoconferencia", one: "Cisco Webex PTZ 4K + Cisco Room Navigator", two: "Cisco Webex PTZ 4K + Cisco Room Navigator" },
        { label: "Complementos", one: "Portátil; micrófono BOYALINK opcional, previa solicitud", two: "Portátil; micrófono BOYALINK opcional, previa solicitud" },
        { label: "Climatización", one: "Dos unidades de aire acondicionado", two: "Una unidad de aire acondicionado" }
      ],
      photoNote:
        "El PDF incluye una fotografía identificada para HyFlex 1. No se identificó una fotografía correspondiente a HyFlex 2."
    },

    informatica: {
      eyebrow: "Salas de informática",
      title: "Tecnología para aprender haciendo",
      intro:
        "Ocho salas organizadas en cuatro tipologías, con estaciones de trabajo y sistemas de visualización destinados a distintas necesidades académicas. La disponibilidad y configuración particular deben verificarse para cada sala.",
      images: [
        {
          src: "assets/IMG/informatica/sala-informatica-vista-01.webp",
          alt: "Fotografía de una sala de informática institucional; el PDF no la asocia a una tipología específica",
          width: 818,
          height: 500
        },
        {
          src: "assets/IMG/informatica/sala-informatica-vista-02.webp",
          alt: "Segunda fotografía de salas de informática institucionales; el PDF no la asocia a una tipología específica",
          width: 818,
          height: 500
        }
      ],
      imageNote: "Las dos fotografías del documento son generales; no se han asignado a una tipología A–D.",
      types: [
        {
          id: "si-a",
          name: "SI-A",
          icon: "mac",
          tag: "Mac",
          summary: "Diseño, edición y procesamiento gráfico.",
          equipment: "10 computadores Mac; Smart TV.",
          orientation: "Diseño, edición y procesamiento gráfico, según la caracterización del documento.",
          count: "10 equipos Mac"
        },
        {
          id: "si-b",
          name: "SI-B",
          icon: "windows",
          tag: "Windows",
          summary: "Actividades académicas generales y proyectos colaborativos.",
          equipment: "38 computadores Windows distribuidos en dos salas; pantalla One Screen.",
          orientation: "Actividades académicas generales y proyectos colaborativos.",
          count: "38 equipos · 2 salas"
        },
        {
          id: "si-c",
          name: "SI-C",
          icon: "portatil",
          tag: "Portátiles",
          summary: "Estaciones de cómputo y visualización para grupos.",
          equipment: "60 computadores portátiles Windows distribuidos en tres salas; Smart TV.",
          orientation: "Trabajo con grupos que requieran estaciones de cómputo y visualización.",
          count: "60 portátiles · 3 salas"
        },
        {
          id: "si-d",
          name: "SI-D",
          icon: "proyeccion",
          tag: "Proyección",
          summary: "Enseñanza y presentaciones apoyadas por proyección.",
          equipment: "Computadores Windows distribuidos en dos salas; videobeam.",
          orientation: "Actividades de enseñanza y presentación apoyadas por proyección.",
          count: "Cantidad no especificada · 2 salas"
        }
      ]
    },

    auditorios: {
      eyebrow: "Auditorios",
      title: "Un formato para cada convocatoria",
      intro:
        "Tres auditorios con capacidades diferenciadas para reuniones, conferencias y encuentros de mayor escala.",
      featured: {
        name: "Auditorio Mayor",
        kicker: "Escenarios para encuentros de gran formato",
        description:
          "El Auditorio Mayor reúne capacidad, proyección, sonido, cámaras y alternativas de organización del espacio.",
        image: {
          src: "assets/IMG/auditorios/auditorio-mayor-interior.webp",
          alt: "Vista interior del Auditorio Mayor con disposición de sillas",
          width: 1700,
          height: 758
        },
        highlights: [
          { value: "300", label: "personas" },
          { value: "6.000", label: "lúmenes" },
          { value: "12", label: "canales" }
        ],
        gallery: [
          {
            src: "assets/IMG/auditorios/auditorio-mayor-vista-general.webp",
            alt: "Vista general del Auditorio Mayor incluida en el resumen del documento",
            width: 1700,
            height: 542
          },
          {
            src: "assets/IMG/auditorios/auditorio-mayor-detalle-01.webp",
            alt: "Detalle del Auditorio Mayor incluido en el documento",
            width: 818,
            height: 375
          },
          {
            src: "assets/IMG/auditorios/auditorio-mayor-detalle-02.webp",
            alt: "Segundo detalle del Auditorio Mayor incluido en el documento",
            width: 818,
            height: 375
          },
          {
            src: "assets/IMG/auditorios/auditorio-mayor-exterior.webp",
            alt: "Exterior del Auditorio Mayor de la Universidad Cooperativa de Colombia",
            width: 1700,
            height: 1007
          }
        ]
      },
      rooms: [
        {
          id: "auditorio-menor",
          name: "Auditorio de Menor",
          capacity: "22 personas",
          kicker: "Cercanía para sesiones de trabajo y exposición",
          summary:
            "Mobiliario de reunión, visualización en pantallas y recursos para transmisiones audiovisuales.",
          image: {
            src: "assets/IMG/auditorios/auditorio-menor.webp",
            alt: "Fotografía del Auditorio de Menor con disposición de mesa de reunión",
            width: 1700,
            height: 834
          },
          groups: [
            {
              title: "Configuración",
              items: ["Mobiliario para 22 asistentes", "Disposición de mesa de reunión en las fotografías"]
            },
            {
              title: "Visualización y captura",
              items: ["Dos pantallas de 75 pulgadas", "Cámara Cisco para encuadres de ponentes y planos abiertos"]
            },
            {
              title: "Soporte informático",
              items: ["Equipo de escritorio Windows 11 para presentaciones y videos"]
            }
          ],
          note: null
        },
        {
          id: "auditorio-intermedio",
          name: "Auditorio Intermedio",
          capacity: "Aproximadamente 180 personas",
          kicker: "Conferencias y formación",
          summary:
            "Alternativa para eventos de escala media con proyección, refuerzo sonoro y operación técnica desde cabina.",
          image: null,
          groups: [
            {
              title: "Aforo y proyección",
              items: ["Aproximadamente 180 personas", "Videobeam de 6.000 lúmenes", "Pantalla compatible"]
            },
            {
              title: "Sonido",
              items: ["Sistema de alta fidelidad", "Tres micrófonos, según disponibilidad documentada"]
            },
            {
              title: "Cabina",
              items: [
                "Computador Windows 11",
                "Conexiones HDMI y USB",
                "Control de sonido y proyección desde cabina"
              ]
            }
          ],
          note: "El PDF no incluye una fotografía identificada específicamente como Auditorio Intermedio."
        },
        {
          id: "auditorio-mayor",
          name: "Auditorio Mayor",
          capacity: "300 personas",
          kicker: "Encuentros de gran formato",
          summary:
            "Capacidad, proyección, sonido, cámaras y alternativas de organización del espacio.",
          image: {
            src: "assets/IMG/auditorios/auditorio-mayor-interior.webp",
            alt: "Vista interior del Auditorio Mayor con disposición de sillas",
            width: 1700,
            height: 758
          },
          groups: [
            {
              title: "Organización",
              items: [
                "Nave principal y dos naves auxiliares con puertas modulares",
                "Mesa de tarima para hasta 10 integrantes",
                "Camerino"
              ]
            },
            {
              title: "Visualización",
              items: ["Pantalla principal de 4 × 4 metros", "Dos Smart TV de 75 pulgadas en las naves auxiliares"]
            },
            {
              title: "Audio y luces",
              items: [
                "Cuatro micrófonos inalámbricos",
                "Dos micrófonos alámbricos",
                "Iluminación de escenario",
                "Consola de audio de 12 canales"
              ]
            },
            {
              title: "Transmisión",
              items: [
                "Videobeam principal de 6.000 lúmenes",
                "Cámara PTZ y cámara auxiliar",
                "Portátil y computador de escritorio en cabina"
              ]
            },
            {
              title: "Acceso y seguridad",
              items: ["Dos salidas de emergencia señalizadas", "Rampas de acceso"]
            }
          ],
          note: null
        }
      ]
    },

    recommendations: {
      eyebrow: "Guía de selección",
      title: "¿Qué espacio se ajusta a su actividad?",
      intro:
        "Seleccione una necesidad para ver el espacio sugerido según el aforo, la modalidad y los recursos documentados. Esta guía es informativa: no permite reservar espacios ni garantiza disponibilidad.",
      filters: [
        { id: "todas", label: "Todas" },
        { id: "audiovisuales", label: "Audiovisuales" },
        { id: "hyflex", label: "HyFlex" },
        { id: "informatica", label: "Informática" },
        { id: "auditorios", label: "Auditorios" }
      ],
      criteria: [
        {
          icon: "aforo",
          title: "Aforo",
          text: "Estime asistentes presenciales y compruebe la capacidad aplicable a la configuración solicitada."
        },
        {
          icon: "hibrido",
          title: "Modalidad",
          text: "Determine si se requiere participación remota y qué medios de videoconferencia están disponibles."
        },
        {
          icon: "pantalla",
          title: "Recursos",
          text: "Verifique software, equipos, número de pantallas y necesidades de sonido."
        },
        {
          icon: "operacion",
          title: "Operación",
          text: "Confirme disponibilidad, disposiciones de mobiliario, soporte requerido y condiciones de uso."
        }
      ],
      items: [
        {
          id: "rec-611",
          category: "audiovisuales",
          activity: "Clase con 28–32 participantes y pantalla",
          space: "Sala 611 o salas 612, 613 y 619",
          explanation:
            "Aforos documentados de 32 y 28 puestos, pantallas de 72 pulgadas y videoconferencia Cisco.",
          icon: "pantalla"
        },
        {
          id: "rec-hyflex1",
          category: "hyflex",
          activity: "Actividad académica híbrida de hasta 40 personas",
          space: "HyFlex 1",
          explanation:
            "Cámara 4K, dos pantallas y audio; uso académico híbrido exclusivo, con capacidad documentada de 40 personas.",
          icon: "hibrido"
        },
        {
          id: "rec-hyflex2",
          category: "hyflex",
          activity: "Aprendizaje híbrido con panel interactivo, hasta 28 personas",
          space: "HyFlex 2",
          explanation:
            "Panel MAXHUB móvil y videoconferencia Cisco. La ficha de la sala indica 25 personas; verificar aforo.",
          icon: "panel"
        },
        {
          id: "rec-sia",
          category: "informatica",
          activity: "Trabajo con computadores Mac",
          space: "Sala SI-A",
          explanation: "10 equipos Mac y Smart TV, orientados a diseño, edición y procesamiento gráfico.",
          icon: "mac"
        },
        {
          id: "rec-windows",
          category: "informatica",
          activity: "Talleres con equipos Windows",
          space: "Salas SI-B, SI-C o SI-D",
          explanation:
            "Definir distribución de equipos y sala específica según demanda; SI-D no especifica cantidad de computadores.",
          icon: "windows"
        },
        {
          id: "rec-menor",
          category: "auditorios",
          activity: "Reunión o exposición de hasta 22 personas",
          space: "Auditorio de Menor",
          explanation: "Pantallas de 75 pulgadas, cámara Cisco y mobiliario para reuniones.",
          icon: "auditorio"
        },
        {
          id: "rec-intermedio",
          category: "auditorios",
          activity: "Conferencia para aproximadamente 180 personas",
          space: "Auditorio Intermedio",
          explanation: "Sistema de sonido y videobeam de 6.000 lúmenes, con operación desde cabina.",
          icon: "auditorio"
        },
        {
          id: "rec-mayor",
          category: "auditorios",
          activity: "Evento amplio de hasta 300 personas",
          space: "Auditorio Mayor",
          explanation: "Naves modulares, proyección y control audiovisual, con capacidad registrada de 300 personas.",
          icon: "auditorio"
        }
      ],
      disclaimer: "Guía informativa basada en el documento. No realiza reservas ni confirma disponibilidad."
    },

    tours: {
      eyebrow: "Recorridos virtuales",
      title: "Conozca los ambientes antes de visitarlos",
      intro:
        "Acceda mediante el enlace al recorrido 360°, desplace la imagen en el navegador y explore los puntos de navegación disponibles. Los cuatro QR del documento fueron verificados y coinciden con los enlaces indicados.",
      items: [
        {
          id: "611",
          name: "Sala 611",
          url: "https://recorridos-ucc-bucaramanga-360.lithefrog8.chatgpt.site/611/",
          image: {
            src: "assets/IMG/audiovisuales/sala-audiovisual-vista-01.webp",
            alt: "Imagen de referencia de salas audiovisuales del documento",
            width: 818,
            height: 670
          },
          imageIsReference: true,
          note: null
        },
        {
          id: "612",
          name: "Sala 612",
          url: "https://recorridos-ucc-bucaramanga-360.lithefrog8.chatgpt.site/612/",
          image: {
            src: "assets/IMG/audiovisuales/sala-audiovisual-vista-02.webp",
            alt: "Imagen de referencia de salas audiovisuales del documento",
            width: 818,
            height: 670
          },
          imageIsReference: true,
          note: null
        },
        {
          id: "613",
          name: "Sala 613",
          url: "https://recorridos-ucc-bucaramanga-360.lithefrog8.chatgpt.site/613/",
          image: {
            src: "assets/IMG/audiovisuales/sala-audiovisual-vista-01.webp",
            alt: "Imagen de referencia de salas audiovisuales del documento",
            width: 818,
            height: 670
          },
          imageIsReference: true,
          note: null
        },
        {
          id: "618",
          name: "HyFlex 2",
          url: "https://recorridos-ucc-bucaramanga-360.lithefrog8.chatgpt.site/618/",
          image: null,
          imageIsReference: false,
          note: "El recorrido está identificado como HyFlex 2, pero su URL termina en /618/. Se conserva el enlace indicado para verificación."
        }
      ],
      integrationNote:
        "Los cuatro sitios responden correctamente y no declaran cabeceras que bloqueen su integración. Si un recorrido no se muestra dentro de la página, use el botón para abrirlo en una pestaña nueva."
    },

    notes: {
      title: "Notas sobre el documento",
      items: [
        {
          title: "Audiovisuales",
          text: "El resumen indica 5 salas; el detalle documenta Sala 611 y salas 612, 613 y 619. No se creó una quinta sala."
        },
        {
          title: "HyFlex 2",
          text: "La ficha indica 25 personas y la tabla de recomendaciones menciona hasta 28 personas. Se conservan ambos datos."
        },
        {
          title: "Recorrido de HyFlex 2",
          text: "El enlace identificado termina en /618/, aunque la tarjeta corresponde a HyFlex 2. No se modificó la URL."
        },
        {
          title: "Fotografías",
          text: "No se identificaron fotografías específicas de HyFlex 2, del Auditorio Intermedio ni de tipologías individuales de informática. Las fotos generales se presentan como referencia."
        },
        {
          title: "SI-D",
          text: "El documento no especifica la cantidad de computadores de las dos salas SI-D."
        }
      ]
    },

    footer: {
      university: "Universidad Cooperativa de Colombia",
      location: "Seccional Bucaramanga",
      area: "Gestión Tecnológica",
      project: "Espacios que conectan",
      closing: "El espacio también hace parte de la experiencia."
    }
  };
})();
