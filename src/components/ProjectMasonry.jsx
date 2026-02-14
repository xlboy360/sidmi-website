import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Image categories with their respective folders
const imageCategories = [
    {
        id: 'extraction',
        title: 'Extracción',
        folder: 'extraction',
        imageCount: 5
    },
    {
        id: 'airInjection',
        title: 'Inyección de aire',
        folder: 'airInjection',
        imageCount: 16
    },
    {
        id: 'fridgeCameras',
        title: 'Cámaras de refrigeración',
        folder: 'fridgeCameras',
        imageCount: 6
    },
    {
        id: 'extractionBells',
        title: 'Campanas de extracción',
        folder: 'extractionBells',
        imageCount: 4
    }
];

const ProjectMasonry = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const baseUrl = import.meta.env.BASE_URL;

    // Generate image paths for a category
    const getImagesForCategory = (folder, count) => {
        return Array.from({ length: count }, (_, i) => ({
            id: `${folder}-${i + 1}`,
            src: `${baseUrl}assets/images/${folder}/${i + 1}.jpeg`,
            alt: `${folder} ${i + 1}`
        }));
    };

    return (
        <section id="projects" className="py-20 bg-cream">
            <div className="container mx-auto px-4">

                {/* Category Sections */}
                {imageCategories.map((category) => {
                    const images = getImagesForCategory(category.folder, category.imageCount);

                    return (
                        <div key={category.id} className="mb-16 last:mb-0">
                            {/* Category Subheader */}
                            <h3 className="text-3xl font-bold text-dark-text mb-8 text-center">
                                {category.title}
                            </h3>

                            {/* Masonry Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
                                {images.map((image, index) => (
                                    <article
                                        key={image.id}
                                        className={`group relative overflow-hidden rounded-lg cursor-pointer ${index % 5 === 0 ? 'row-span-2' : 'row-span-1'
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
                                        aria-label={`View ${image.alt} image`}
                                    >
                                        {/* Image */}
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-md bg-black/30"
                        onClick={() => setSelectedImage(null)}
                        role="dialog"
                        aria-modal="true"
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            onClick={() => setSelectedImage(null)}
                            className="mb-4 bg-steel-blue text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all hover:cursor-pointer shadow-lg"
                        >
                            Cerrar
                        </motion.button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="bg-beige rounded-lg max-w-4xl w-full p-6 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="w-full max-h-[70vh] object-contain rounded-lg"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectMasonry;
