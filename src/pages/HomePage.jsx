import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroSlider from '../components/HeroSlider';
import { services } from '../data/services';
import { faqs } from '../data/faq';
import { homepageProjects } from '../data/projects';
import { companyInfo } from '../data/companyInfo';
import { clients } from '../data/clients';
import { useWizard } from '../contexts/WizardContext';
import { Wrench, Zap, Wind, Snowflake, Fan, Cog, ArrowRight, ShieldCheck, Clock, Award, Phone } from 'lucide-react';

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
    const { openWizard } = useWizard();

    // Featured clients for homepage (top brands)
    const featuredClients = clients.slice(0, 10);

    return (
        <main id="main-content" className="bg-beige">
            <SEO
                title="Climatización, Refrigeración y Mantenimiento Industrial"
                description="Más de 25 años de experiencia en instalación y mantenimiento de aire acondicionado, refrigeración comercial, ductería e ingeniería electromecánica en México."
                canonical="/"
            />
            {/* Hero Section with authentic project photos */}
            <HeroSlider />

            {/* Social Proof - Client Logos Bar */}
            <section className="py-12 bg-white border-y border-slate-200">
                <div className="container mx-auto px-4">
                    <p className="text-center text-xs uppercase tracking-widest font-bold text-slate-500 mb-8">
                        Empresas e instituciones que confían en S.I.D.M.I.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
                        {featuredClients.map((client) => (
                            <div
                                key={client.id}
                                className="w-full h-16 p-3 flex items-center justify-center filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                title={client.name}
                            >
                                <img
                                    src={client.logo}
                                    alt={`Logo de ${client.name}`}
                                    className="max-h-12 max-w-full object-contain"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proposition / 3 Pillars */}
            <section className="py-16 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                            <div className="p-3 bg-amber-50 text-gold rounded-xl">
                                <Award size={28} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg mb-1">
                                    +25 Años de Experiencia
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Especialistas técnicos respaldados por trayectoria comprobada en proyectos de alta complejidad.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                            <div className="p-3 bg-blue-50 text-sky-600 rounded-xl">
                                <ShieldCheck size={28} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg mb-1">
                                    Garantía y Calidad Certificada
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Materiales de primera calidad, lámina galvanizada de alto calibre y normativas vigentes.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                                <Clock size={28} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg mb-1">
                                    Respuesta y Asistencia Técnica
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Planes de mantenimiento preventivo y atención inmediata para reducir paros operativos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nosotros Preview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-gold font-bold text-sm tracking-wider uppercase mb-3 block">
                            Trayectoria Industrial
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                            Líderes en Soluciones de Mantenimiento e Instalaciones
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                            {companyInfo.about.description}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/nosotros"
                                className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-md hover:scale-105"
                            >
                                Conocer Nuestra Empresa
                                <ArrowRight size={18} />
                            </Link>
                            <button
                                onClick={openWizard}
                                className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-gold-dark transition-all shadow-md hover:scale-105 cursor-pointer"
                            >
                                Solicitar Cotización
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Servicios Preview */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold text-sm tracking-wider uppercase mb-2 block">
                            Capacidades Técnicas
                        </span>
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                            Servicios Profesionales Especializados
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Ingeniería, instalación y mantenimiento adaptados al sector industrial, comercial y corporativo
                        </p>
                    </div>

                    {/* Show first 6 services */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {services.slice(0, 6).map((service) => {
                            const Icon = iconMap[service.icon] || Wrench;

                            return (
                                <article
                                    key={service.id}
                                    className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-gold transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="w-16 h-16 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-all">
                                            <Icon className="text-gold group-hover:text-white transition-colors" size={32} />
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-gold transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm mb-6">
                                            {service.description}
                                        </p>
                                    </div>

                                    <Link
                                        to="/servicios"
                                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-dark mt-auto"
                                    >
                                        Detalles del servicio
                                        <ArrowRight size={16} />
                                    </Link>
                                </article>
                            );
                        })}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/servicios"
                            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-md"
                        >
                            Ver Catálogo Completo de Servicios
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Proyectos Preview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold text-sm tracking-wider uppercase mb-2 block">
                            Galería de Obras
                        </span>
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                            Proyectos Recientes en Campo
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Fotografías directas de instalaciones de refrigeración, ductería y climatización completadas con éxito
                        </p>
                    </div>

                    {/* Show first 4 projects */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {homepageProjects.slice(0, 4).map((project) => (
                            <div
                                key={project.id}
                                className="group relative overflow-hidden rounded-xl aspect-square shadow-md bg-slate-900"
                            >
                                <img
                                    src={`${baseUrl}${project.imageUrl}`}
                                    alt={`${project.title} - ${project.category} por S.I.D.M.I.`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent flex items-end p-5">
                                    <div>
                                        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gold text-white mb-2">
                                            {project.category}
                                        </span>
                                        <h3 className="text-white font-bold text-base leading-snug">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/proyectos"
                            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-md"
                        >
                            Explorar Portafolio Completo
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-y border-slate-700">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            ¿Requieres Asesoría Técnica o una Cotización para tu Empresa?
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            Nuestro equipo de ingenieros y especialistas está listo para diseñar el plan de instalación o mantenimiento ideal para tus instalaciones.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 items-center">
                            <button
                                onClick={openWizard}
                                className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl hover:scale-105 cursor-pointer text-base"
                            >
                                Iniciar Cotización en Línea
                            </button>
                            <a
                                href={`tel:${companyInfo.contact.phone.mobile1.replace(/\s/g, '')}`}
                                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-xl font-semibold border border-white/20 transition-all"
                            >
                                <Phone size={18} />
                                Llamar: {companyInfo.contact.phone.mobile1}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold text-sm tracking-wider uppercase mb-2 block">
                            Dudas Comunes
                        </span>
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                            Preguntas Frecuentes
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Respuestas claras sobre tiempos de respuesta, coberturas y contratos de mantenimiento
                        </p>
                    </div>

                    {/* Show first 3 FAQs */}
                    <div className="max-w-3xl mx-auto space-y-4 mb-10">
                        {faqs.slice(0, 3).map((faq) => (
                            <div
                                key={faq.id}
                                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-gold transition-all"
                            >
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    {faq.question}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/faq"
                            className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-800 hover:text-gold hover:border-gold px-8 py-3.5 rounded-lg font-semibold transition-all shadow-sm"
                        >
                            Ver Todas las Preguntas
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
