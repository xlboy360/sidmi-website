import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, AlertTriangle, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';
import { clearWizardStatus } from '../utils/localStorage';
import { trackEvent } from '../utils/analytics';

const ContactForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        serviceType: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const serviceTypes = [
        'Aire Acondicionado y Climatización',
        'Refrigeración Industrial y Cámaras Frigoríficas',
        'Sistemas de Extracción y Ventilación',
        'Fabricación e Instalación de Ductos',
        'Instalaciones Eléctricas y Automatización',
        'Equipos Electromecánicos y Bombeo',
        'Mantenimiento Preventivo y Correctivo',
        'Otro Servicio Especializado',
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear errors when typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
        if (submitError) {
            setSubmitError(null);
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'El nombre o empresa es requerido';
        } else if (formData.name.trim().length < 3) {
            newErrors.name = 'Por favor ingresa al menos 3 caracteres';
        }

        const cleanPhone = formData.phone.replace(/[\s\-()]/g, '');
        if (!formData.phone.trim()) {
            newErrors.phone = 'El número de teléfono o WhatsApp es requerido';
        } else if (!/^\+?\d{10,14}$/.test(cleanPhone)) {
            newErrors.phone = 'Ingresa un número válido de 10 dígitos (ej. 55 1234 5678)';
        }

        if (!formData.serviceType) {
            newErrors.serviceType = 'Por favor selecciona el servicio requerido';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError(null);

        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            // Track submission attempt
            trackEvent('form_submit_attempt', {
                event_category: 'Lead',
                event_label: formData.serviceType
            });

            // Send email via EmailJS (if configured)
            if (emailConfig.serviceId && emailConfig.contactTemplateId && emailConfig.publicKey) {
                try {
                    emailjs.init(emailConfig.publicKey);

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
                    console.log('✅ Contact form email sent successfully');
                } catch (emailError) {
                    console.error('⚠️ Error sending email via EmailJS:', emailError);
                    // Do not break completely, but let's notify fallback if needed
                }
            } else {
                console.warn('⚠️ EmailJS not configured. Set environment variables in .env.local');
            }

            // Success state
            setIsSubmitted(true);
            clearWizardStatus();

            // Track successful conversion
            trackEvent('generate_lead', {
                event_category: 'Lead',
                event_label: formData.serviceType
            });

            // Reset form
            setFormData({
                name: '',
                phone: '',
                serviceType: '',
                message: '',
            });

            // Redirect to Thank You page after 1.5s
            setTimeout(() => {
                navigate('/gracias');
            }, 1200);

        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitError({
                message: 'No pudimos enviar tu mensaje automáticamente debido a un error de conexión.',
                whatsappUrl: `https://wa.me/525573268042?text=${encodeURIComponent(
                    `Hola S.I.D.M.I., intenté cotizar por la página web:\n\n*Nombre:* ${formData.name}\n*Teléfono:* ${formData.phone}\n*Servicio:* ${formData.serviceType}\n*Detalles:* ${formData.message || 'Sin mensaje'}`
                )}`
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm">
                        <span className="text-gold font-bold text-xs uppercase tracking-wider block mb-2">
                            Atención Personalizada
                        </span>
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
                            Envíanos tu Solicitud
                        </h2>
                        <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                            ¿Tienes un proyecto de climatización, refrigeración o mantenimiento? Llena el formulario y un especialista te responderá a la brevedad.
                        </p>

                        {/* Error Banner with WhatsApp / Phone Fallback */}
                        {submitError && (
                            <div
                                role="alert"
                                aria-live="assertive"
                                className="bg-red-50 border border-red-300 text-red-900 p-5 rounded-xl mb-6 shadow-sm animate-in fade-in"
                            >
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="text-red-600 flex-shrink-0 mt-0.5" size={22} />
                                    <div className="space-y-2">
                                        <p className="font-bold text-red-950 text-sm">
                                            {submitError.message}
                                        </p>
                                        <p className="text-xs text-red-800 leading-relaxed">
                                            Para asegurar que recibas tu cotización sin demora, comunícate directamente con nuestro equipo de ingeniería por WhatsApp o teléfono:
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <a
                                                href={submitError.whatsappUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs px-3.5 py-2 rounded-lg shadow transition-colors"
                                            >
                                                <MessageCircle size={15} />
                                                Enviar por WhatsApp directo
                                            </a>
                                            <a
                                                href="tel:+525573268042"
                                                className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3.5 py-2 rounded-lg shadow transition-colors"
                                            >
                                                <Phone size={15} />
                                                Llamar: 55 7326 8042
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Success Notification */}
                        {isSubmitted && (
                            <div
                                role="status"
                                aria-live="polite"
                                className="bg-emerald-50 border border-emerald-300 text-emerald-900 p-4 rounded-xl mb-6 flex items-center gap-3 shadow-sm"
                            >
                                <CheckCircle2 className="text-emerald-600 flex-shrink-0" size={24} />
                                <div>
                                    <p className="font-bold text-sm">¡Mensaje recibido con éxito!</p>
                                    <p className="text-xs text-emerald-800">Redirigiendo a la confirmación del servicio...</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-slate-800 text-sm font-semibold mb-1.5"
                                >
                                    Nombre Completo o Empresa *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Ej. Ing. Carlos Mendoza"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-white text-slate-900 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-gold focus:ring-amber-200'
                                        } focus:ring-2 focus:outline-none transition-all shadow-sm text-sm`}
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                />
                                {errors.name && (
                                    <p id="name-error" className="text-red-600 text-xs mt-1">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-slate-800 text-sm font-semibold mb-1.5"
                                >
                                    Número de Teléfono / WhatsApp *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Ej. 55 1234 5678"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-white text-slate-900 rounded-lg border ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-gold focus:ring-amber-200'
                                        } focus:ring-2 focus:outline-none transition-all shadow-sm text-sm`}
                                    aria-invalid={!!errors.phone}
                                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                                />
                                {errors.phone && (
                                    <p id="phone-error" className="text-red-600 text-xs mt-1">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>

                            {/* Service Type */}
                            <div>
                                <label
                                    htmlFor="serviceType"
                                    className="block text-slate-800 text-sm font-semibold mb-1.5"
                                >
                                    Especialidad o Servicio Requerido *
                                </label>
                                <select
                                    id="serviceType"
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-white text-slate-900 rounded-lg border ${errors.serviceType ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-gold focus:ring-amber-200'
                                        } focus:ring-2 focus:outline-none transition-all shadow-sm text-sm cursor-pointer`}
                                    aria-invalid={!!errors.serviceType}
                                    aria-describedby={errors.serviceType ? 'service-error' : undefined}
                                >
                                    <option value="">Selecciona una opción del catálogo</option>
                                    {serviceTypes.map((service) => (
                                        <option key={service} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>
                                {errors.serviceType && (
                                    <p id="service-error" className="text-red-600 text-xs mt-1">
                                        {errors.serviceType}
                                    </p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-slate-800 text-sm font-semibold mb-1.5"
                                >
                                    Descripción breve del proyecto o requerimiento
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Indica medidas aproximadas, tipo de inmueble o cualquier detalle importante..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white text-slate-900 rounded-lg border border-slate-300 focus:border-gold focus:ring-2 focus:ring-amber-200 focus:outline-none transition-all shadow-sm text-sm resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold transition-all shadow-md ${isSubmitting
                                    ? 'bg-slate-400 cursor-not-allowed text-white'
                                    : 'bg-gold hover:bg-gold-dark hover:scale-[1.02] cursor-pointer text-white'
                                    }`}
                            >
                                {isSubmitting ? (
                                    'Enviando solicitud...'
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Enviar Solicitud de Cotización
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Map */}
                    <div className="flex flex-col justify-between space-y-6">
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
                                Contacto Directo
                            </h3>
                            <div className="space-y-5 text-slate-600 text-sm">
                                <div>
                                    <p className="font-bold text-slate-900 text-base mb-1">📍 Ubicación Corporativa:</p>
                                    <p className="leading-relaxed">
                                        Calzada Vallejo, No.8, int 1261<br />
                                        Col. Venustiano Carranza<br />
                                        Tlalnepantla de Baz, Estado de México, C.P. 54170
                                    </p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-base mb-1">📞 Teléfonos de Atención Inmediata:</p>
                                    <div className="space-y-1">
                                        <a href="tel:+525573268042" className="text-gold font-semibold hover:underline block">
                                            Línea 1: 55 7326 8042
                                        </a>
                                        <a href="tel:+525518030475" className="text-gold font-semibold hover:underline block">
                                            Línea 2: 55 1803 0475
                                        </a>
                                        <a href="tel:+525512975893" className="text-gold font-semibold hover:underline block">
                                            Línea 3: 55 1297 5893
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-base mb-1">✉️ Correo Electrónico:</p>
                                    <a href="mailto:sidmiservicios@hotmail.com" className="text-gold font-semibold hover:underline">
                                        sidmiservicios@hotmail.com
                                    </a>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-base mb-1">🕒 Horarios de Servicio:</p>
                                    <p className="leading-relaxed">
                                        Lunes a Viernes: 8:00 AM – 6:00 PM<br />
                                        <span className="inline-block mt-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold text-xs">
                                            Servicio de Emergencia Industrial 24/7
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Map */}
                        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-72">
                            <iframe
                                title="Ubicación S.I.D.M.I."
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.026418659616!2d-99.167897!3d19.535805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDMyJzA4LjkiTiA5OcKwMTAnMDQuNCJX!5e0!3m2!1ses!2smx!4v1600000000000!5m2!1ses!2smx"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
