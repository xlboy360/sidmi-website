import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import { services } from '../data/services';
import { faqs } from '../data/faq';
import { homepageProjects } from '../data/projects';
import { companyInfo } from '../data/companyInfo';
import { Wrench, Zap, Wind, Snowflake, Fan, Cog, ArrowRight } from 'lucide-react';

// Icon mapping
const iconMap = {
    Wrench,
    Zap,
    Wind,
    Snowflake,
    Fan,
    Cog,
};

const HomePage = () => {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <main id="main-content">
            {/* Hero Section */}
            <HeroSlider />

            {/* Nosotros Preview */}
            <section className="py-16 bg-cream">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-dark-text mb-6">
                            {companyInfo.about.yearsOfExperience} Años de Experiencia
                        </h2>
                        <p className="text-lg text-medium-text mb-8 leading-relaxed">
                            {companyInfo.about.description}
                        </p>
                        <Link
                            to="/nosotros"
                            className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-dark transition-all transform hover:scale-105"
                        >
                            Conocer más sobre nosotros
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Servicios Preview */}
            <section className="py-20 bg-beige">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-dark-text mb-4">
                            Nuestros Servicios
                        </h2>
                        <p className="text-lg text-medium-text max-w-2xl mx-auto">
                            Soluciones profesionales de mantenimiento e instalaciones adaptadas a tus necesidades
                        </p>
                    </div>

                    {/* Show first 6 services */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {services.slice(0, 6).map((service) => {
                            const Icon = iconMap[service.icon] || Wrench;

                            return (
                                <article
                                    key={service.id}
                                    className="bg-cream p-6 rounded-lg border-2 border-transparent hover:border-gold transition-all duration-300 transform hover:scale-105 group"
                                >
                                    <div className="mb-4">
                                        <div className="w-16 h-16 bg-gold bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                                            <Icon className="text-white" size={32} />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-dark-text mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-medium-text leading-relaxed">
                                        {service.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/servicios"
                            className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-dark transition-all transform hover:scale-105"
                        >
                            Ver todos los servicios
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Proyectos Preview */}
            <section className="py-20 bg-cream">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-dark-text mb-4">
                            Proyectos Destacados
                        </h2>
                        <p className="text-lg text-medium-text max-w-2xl mx-auto">
                            Conoce algunos de nuestros proyectos de construcción y mantenimiento completados
                        </p>
                    </div>

                    {/* Show first 4 projects */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {homepageProjects.slice(0, 4).map((project) => (
                            <div
                                key={project.id}
                                className="group relative overflow-hidden rounded-lg aspect-square"
                            >
                                <img
                                    src={`${baseUrl}${project.imageUrl}`}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div>
                                        <h3 className="text-white font-bold text-lg">{project.title}</h3>
                                        <p className="text-medium-text text-sm text-white">{project.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/proyectos"
                            className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-dark transition-all transform hover:scale-105"
                        >
                            Ver galería completa
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="py-20 bg-gradient-to-b from-beige to-gold-light">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-dark-text mb-4">
                            Preguntas Frecuentes
                        </h2>
                        <p className="text-lg text-medium-text max-w-2xl mx-auto">
                            Encuentra respuestas a preguntas comunes sobre nuestros servicios
                        </p>
                    </div>

                    {/* Show first 3 FAQs */}
                    <div className="max-w-3xl mx-auto space-y-4 mb-8">
                        {faqs.slice(0, 3).map((faq) => (
                            <div
                                key={faq.id}
                                className="bg-cream rounded-lg p-6 border-2 border-transparent hover:border-gold transition-all"
                            >
                                <h3 className="text-lg font-bold text-dark-text mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-medium-text leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/faq"
                            className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-dark transition-all transform hover:scale-105"
                        >
                            Ver todas las preguntas
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
