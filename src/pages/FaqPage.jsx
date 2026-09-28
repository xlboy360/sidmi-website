import FaqAccordion from '../components/FaqAccordion';

const FaqPage = () => {
    return (
        <main id="main-content" className="pt-20 bg-slate-50">
            {/* Header */}
            <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-gold font-bold text-xs uppercase tracking-widest block mb-3">
                            Centro de Ayuda
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                            Preguntas Frecuentes
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                            Resolvemos tus dudas sobre garantías, pólizas de mantenimiento, tiempos de respuesta y procesos de instalación.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <FaqAccordion />
        </main>
    );
};

export default FaqPage;
