// Real S.I.D.M.I. services data

export const services = [
    {
        id: 1,
        title: 'Aire Acondicionado y Climatización',
        description: 'Instalación profesional de sistemas de aire acondicionado, calefacción y ventilación para espacios residenciales, comerciales e industriales.',
        icon: 'Wind',
        fullDescription: 'Contamos con personal altamente capacitado para la instalación y mantenimiento de sistemas de climatización. Incluye instalación de generadores de agua helada tipo Chiller y sistemas de aire lavado.',
    },
    {
        id: 2,
        title: 'Refrigeración Industrial y Comercial',
        description: 'Instalación y mantenimiento de sistemas de refrigeración para procesos de conservación y congelación de productos.',
        icon: 'Snowflake',
        fullDescription: 'Especialistas en refrigeración de cámaras frigoríficas, procesos de conservación y congelación de productos. Servicio para industria alimentaria, química y farmacéutica.',
    },
    {
        id: 3,
        title: 'Sistemas de Extracción y Ventilación',
        description: 'Fabricación, instalación y limpieza de ductos galvanizados. Sistemas de control de humos y extracción de áreas de fumadores.',
        icon: 'Fan',
        fullDescription: 'Diseño y fabricación de ductos en lámina galvanizada, sistemas de control de humos, ventilación y extracción de área de fumadores. Incluye limpieza y sanitización de ductos.',
    },
    {
        id: 4,
        title: 'Instalaciones Eléctricas',
        description: 'Instalación eléctrica profesional, automatización y sistemas de control para proyectos industriales y comerciales.',
        icon: 'Zap',
        fullDescription: 'Instalación de sistemas eléctricos completos, automatización, controles y tableros de automatización para optimizar el funcionamiento de sus equipos.',
    },
    {
        id: 5,
        title: 'Equipos Electromecánicos',
        description: 'Instalación y mantenimiento de motores, bombas de agua, sistemas de bombeo y equipos hidroneumáticos.',
        icon: 'Cog',
        fullDescription: 'Servicio especializado en equipos electromecánicos: motores, bombas de agua, sistemas de bombeo, tableros de automatización y equipos hidroneumáticos.',
    },
    {
        id: 6,
        title: 'Mantenimiento Preventivo y Correctivo',
        description: 'Contratos de servicio de mantenimiento preventivo y correctivo para unidades de aire acondicionado, refrigeración y equipos electromecánicos.',
        icon: 'Wrench',
        fullDescription: 'Planes de mantenimiento preventivo y correctivo diseñados para maximizar la vida útil de sus equipos y minimizar tiempos de inactividad. Servicio 24/7 disponible.',
    },
];

// Additional services for full page
export const additionalServices = [
    {
        id: 7,
        title: 'Cámaras de Conservación',
        description: 'Instalación de cámaras frigoríficas para industria química, alimentaria y farmacéutica.',
        icon: 'Package',
    },
    {
        id: 8,
        title: 'Sistemas de Aire Lavado',
        description: 'Instalación y mantenimiento de sistemas de aire lavado y aire acondicionado especializado.',
        icon: 'Droplets',
    },
    {
        id: 9,
        title: 'Control de Humos',
        description: 'Sistemas profesionales de control y extracción de humos para cocinas industriales y comerciales.',
        icon: 'Wind',
    },
    {
        id: 10,
        title: 'Limpieza de Ductos',
        description: 'Servicio especializado de limpieza y sanitización de ductos galvanizados y cámaras plenas.',
        icon: 'Sparkles',
    },
    {
        id: 11,
        title: 'Generadores Tipo Chiller',
        description: 'Instalación de generadores de agua helada tipo Chiller para grandes instalaciones.',
        icon: 'Thermometer',
    },
    {
        id: 12,
        title: 'Plantas de Luz',
        description: 'Instalación y mantenimiento de plantas de luz para respaldo energético.',
        icon: 'Zap',
    },
];

export const allServices = [...services, ...additionalServices];
