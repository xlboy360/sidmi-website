import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { emailConfig } from '../config/emailConfig';

const FloatingWhatsApp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = (emailConfig.whatsappNumber || '+525573268042').replace(/[^0-9]/g, '');
    const defaultMessage = encodeURIComponent(
        'Hola S.I.D.M.I., me gustaría solicitar información y cotización sobre sus servicios de instalaciones y mantenimiento.'
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

    return (
        <aside
            className="fixed bottom-6 right-6 z-40 flex flex-col items-end"
            aria-label="Contacto directo por WhatsApp"
        >
            {/* Tooltip / Mini card */}
            {isOpen && (
                <div className="mb-3 max-w-xs bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 transition-all animate-in fade-in slide-in-from-bottom-2">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                            <p className="text-sm font-bold text-slate-800">Atención S.I.D.M.I.</p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-slate-400 hover:text-slate-600 p-1"
                            aria-label="Cerrar mensaje"
                        >
                            <X size={16} />
                        </button>
                    </div>
                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                        ¿Necesitas una cotización urgente o asesoría técnica? Escríbenos directamente y te responderemos en minutos.
                    </p>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold py-2 px-3 rounded-lg shadow transition-colors"
                    >
                        <MessageCircle size={15} />
                        Iniciar Chat en WhatsApp
                    </a>
                </div>
            )}

            {/* Main Floating Button */}
            <div className="relative group">
                {!isOpen && (
                    <div className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        ¿Cotización rápida? ¡Escríbenos!
                    </div>
                )}
                <button
                    onClick={() => {
                        // On mobile direct open, on desktop toggle popup
                        if (window.innerWidth < 768 && !isOpen) {
                            window.open(whatsappUrl, '_blank');
                        } else {
                            setIsOpen(!isOpen);
                        }
                    }}
                    className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-300"
                    aria-label="Abrir WhatsApp para cotización inmediata"
                >
                    <MessageCircle size={30} className="fill-current" />
                </button>
            </div>
        </aside>
    );
};

export default FloatingWhatsApp;
