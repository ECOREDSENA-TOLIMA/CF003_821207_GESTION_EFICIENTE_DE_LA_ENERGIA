export default {
  global: {
    componenteFormativo: 'Principios de medidas eléctricas',
    descripcionCurso:
      'Este componente se relaciona con la medición que hace parte de las actividades de la vida, en especial hoy donde es normal usar dispositivos electrónicos que miden las pulsaciones y la distancia recorrida. También se hace imprescindible para controlar los procesos y obtener datos para la toma de decisiones; medir parámetros eléctricos permitirá adentrarse en el mundo de la medición.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Instrumentos de medida',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Exactitud y precisión',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clase de precisión, <i>burden</i> y error',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Calibración de instrumentos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de instrumentos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Medida de potencia trifásica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Instrumentos trifásicos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Diagramas de conexión',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_003.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.3 Calibración de instrumentos.',
      referencia:
        'Técnicas de control metrológico S.L. (2021). <em>Certificado de calibración</em>',
      tipo: 'Página web',
      link:
        'https://www.tcmetrologia.com/blog/interpretacion-y-modelo-de-certificado-de-calibracion/',
    },
    {
      tema: '1.3 Calibración de instrumentos.',
      referencia:
        'Organismo Nacional de Acreditación de Colombia - ONAC. (2021). <em>Acreditación laboratorio de calibración y mediciones industriales</em> SENA.',
      tipo:
        'Acreditación laboratorio de Calibración y Mediciones Industriales SENA',
      link: 'https://onac.org.co/certificados/16-LAC-016.pdf',
    },
  ],
  glosario: [
    {
      termino: '<em>Burden</em>',
      significado:
        'Carga impuesta a un instrumento de medida eléctrico o electrónico en la entrada del circuito a medir, su unidad de medida es el voltio-amperio (VA).',
    },
    {
      termino: 'CT',
      significado:
        'Transformador de corriente (siglas en inglés de <em>Current Transformer</em>).',
    },
    {
      termino: 'ONAC',
      significado: 'Organismo Nacional de Acreditación de Colombia.',
    },
    {
      termino: 'PT',
      significado:
        'Transformador de potencial (siglas en inglés de <em>Potential Transformer</em>).',
    },
    {
      termino: '<em>True RMS</em>',
      significado: 'Valor eficaz verdadero de las ondas en corriente alterna.',
    },
  ],
  referencias: [
    {
      referencia:
        'Organismo Nacional de Acreditación de Colombia - ONAC. (2021). <em>Acreditación laboratorio de calibración y mediciones industriales</em> SENA.',
      link: 'https://onac.org.co/certificados/16-LAC-016.pdf',
    },
    {
      referencia:
        'Purkait, P., Biswas, B., Das, S., y Koley, C. (2013). <em>Electrical and Electronics Measurements and Instrumentation.</em> McGraw Hill Education (India).',
    },
    {
      referencia:
        'Técnicas de control metrológico. (2021). <em>Certificado de calibración.</em>',
      link:
        'https://www.tcmetrologia.com/blog/interpretacion-y-modelo-de-certificado-de-calibracion/ ',
    },
    {
      referencia:
        'Villalobos, O., G. (2006). <em>Medición y control de procesos industriales.</em> Instituto Politécnico Nacional.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Javier González Cuevas',
          cargo: 'Experto Técnico',
          centro:
            'Regional Distrito Capital - Centro Electricidad Electrónica y Telecomunicaciones',
        },
        {
          nombre: 'Marlon Augusto Villamizar Morales',
          cargo: 'Experto Técnico',
          centro: 'Global Green Growth Institute (GGGI)',
        },
        {
          nombre: 'Cristian Metaute Medina',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica del SENA',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de Estilo',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica del SENA',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suarez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
