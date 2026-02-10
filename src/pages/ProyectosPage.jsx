import ProjectMasonry from '../components/ProjectMasonry';
import { clients } from '../data/clients';

const ProyectosPage = () => {
    return (
        <main id="main-content" className="pt-20">
            {/* Header */}
            <section className="py-16 bg-gradient-to-r from-oxford-grey to-graphite">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold text-dark-text mb-6">
                            Nuestros Proyectos
                        </h1>
                        <p className="text-xl text-medium-text leading-relaxed">
                            Explora nuestro portafolio de proyectos de construcción, instalación y mantenimiento completados con éxito
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Gallery */}
            <ProjectMasonry />

            {/* Clients Section */}
            <section className="py-20 bg-gradient-to-b from-beige to-gold-light">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Title */}
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-dark-text mb-4">
                                Nuestros Clientes
                            </h2>
                            <p className="text-lg text-medium-text">
                                Empresas que confían en nuestros servicios
                            </p>
                        </div>

                        {/* Clients Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {clients.map((client) => (
                                <div
                                    key={client.id}
                                    className="flex items-center justify-center p-6 bg-white rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                                    style={{
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                    }}
                                >
                                    <img
                                        src={client.logo}
                                        alt={`Logo de ${client.name}`}
                                        className="w-full h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProyectosPage;
