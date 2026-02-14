import { Wrench, Zap, HardHat, Wind, Paintbrush, AlertCircle } from 'lucide-react';
import { services } from '../data/services';

// Icon mapping
const iconMap = {
    Wrench,
    Zap,
    HardHat,
    Wind,
    Paintbrush,
    AlertCircle,
};

const ServicesGrid = () => {
    return (
        <section id="services" className="py-20 bg-cream">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-dark-text mb-4">
                        Nuestros Servicios
                    </h2>
                    <p className="text-lg text-medium-text max-w-2xl mx-auto">
                        Soluciones profesionales de construcción y mantenimiento adaptadas a tus necesidades
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => {
                        const Icon = iconMap[service.icon];

                        return (
                            <article
                                key={service.id}
                                className="bg-graphite p-6 rounded-lg border-2 border-transparent hover:border-gold transition-all duration-300 transform hover:scale-105 group"
                            >
                                {/* Icon */}
                                <div className="mb-4">
                                    <div className="w-16 h-16 bg-steel-blue bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                                        <Icon className="text-white" size={32} />
                                    </div>
                                </div>

                                {/* Content */}
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
            </div>
        </section>
    );
};

export default ServicesGrid;
