import { useState } from 'react';
import ProjectMasonry from '../components/ProjectMasonry';
import { clients } from '../data/clients';
import SEO from '../components/SEO';

const ProyectosPage = () => {
    const [activeClientId, setActiveClientId] = useState(null);

    const handleClientClick = (id) => {
        setActiveClientId((prev) => (prev === id ? null : id));
    };

    return (
        <main id="main-content" className="pt-20 bg-slate-50">
            <SEO
                title="Portafolio de Proyectos y Obras Realizadas"
                description="Conoce nuestros proyectos ejecutados de cuartos fríos, sistemas de extracción en cocinas industriales, ductos de aire y climatización en México."
                canonical="/proyectos"
            />
            {/* Header */}
            <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-gold font-bold text-xs uppercase tracking-widest block mb-3">
                            Evidencia Fotográfica
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                            Portafolio de Proyectos y Obras
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                            Conoce algunos de nuestros trabajos en cámaras frigoríficas, ductería galvanizada, extracción e inyección de aire en campo.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Gallery */}
            <ProjectMasonry />

            {/* Clients Section */}
            <section className="py-20 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Title */}
                        <div className="text-center mb-14">
                            <span className="text-gold font-bold text-xs uppercase tracking-wider block mb-2">
                                Trayectoria y Respaldo
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                                Clientes que Avalan Nuestra Calidad
                            </h2>
                            <p className="text-slate-600 text-base max-w-xl mx-auto">
                                Empresas corporativas e instituciones que han depositado su confianza en las soluciones de S.I.D.M.I.
                            </p>
                        </div>

                        {/* Clients Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {clients.map((client) => {
                                const isActive = activeClientId === client.id;
                                return (
                                    <div
                                        key={client.id}
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => handleClientClick(client.id)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                handleClientClick(client.id);
                                            }
                                        }}
                                        aria-pressed={isActive}
                                        aria-label={`Cliente ${client.name}`}
                                        className={`flex items-center justify-center p-6 rounded-xl transition-all duration-300 cursor-pointer select-none group border ${
                                            isActive
                                                ? 'scale-105 bg-white shadow-xl border-amber-400 ring-2 ring-amber-400/20'
                                                : 'bg-slate-50 border-slate-200 hover:scale-105 hover:bg-white hover:shadow-lg active:scale-105 active:bg-white active:shadow-lg'
                                        }`}
                                    >
                                        <img
                                            src={client.logo}
                                            alt={`Logo de ${client.name}`}
                                            className={`w-full h-16 object-contain transition-all duration-300 ${
                                                isActive
                                                    ? 'grayscale-0 opacity-100'
                                                    : 'grayscale group-hover:grayscale-0 group-active:grayscale-0 opacity-80 group-hover:opacity-100'
                                            }`}
                                            loading="lazy"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProyectosPage;
