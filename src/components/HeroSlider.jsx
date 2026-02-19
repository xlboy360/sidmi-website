import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWizard } from '../contexts/WizardContext';

const HeroSlider = () => {
    const { openWizard } = useWizard();
    const [currentSlide, setCurrentSlide] = useState(0);
    const baseUrl = import.meta.env.BASE_URL;
    const slides = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
            title: 'Servicios Integrales de Mantenimiento e Instalaciones',
            subtitle: 'Más de 25 años de experiencia en el mercado mexicano',
        },
        {
            id: 2,
            image: `${baseUrl}assets/images/airInjection/1.jpeg`,
            title: 'Instalaciones de Climatización y Refrigeración',
            subtitle: 'Tecnología de vanguardia para tu confort',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80',
            title: 'Mantenimiento Preventivo y Correctivo',
            subtitle: 'Servicio profesional 24/7 para tu tranquilidad',
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Handle keyboard navigation
    const handleKeyDown = (e, action) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            action();
        }
    };

    return (
        <section
            id="home"
            className="relative h-screen w-full overflow-hidden"
            aria-label="Hero slider"
        >
            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                        role="img"
                        aria-label={slides[currentSlide].title}
                    />

                    {/* Dark Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

                    {/* Content */}
                    <div className="relative h-full flex items-center">
                        <div className="container mx-auto px-4">
                            <div className="max-w-3xl">
                                {/* Title with dark background and strong shadow */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-block bg-black/70 px-8 py-4 rounded-xl mb-6 backdrop-blur-sm"
                                >
                                    <h1
                                        className="text-4xl md:text-6xl font-bold text-white"
                                        style={{ textShadow: '3px 3px 8px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 0, 0, 0.6)' }}
                                    >
                                        {slides[currentSlide].title}
                                    </h1>
                                </motion.div>

                                {/* Subtitle with dark background and shadow */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="inline-block bg-black/60 px-6 py-3 rounded-lg mb-8 backdrop-blur-sm"
                                >
                                    <p
                                        className="text-xl md:text-2xl text-white"
                                        style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.5)' }}
                                    >
                                        {slides[currentSlide].subtitle}
                                    </p>
                                </motion.div>

                                <motion.button
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    onClick={openWizard}
                                    className="bg-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-dark transition-all transform hover:scale-105 cursor-pointer"
                                >
                                    Cotización Gratuita
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                onKeyDown={(e) => handleKeyDown(e, prevSlide)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-gold text-white p-3 rounded-full transition-all z-10 cursor-pointer"
                aria-label="Diapositiva anterior"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={nextSlide}
                onKeyDown={(e) => handleKeyDown(e, nextSlide)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-gold text-white p-3 rounded-full transition-all z-10 cursor-pointer"
                aria-label="Siguiente diapositiva"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        onKeyDown={(e) => handleKeyDown(e, () => goToSlide(index))}
                        className={`w-3 h-3 rounded-full transition-all cursor-pointer ${currentSlide === index
                            ? 'bg-gold w-8'
                            : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Ir a diapositiva ${index + 1}`}
                        aria-current={currentSlide === index}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;
