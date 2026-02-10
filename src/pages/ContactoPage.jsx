import ContactForm from '../components/ContactForm';

const ContactoPage = () => {
    return (
        <main id="main-content" className="pt-20">
            {/* Header */}
            <section className="py-16 bg-gradient-to-r from-oxford-grey to-graphite">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold text-dark-text mb-6">
                            Contáctanos
                        </h1>
                        <p className="text-xl text-medium-text leading-relaxed">
                            Estamos listos para atender tus necesidades de mantenimiento e instalaciones
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <ContactForm />
        </main>
    );
};

export default ContactoPage;
