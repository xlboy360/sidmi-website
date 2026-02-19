import { allServices } from '../data/services';
import { Wrench, Zap, Wind, Snowflake, Fan, Cog, Package, Droplets, Sparkles, Thermometer } from 'lucide-react';
import { useWizard } from '../contexts/WizardContext';

// Icon mapping
const iconMap = {
    Wrench,
    Zap,
    Wind,
    Snowflake,
    Fan,
    Cog,
    Package,
    Droplets,
    Sparkles,
    Thermometer,
};

const ServiciosPage = () => {
    const { openWizard } = useWizard();

    return (
        <main id="main-content" className="pt-20">
            {/* Header */}
            <section className="py-16 bg-gradient-to-r from-oxford-grey to-graphite">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold text-dark-text mb-6">
                            Nuestros Servicios
                        </h1>
                        <p className="text-xl text-medium-text leading-relaxed">
                            Servicios Integrales de Mantenimiento e Instalaciones cuenta con personal altamente capacitado para la asesoría y servicio profesional en todas las áreas de climatización, refrigeración y mantenimiento.
                        </p>
                    </div>
                </div>
            </section>

            {/* All Services Grid */}
            <section className="py-20 bg-cream">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allServices.map((service) => {
                            const Icon = iconMap[service.icon] || Wrench;

                            return (
                                <article
                                    key={service.id}
                                    className="bg-beige p-8 rounded-lg border-2 border-transparent hover:border-gold transition-all duration-300 transform hover:scale-105 group"
                                >
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="w-20 h-20 bg-gold bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                                            <Icon className="text-white" size={40} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-dark-text mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-medium-text leading-relaxed mb-4">
                                        {service.description}
                                    </p>
                                    {service.fullDescription && (
                                        <p className="text-medium-text text-sm leading-relaxed">
                                            {service.fullDescription}
                                        </p>
                                    )}
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-b from-beige to-gold-light">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center bg-cream p-12 rounded-lg border-2 border-gold">
                        <h2 className="text-3xl font-bold text-dark-text mb-4">
                            ¿Necesitas un servicio personalizado?
                        </h2>
                        <p className="text-lg text-medium-text mb-8">
                            Contáctanos para una asesoría profesional y cotización sin compromiso
                        </p>
                        <button
                            onClick={openWizard}
                            className="bg-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-dark transition-all transform hover:scale-105 cursor-pointer"
                        >
                            Solicitar Cotización
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ServiciosPage;
