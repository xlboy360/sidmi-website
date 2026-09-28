import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Home, Wrench, PhoneCall, ArrowLeft } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

const NotFoundPage = () => {
    return (
        <main id="main-content" className="pt-24 pb-20 bg-slate-50 min-h-[80vh] flex items-center justify-center">
            <SEO
                title="Página No Encontrada (404)"
                description="La página que estás buscando no existe o ha sido reubicada. Regresa a S.I.D.M.I. para cotizar servicios de climatización y mantenimiento."
            />

            <div className="container mx-auto px-4 max-w-2xl text-center">
                <div className="inline-block px-4 py-1.5 bg-amber-100 text-gold-dark font-extrabold text-sm rounded-full mb-6">
                    Error 404
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight mb-4">
                    4<span className="text-gold">0</span>4
                </h1>

                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-4">
                    Página no encontrada
                </h2>

                <p className="text-slate-600 text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    La página que estás buscando no existe, ha sido movida o la dirección ingresada no es correcta.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Link
                        to="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-3.5 rounded-xl shadow transition-all hover:scale-105"
                    >
                        <Home size={18} />
                        Volver al Inicio
                    </Link>

                    <Link
                        to="/servicios"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-bold px-7 py-3.5 rounded-xl shadow transition-all hover:scale-105"
                    >
                        <Wrench size={18} />
                        Nuestros Servicios
                    </Link>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-md mx-auto text-sm text-slate-600">
                    <p className="font-semibold text-slate-900 mb-1">
                        ¿Requieres asistencia o una cotización urgente?
                    </p>
                    <p className="mb-3">
                        Llámanos directamente y un técnico te atenderá de inmediato:
                    </p>
                    <a
                        href={`tel:${companyInfo.contact.phone.mobile1.replace(/\s/g, '')}`}
                        className="inline-flex items-center gap-2 text-gold font-bold hover:underline"
                    >
                        <PhoneCall size={16} />
                        {companyInfo.contact.phone.mobile1}
                    </a>
                </div>
            </div>
        </main>
    );
};

export default NotFoundPage;
