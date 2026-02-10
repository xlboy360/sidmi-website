// Wizard data structure for dynamic multi-path questionnaire

export const wizardData = {
    instalacion: {
        name: 'Instalación',
        subcategories: [
            {
                id: 'ducteria',
                name: 'Ductería',
                options: [
                    {
                        id: 'extraccion',
                        name: 'Extracción',
                        suboptions: [
                            {
                                id: 'hogar',
                                name: 'Hogar',
                                items: ['Restaurantes', 'Oficinas', 'Industrial']
                            },
                            {
                                id: 'restaurantes',
                                name: 'Restaurantes',
                                items: ['Hogar', 'Oficinas', 'Industrial']
                            },
                            {
                                id: 'oficinas',
                                name: 'Oficinas',
                                items: ['Hogar', 'Restaurantes', 'Industrial']
                            },
                            {
                                id: 'industrial',
                                name: 'Industrial',
                                items: ['Hogar', 'Restaurantes', 'Oficinas']
                            }
                        ]
                    },
                    {
                        id: 'ventilacion',
                        name: 'Ventilación',
                        suboptions: [
                            {
                                id: 'hogar',
                                name: 'Hogar',
                                items: ['Restaurantes', 'Oficinas', 'Industrial']
                            },
                            {
                                id: 'restaurantes',
                                name: 'Restaurantes',
                                items: ['Hogar', 'Oficinas', 'Industrial']
                            },
                            {
                                id: 'oficinas',
                                name: 'Oficinas',
                                items: ['Hogar', 'Restaurantes', 'Industrial']
                            },
                            {
                                id: 'industrial',
                                name: 'Industrial',
                                items: ['Hogar', 'Restaurantes', 'Oficinas']
                            }
                        ]
                    }
                ]
            },
            {
                id: 'climatizacion',
                name: 'Equipo de climatización',
                options: [
                    {
                        id: 'hogar',
                        name: 'Hogar',
                        items: ['Restaurantes', 'Oficinas', 'Industrial']
                    },
                    {
                        id: 'restaurantes',
                        name: 'Restaurantes',
                        items: ['Hogar', 'Oficinas', 'Industrial']
                    },
                    {
                        id: 'oficinas',
                        name: 'Oficinas',
                        items: ['Hogar', 'Restaurantes', 'Industrial']
                    },
                    {
                        id: 'industrial',
                        name: 'Industrial',
                        items: ['Hogar', 'Restaurantes', 'Oficinas']
                    }
                ]
            },
            {
                id: 'extraccion-equipos',
                name: 'Equipos de extracción',
                options: [
                    {
                        id: 'axiales',
                        name: 'Axiales',
                        description: 'Ideales para uso residencial, diseñados para mover volúmenes de aire con baja resistencia comunes en baños y conductos cortos'
                    },
                    {
                        id: 'centrifugos',
                        name: 'Centrífugos',
                        description: 'Diseñados para vencer altas resistencias, para conductos largos y cocinas industriales.'
                    }
                ]
            },
            {
                id: 'campanas',
                name: 'Campanas de extracción',
                directToForm: true
            },
            {
                id: 'electromecanicos',
                name: 'Equipos electromecánicos',
                options: [
                    {
                        id: 'motores',
                        name: 'Motores'
                    },
                    {
                        id: 'bombas-agua',
                        name: 'Bombas de agua'
                    },
                    {
                        id: 'bombeo',
                        name: 'Sistemas de bombeo'
                    },
                    {
                        id: 'tablero',
                        name: 'Tablero de automatización'
                    },
                    {
                        id: 'hidroneumatico',
                        name: 'Equipo hidroneumático'
                    }
                ]
            },
            {
                id: 'conservacion',
                name: 'Cámaras de conservación',
                options: [
                    {
                        id: 'quimica',
                        name: 'Química'
                    },
                    {
                        id: 'alimentaria',
                        name: 'Alimentaria'
                    },
                    {
                        id: 'farmaceutica',
                        name: 'Farmacéutica'
                    }
                ]
            }
        ]
    },
    mantenimiento: {
        name: 'Mantenimiento',
        subcategories: [
            {
                id: 'ducteria',
                name: 'Ductería',
                options: [
                    {
                        id: 'extraccion',
                        name: 'Extracción'
                    },
                    {
                        id: 'ventilacion',
                        name: 'Ventilación'
                    }
                ]
            },
            {
                id: 'climatizacion',
                name: 'Equipo de climatización',
                options: [
                    {
                        id: '1-3',
                        name: 'DE 1 a 3'
                    },
                    {
                        id: '4-6',
                        name: 'DE 4 a 6'
                    },
                    {
                        id: 'mas-6',
                        name: 'MÁS DE 6'
                    }
                ]
            },
            {
                id: 'extraccion-equipos',
                name: 'Equipos de extracción',
                options: [
                    {
                        id: 'axiales',
                        name: 'Axiales'
                    },
                    {
                        id: 'centrifugos',
                        name: 'Centrífugos'
                    }
                ]
            },
            {
                id: 'campanas',
                name: 'Campanas de extracción',
                directToForm: true
            },
            {
                id: 'integral',
                name: 'Mantenimiento integral',
                options: [
                    {
                        id: 'pintura',
                        name: 'Pintura'
                    },
                    {
                        id: 'plomeria',
                        name: 'Plomería'
                    },
                    {
                        id: 'canceleria',
                        name: 'Cancelería'
                    },
                    {
                        id: 'tablaroca',
                        name: 'Tablaroca'
                    },
                    {
                        id: 'carpinteria',
                        name: 'Carpintería'
                    },
                    {
                        id: 'impermeabilizacion',
                        name: 'Impermeabilización'
                    }
                ]
            },
            {
                id: 'electromecanicos',
                name: 'Equipos electromecánicos',
                options: [
                    {
                        id: 'bombas-agua',
                        name: 'Bombas de agua'
                    },
                    {
                        id: 'hidroneumatico',
                        name: 'Equipo hidroneumático'
                    },
                    {
                        id: 'sumergibles',
                        name: 'Bombas sumergibles'
                    },
                    {
                        id: 'carcamo',
                        name: 'Cárcamo'
                    }
                ]
            }
        ]
    },
    servicios: {
        name: 'Servicios',
        options: [
            {
                id: 'limpieza-ductos',
                name: 'Limpieza y sanitización de ductos',
                directToForm: true
            },
            {
                id: 'limpieza-camara',
                name: 'Limpieza y sanitización de cámara plena',
                directToForm: true
            }
        ]
    },
    otros: {
        name: 'Otros',
        options: [
            {
                id: 'venta-climatizacion',
                name: 'Venta de equipos de climatización',
                directToForm: true
            },
            {
                id: 'venta-extraccion',
                name: 'Venta de equipos de extracción',
                directToForm: true
            },
            {
                id: 'venta-campanas',
                name: 'Venta de campanas de extracción',
                directToForm: true
            },
            {
                id: 'hablar-especialista',
                name: 'Hablar con un especialista',
                directToForm: true
            }
        ]
    }
};
