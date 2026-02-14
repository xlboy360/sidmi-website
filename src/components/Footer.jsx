import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const serviceLinks = [
        'Aire Acondicionado',
        'Refrigeración',
        'Extracción',
        'Instalaciones Eléctricas',
        'Equipos Electromecánicos',
        'Mantenimiento'
    ];

    return (
        <footer className="bg-cream border-t border-gold-light" role="contentinfo">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-dark-text mb-4">
                            <span className="text-gold">{companyInfo.name.short}</span>
                        </h3>
                        <p className="text-sm text-medium-text mb-2">{companyInfo.name.full}</p>
                        <p className="text-medium-text mb-4">
                            {companyInfo.about.yearsOfExperience} años de experiencia en mantenimiento e instalaciones.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dark-text hover:text-gold transition-colors"
                                aria-label="Visita nuestra página de Facebook"
                            >
                                <Facebook size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-lg font-bold text-dark-text mb-4">Nuestros Servicios</h4>
                        <ul className="space-y-2">
                            {serviceLinks.map((service) => (
                                <li key={service}>
                                    <Link
                                        to="/servicios"
                                        className="text-medium-text hover:text-gold transition-colors"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-dark-text mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-medium-text hover:text-gold transition-colors"
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/servicios"
                                    className="text-medium-text hover:text-gold transition-colors"
                                >
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/proyectos"
                                    className="text-medium-text hover:text-gold transition-colors"
                                >
                                    Proyectos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/faq"
                                    className="text-medium-text hover:text-gold transition-colors"
                                >
                                    Preguntas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/nosotros"
                                    className="text-medium-text hover:text-gold transition-colors"
                                >
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contacto"
                                    className="text-medium-text hover:text-gold transition-colors"
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-dark-text mb-4">Contáctanos</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-medium-text">
                                <MapPin className="text-gold flex-shrink-0 mt-1" size={20} />
                                <span className="text-sm">
                                    {companyInfo.contact.address}<br />
                                    {companyInfo.contact.city}, {companyInfo.contact.state}<br />
                                    C.P. {companyInfo.contact.zipCode}
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-medium-text">
                                <Phone className="text-gold flex-shrink-0" size={20} />
                                <div className="text-sm">
                                    <a href={`tel:${companyInfo.contact.phone.mobile1.replace(/\s/g, '')}`} className="hover:text-gold transition-colors block">
                                        Cel: {companyInfo.contact.phone.mobile1}
                                    </a>
                                    <a href={`tel:${companyInfo.contact.phone.mobile2.replace(/\s/g, '')}`} className="hover:text-gold transition-colors block">
                                        Cel: {companyInfo.contact.phone.mobile2}
                                    </a>
                                    <a href={`tel:${companyInfo.contact.phone.mobile3.replace(/\s/g, '')}`} className="hover:text-gold transition-colors block">
                                        Cel: {companyInfo.contact.phone.mobile3}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3 text-medium-text">
                                <Mail className="text-gold flex-shrink-0" size={20} />
                                <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-gold transition-colors text-sm">
                                    {companyInfo.contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gold-light mt-8 pt-8 text-center">
                    <p className="text-medium-text text-sm">
                        © {currentYear} {companyInfo.name.full}. Todos los derechos reservados.
                    </p>
                    <p className="text-medium-text text-xs mt-2">
                        RFC: {companyInfo.legal.rfc} | {companyInfo.legal.manager}, {companyInfo.legal.managerTitle}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
