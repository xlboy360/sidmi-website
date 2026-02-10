import FaqAccordion from '../components/FaqAccordion';

const FaqPage = () => {
    return (
        <main id="main-content" className="pt-20">
            {/* Header */}
            <section className="py-16 bg-gradient-to-r from-oxford-grey to-graphite">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold text-dark-text mb-6">
                            Preguntas Frecuentes
                        </h1>
                        <p className="text-xl text-medium-text leading-relaxed">
                            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de mantenimiento e instalaciones
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
