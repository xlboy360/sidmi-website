import ContactForm from '../components/ContactForm';

const ContactoPage = () => {
    return (
        <main id="main-content" className="pt-20 bg-slate-50">
            {/* Header */}
            <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-gold font-bold text-xs uppercase tracking-widest block mb-3">
                            Atención Inmediata
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                            Contáctanos
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                            Estamos preparados para diagnosticar, presupuestar y ejecutar tus proyectos de mantenimiento e instalaciones industriales.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Information */}
            <ContactForm />
        </main>
    );
};

export default ContactoPage;
