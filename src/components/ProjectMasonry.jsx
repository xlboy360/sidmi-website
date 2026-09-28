import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

// Image categories with their respective folders
const imageCategories = [
    {
        id: 'extraction',
        title: 'Sistemas de Extracción y Ventilación',
        folder: 'extraction',
        imageCount: 5
    },
    {
        id: 'airInjection',
        title: 'Inyección de Aire y Climatización',
        folder: 'airInjection',
        imageCount: 16
    },
    {
        id: 'fridgeCameras',
        title: 'Cámaras Frigoríficas de Refrigeración',
        folder: 'fridgeCameras',
        imageCount: 6
    },
    {
        id: 'extractionBells',
        title: 'Campanas Industriales de Extracción',
        folder: 'extractionBells',
        imageCount: 4
    },
    {
        id: 'ductCleaning',
        title: 'Limpieza y Sanitización de Ductos',
        folder: 'ductCleaning',
        imageCount: 10
    }
];

const ProjectMasonry = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const baseUrl = import.meta.env.BASE_URL;

    // Generate image paths for a category
    const getImagesForCategory = (category) => {
        return Array.from({ length: category.imageCount }, (_, i) => ({
            id: `${category.folder}-${i + 1}`,
            src: `${baseUrl}assets/images/${category.folder}/${i + 1}.jpeg`,
            alt: `Obra de ${category.title} realizada por S.I.D.M.I. - Imagen ${i + 1}`
        }));
    };

    return (
        <section id="projects" className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Category Sections */}
                {imageCategories.map((category) => {
                    const images = getImagesForCategory(category);

                    return (
                        <div key={category.id} className="mb-20 last:mb-0">
                            {/* Category Subheader */}
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-2.5 h-8 bg-gold rounded-full" />
                                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                                    {category.title}
                                </h2>
                            </div>

                            {/* Masonry Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto">
                                {images.map((image, index) => (
                                    <article
                                        key={image.id}
                                        className={`group relative overflow-hidden rounded-xl cursor-pointer shadow-sm bg-slate-900 ${index % 5 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                                            }`}
                                        onClick={() => setSelectedImage(image)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                setSelectedImage(image);
                                            }
                                        }}
                                        tabIndex={0}
                                        role="button"
                                        aria-label={`Ver imagen ampliada de ${image.alt}`}
                                    >
                                        {/* Image */}
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            loading="lazy"
                                            className="w-full h-full object-cover min-h-[220px] transition-transform duration-500 group-hover:scale-105 opacity-95 group-hover:opacity-100"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="p-3 bg-white/90 text-slate-900 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                                <ZoomIn size={22} />
                                            </span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Modal for selected image */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-md bg-slate-950/80"
                        onClick={() => setSelectedImage(null)}
                        role="dialog"
                        aria-modal="true"
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            onClick={() => setSelectedImage(null)}
                            className="mb-4 bg-white/10 hover:bg-white text-white hover:text-slate-900 px-5 py-2 rounded-full transition-all cursor-pointer shadow-lg flex items-center gap-2 text-sm font-semibold border border-white/20"
                        >
                            <X size={18} />
                            Cerrar Vista
                        </motion.button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="bg-white rounded-2xl max-w-4xl w-full p-3 shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="w-full max-h-[75vh] object-contain rounded-xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectMasonry;
