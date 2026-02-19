import { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';
import { clearWizardStatus } from '../utils/localStorage';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        serviceType: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const serviceTypes = [
        'Plomería',
        'Eléctrico',
        'Construcción',
        'HVAC',
        'Pintura',
        'Reparación de Emergencia',
        'Otro',
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'El número de teléfono es requerido';
        } else if (!/^\+?[\d\s\-()]+$/.test(formData.phone)) {
            newErrors.phone = 'Por favor ingresa un número de teléfono válido';
        }

        if (!formData.serviceType) {
            newErrors.serviceType = 'Por favor selecciona un tipo de servicio';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            // Send email via EmailJS (only if configured)
            if (emailConfig.serviceId && emailConfig.contactTemplateId && emailConfig.publicKey) {
                try {
                    // Initialize EmailJS
                    emailjs.init(emailConfig.publicKey);

                    // Send email to admin
                    await emailjs.send(
                        emailConfig.serviceId,
                        emailConfig.contactTemplateId,
                        {
                            from_name: formData.name,
                            from_phone: formData.phone,
                            service_type: formData.serviceType,
                            message: formData.message || 'Sin mensaje adicional'
                        }
                    );

                    console.log('✅ Contact form email sent successfully to admin');
                } catch (emailError) {
                    console.error('⚠️ Error sending email:', emailError);
                    // Don't block the user flow if email fails
                }
            } else {
                console.warn('⚠️ EmailJS not configured. Set environment variables in .env.local');
            }

            // Show success state
            setIsSubmitted(true);

            // Reset form
            setFormData({
                name: '',
                phone: '',
                serviceType: '',
                message: '',
            });

            // Clear wizard status so it can be shown again
            clearWizardStatus();

            // Reset success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('❌ Hubo un error al enviar tu mensaje. Por favor intenta nuevamente o contáctanos directamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="pb-20 bg-beige">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <h2 className="text-4xl font-bold text-dark-text mb-4">
                            Contáctanos
                        </h2>
                        <p className="text-lg text-medium-text mb-8">
                            ¿Listo para comenzar tu proyecto? Llena el formulario y te contactaremos en menos de 24 horas.
                        </p>

                        {isSubmitted && (
                            <div className="bg-green-500 bg-opacity-20 border border-green-500 text-green-400 p-4 rounded-lg mb-6">
                                ¡Gracias! Nos pondremos en contacto pronto.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-dark-text font-semibold mb-2"
                                >
                                    Nombre Completo *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-cream text-dark-text rounded-lg border-2 ${errors.name ? 'border-red-500' : 'border-transparent'
                                        } focus:border-gold focus:outline-none transition-colors`}
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                />
                                {errors.name && (
                                    <p id="name-error" className="text-red-400 text-sm mt-1">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-dark-text font-semibold mb-2"
                                >
                                    Número de Teléfono *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-cream text-dark-text rounded-lg border-2 ${errors.phone ? 'border-red-500' : 'border-transparent'
                                        } focus:border-gold focus:outline-none transition-colors`}
                                    aria-invalid={!!errors.phone}
                                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                                />
                                {errors.phone && (
                                    <p id="phone-error" className="text-red-400 text-sm mt-1">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>

                            {/* Service Type */}
                            <div>
                                <label
                                    htmlFor="serviceType"
                                    className="block text-dark-text font-semibold mb-2"
                                >
                                    Tipo de Servicio *
                                </label>
                                <select
                                    id="serviceType"
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-cream text-dark-text rounded-lg border-2 ${errors.serviceType ? 'border-red-500' : 'border-transparent'
                                        } focus:border-gold focus:outline-none transition-colors`}
                                    aria-invalid={!!errors.serviceType}
                                    aria-describedby={errors.serviceType ? 'service-error' : undefined}
                                >
                                    <option value="">Selecciona un servicio</option>
                                    {serviceTypes.map((service) => (
                                        <option key={service} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>
                                {errors.serviceType && (
                                    <p id="service-error" className="text-red-400 text-sm mt-1">
                                        {errors.serviceType}
                                    </p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-dark-text font-semibold mb-2"
                                >
                                    Mensaje (Opcional)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-cream text-dark-text rounded-lg border-2 border-transparent focus:border-gold focus:outline-none transition-colors resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${isSubmitting
                                    ? 'bg-gray-500 cursor-not-allowed'
                                    : 'bg-gold hover:bg-gold-dark transform hover:scale-105 cursor-pointer'
                                    } text-white`}
                            >
                                {isSubmitting ? (
                                    'Enviando...'
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Enviar Mensaje
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Map & Contact Info */}
                    <div>
                        <div className="bg-cream rounded-lg p-6 mb-6">
                            <h3 className="text-2xl font-bold text-dark-text mb-4">
                                Información de Contacto
                            </h3>
                            <div className="space-y-4 text-medium-text">
                                <p>
                                    <strong className="text-dark-text">Dirección:</strong>
                                    <br />
                                    Calzada Vallejo, No.8, int 1261<br />
                                    Col. Venustiano Carranza<br />
                                    Tlalnepantla de Baz, Estado de México<br />
                                    C.P. 54170
                                </p>
                                <p>
                                    <strong className="text-dark-text">Teléfono:</strong>
                                    <br />
                                    <a href="tel:+525573268042" className="hover:text-gold transition-colors block">
                                        Cel: 55 7326 8042
                                    </a>
                                    <a href="tel:+525518030475" className="hover:text-gold transition-colors block">
                                        Cel: 55 1803 0475
                                    </a>
                                    <a href="tel:+525512975893" className="hover:text-gold transition-colors block">
                                        Cel: 55 1297 5893
                                    </a>
                                </p>
                                <p>
                                    <strong className="text-dark-text">Email:</strong>
                                    <br />
                                    sidmiservicios@hotmail.com
                                </p>
                                <p>
                                    <strong className="text-dark-text">Horario:</strong>
                                    <br />
                                    Lun-Vie: 8:00 AM - 6:00 PM
                                    <br />
                                    Sáb-Dom: Servicios de Emergencia 24/7
                                </p>
                            </div>
                        </div>

                        {/* Embedded Map Placeholder */}
                        <div className="bg-cream rounded-lg overflow-hidden h-64 hover:scale-105 hover:border-gold hover:border-2 transition-transform duration-300">
                            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
