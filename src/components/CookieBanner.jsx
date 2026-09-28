import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cookie, X } from 'lucide-react';
import { initGA } from '../utils/analytics';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            // Show after small delay so it doesn't jarringly pop on immediate page load
            const timer = setTimeout(() => setIsVisible(true), 1200);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        setIsVisible(false);
        initGA();
    };

    const handleDecline = () => {
        localStorage.setItem('cookie_consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <aside
            role="dialog"
            aria-live="polite"
            aria-label="Aviso de cookies y privacidad"
            className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 bg-slate-900/95 backdrop-blur-md text-white p-5 rounded-2xl shadow-2xl border border-slate-700 animate-in fade-in slide-in-from-bottom-5"
        >
            <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-amber-500/20 text-gold rounded-xl flex-shrink-0">
                    <Cookie size={20} />
                </div>
                <div>
                    <h3 className="text-sm font-bold text-white mb-1">
                        Aviso de Cookies y Privacidad
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                        Utilizamos cookies técnicas y analíticas para optimizar tu experiencia y analizar el rendimiento del sitio. Puedes consultar nuestro{' '}
                        <Link to="/privacidad" className="text-amber-400 hover:underline font-semibold">
                            Aviso de Privacidad
                        </Link>.
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
                <button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-gold hover:bg-gold-dark text-white text-xs font-bold py-2 px-3 rounded-lg transition-all shadow cursor-pointer text-center"
                >
                    Aceptar todas
                </button>
                <button
                    onClick={handleDecline}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium py-2 px-3 rounded-lg border border-slate-700 transition-colors cursor-pointer text-center"
                >
                    Solo esenciales
                </button>
            </div>
        </aside>
    );
};

export default CookieBanner;
