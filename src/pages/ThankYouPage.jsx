import { useEffect } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, ArrowRight, Phone, Home, Clock } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { trackEvent } from '../utils/analytics';

const ThankYouPage = () => {
    useEffect(() => {
        // Track conversion goal on thank you page
        trackEvent('conversion_form_complete', {
            event_category: 'Lead',
            event_label: 'Thank You Page View',
        });
    }, []);

    const whatsappUrl = `https://wa.me/525573268042?text=${encodeURIComponent(
        'Hola S.I.D.M.I., acabo de enviar mi solicitud desde la página web y me gustaría dar seguimiento prioritario a mi cotización.'
    )}`;

    return (
        <main id="main-content" className="pt-24 pb-20 bg-slate-50 min-h-[85vh] flex items-center justify-center">
            <SEO
                title="¡Solicitud Recibida!"
                description="Gracias por contactar a S.I.D.M.I. Hemos recibido tu solicitud de cotización y te contactaremos en menos de 24 horas."
                canonical="/gracias"
            />

            <div className="container mx-auto px-4 max-w-2xl text-center">
                {/* Success Icon */}
                <div className="inline-flex p-4 bg-emerald-100 text-emerald-600 rounded-full mb-6 shadow-md animate-bounce">
                    <CheckCircle2 size={54} />
                </div>

                <span className="text-gold font-bold text-xs uppercase tracking-widest block mb-2">
                    Solicitud Confirmada
                </span>

                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                    ¡Gracias por tu Confianza!
                </h1>

                <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed max-w-lg mx-auto">
                    Hemos recibido la información de tu proyecto correctamente. Uno de nuestros ingenieros especialistas revisará las especificaciones y se pondrá en contacto contigo en menos de <strong>24 horas hábiles</strong>.
                </p>

                {/* Response SLA Card */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-left max-w-lg mx-auto mb-8 space-y-4">
                    <div className="flex items-start gap-3">
                        <Clock size={20} className="text-gold flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="font-bold text-slate-900 text-sm">¿Qué sigue ahora?</p>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Evaluaremos tu requerimiento técnico. De ser necesario, agendaremos una visita de levantamiento sin costo para confirmar medidas de ductería, capacidad térmica o especificaciones electromecánicas.
                            </p>
                        </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-500">¿Requieres atención urgente?</span>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline"
                        >
                            <MessageCircle size={15} />
                            Seguimiento por WhatsApp
                        </a>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105"
                    >
                        <MessageCircle size={18} />
                        Chatear en WhatsApp
                    </a>

                    <Link
                        to="/proyectos"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-3.5 rounded-xl shadow transition-all hover:scale-105"
                    >
                        Ver Galería de Obras
                        <ArrowRight size={18} />
                    </Link>

                    <Link
                        to="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-slate-300 hover:border-gold text-slate-800 font-semibold px-6 py-3.5 rounded-xl transition-all"
                    >
                        <Home size={18} />
                        Inicio
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ThankYouPage;
