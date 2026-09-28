import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const serviceLinks = [
        { label: 'Aire Acondicionado y Climatización', path: '/servicios' },
        { label: 'Refrigeración y Cámaras Frigoríficas', path: '/servicios' },
        { label: 'Extracción y Ventilación', path: '/servicios' },
        { label: 'Instalaciones Eléctricas Industriales', path: '/servicios' },
        { label: 'Equipos Electromecánicos y Bombeo', path: '/servicios' },
        { label: 'Mantenimiento Preventivo y Correctivo', path: '/servicios' }
    ];

    return (
        <footer className="bg-slate-900 text-white border-t border-slate-800" role="contentinfo">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div>
                        <div className="mb-4">
                            <span className="text-2xl font-black tracking-wider text-white">
                                S.I.<span className="text-gold">D.M.</span>I.
                            </span>
                        </div>
                        <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
                            {companyInfo.name.full}
                        </p>
                        <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                            Más de {companyInfo.about.yearsOfExperience} años proporcionando soluciones de ingeniería, montaje e instalaciones electromecánicas en México.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-amber-300 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                            <ShieldCheck size={16} className="text-gold flex-shrink-0" />
                            <span>Servicio certificado y garantía en obra</span>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-base font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                            <span className="w-1.5 h-4 bg-gold rounded-full" />
                            Nuestros Servicios
                        </h4>
                        <ul className="space-y-2.5">
                            {serviceLinks.map((service) => (
                                <li key={service.label}>
                                    <Link
                                        to={service.path}
                                        className="text-slate-300 hover:text-gold text-sm transition-colors block py-0.5"
                                    >
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-base font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                            <span className="w-1.5 h-4 bg-gold rounded-full" />
                            Navegación Rápida
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link to="/" className="text-slate-300 hover:text-gold transition-colors block py-0.5">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios" className="text-slate-300 hover:text-gold transition-colors block py-0.5">
                                    Servicios Especializados
                                </Link>
                            </li>
                            <li>
                                <Link to="/proyectos" className="text-slate-300 hover:text-gold transition-colors block py-0.5">
                                    Galería de Proyectos
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-slate-300 hover:text-gold transition-colors block py-0.5">
                                    Preguntas Frecuentes
                                </Link>
                            </li>
                            <li>
                                <Link to="/nosotros" className="text-slate-300 hover:text-gold transition-colors block py-0.5">
                                    Acerca de S.I.D.M.I.
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacto" className="text-slate-300 hover:text-gold transition-colors block py-0.5">
                                    Contacto y Cotizaciones
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacidad" className="text-slate-300 hover:text-gold transition-colors block py-0.5">
                                    Aviso de Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link to="/terminos" className="text-slate-300 hover:text-gold transition-colors block py-0.5">
                                    Términos y Condiciones
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-base font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                            <span className="w-1.5 h-4 bg-gold rounded-full" />
                            Atención Inmediata
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-300 text-sm">
                                <MapPin className="text-gold flex-shrink-0 mt-0.5" size={18} />
                                <span className="leading-snug">
                                    {companyInfo.contact.address}, {companyInfo.contact.city}, {companyInfo.contact.state}, C.P. {companyInfo.contact.zipCode}
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-300 text-sm">
                                <Phone className="text-gold flex-shrink-0 mt-0.5" size={18} />
                                <div className="space-y-1">
                                    <a href={`tel:${companyInfo.contact.phone.mobile1.replace(/\s/g, '')}`} className="hover:text-gold transition-colors block">
                                        {companyInfo.contact.phone.mobile1} (Línea Principal)
                                    </a>
                                    <a href={`tel:${companyInfo.contact.phone.mobile2.replace(/\s/g, '')}`} className="hover:text-gold transition-colors block text-xs text-slate-400">
                                        {companyInfo.contact.phone.mobile2}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3 text-slate-300 text-sm">
                                <Mail className="text-gold flex-shrink-0" size={18} />
                                <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-gold transition-colors">
                                    {companyInfo.contact.email}
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 p-2 rounded border border-emerald-800/40">
                                <Clock size={14} className="flex-shrink-0" />
                                <span>Emergencias técnicas 24/7 en CDMX y Edomex</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright & Fiscal Info */}
                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
                    <p>
                        © {currentYear} {companyInfo.name.full}. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-3">
                        <Link to="/privacidad" className="hover:text-gold transition-colors">
                            Aviso de Privacidad
                        </Link>
                        <span className="text-slate-600">|</span>
                        <Link to="/terminos" className="hover:text-gold transition-colors">
                            Términos y Condiciones
                        </Link>
                    </div>
                    <p className="text-slate-500">
                        RFC: <span className="text-slate-400">{companyInfo.legal.rfc}</span> | {companyInfo.legal.manager}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
