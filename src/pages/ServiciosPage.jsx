import { allServices } from '../data/services';
import { Wrench, Zap, Wind, Snowflake, Fan, Cog, Package, Droplets, Sparkles, Thermometer, ArrowRight } from 'lucide-react';
import { useWizard } from '../contexts/WizardContext';
import SEO from '../components/SEO';

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
        <main id="main-content" className="pt-20 bg-slate-50">
            <SEO
                title="Servicios Especializados en Climatización y Refrigeración"
                description="Instalación, mantenimiento y reparación de aire acondicionado comercial, cámaras frigoríficas, ductería galvanizada y sistemas de extracción en México."
                canonical="/servicios"
            />
            {/* Header */}
            <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-gold font-bold text-xs uppercase tracking-widest block mb-3">
                            Catálogo de Soluciones Integrales
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                            Nuestros Servicios Especializados
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                            Personal técnico e ingenieros certificados para la asesoría, suministro, montaje y mantenimiento en climatización, refrigeración y obra electromecánica.
                        </p>
                    </div>
                </div>
            </section>

            {/* All Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allServices.map((service) => {
                            const Icon = iconMap[service.icon] || Wrench;

                            return (
                                <article
                                    key={service.id}
                                    className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-gold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between"
                                >
                                    <div>
                                        {/* Icon */}
                                        <div className="mb-6">
                                            <div className="w-16 h-16 bg-amber-50 group-hover:bg-gold rounded-xl flex items-center justify-center transition-all">
                                                <Icon className="text-gold group-hover:text-white transition-colors" size={32} />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-gold transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed mb-4 text-sm font-medium">
                                            {service.description}
                                        </p>
                                        {service.fullDescription && (
                                            <p className="text-slate-500 text-xs leading-relaxed border-t border-slate-100 pt-3">
                                                {service.fullDescription}
                                            </p>
                                        )}
                                    </div>

                                    <div className="pt-6 mt-6 border-t border-slate-100">
                                        <button
                                            onClick={openWizard}
                                            className="text-xs font-bold text-gold hover:text-gold-dark flex items-center gap-1.5 cursor-pointer"
                                        >
                                            Cotizar este servicio
                                            <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center bg-slate-900 text-white p-10 md:p-14 rounded-2xl shadow-xl">
                        <span className="text-gold font-bold text-xs uppercase tracking-wider block mb-2">
                            Asesoría Especializada
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                            ¿Requieres un Proyecto a la Medida?
                        </h2>
                        <p className="text-base md:text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                            Evaluamos las especificaciones de tu nave, oficinas o planta industrial para ofrecerte la solución más eficiente en costo y energía.
                        </p>
                        <button
                            onClick={openWizard}
                            className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:scale-105 cursor-pointer text-sm"
                        >
                            Solicitar Cotización sin Compromiso
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ServiciosPage;
