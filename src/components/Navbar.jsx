import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, FileText } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { useWizard } from '../contexts/WizardContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { openWizard } = useWizard();

    // Check if we are on the homepage
    const isHome = location.pathname === '/';

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Inicio' },
        { path: '/servicios', label: 'Servicios' },
        { path: '/proyectos', label: 'Proyectos' },
        { path: '/faq', label: 'Preguntas' },
        { path: '/nosotros', label: 'Nosotros' },
        { path: '/contacto', label: 'Contacto' },
    ];

    // Style logic: On home without scroll, keep transparent with good text shadow/clarity; everywhere else, modern glassmorphism
    const navbarBgClass = (!isHome || isScrolled)
        ? 'glassmorphism shadow-sm'
        : 'bg-gradient-to-b from-black/60 to-transparent';

    const linkTextClass = (!isHome || isScrolled)
        ? 'text-slate-700 hover:text-gold'
        : 'text-white hover:text-amber-300';

    const activeLinkClass = (!isHome || isScrolled)
        ? 'text-gold font-bold'
        : 'text-amber-400 font-bold';

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBgClass}`}
            role="banner"
        >
            <nav className="container mx-auto px-4 py-3.5" aria-label="Navegación principal">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center hover:opacity-90 transition-opacity"
                        aria-label={`${companyInfo.name.short} - Ir al inicio`}
                    >
                        <img
                            src="/logo.png"
                            alt={companyInfo.name.short}
                            className="h-14 md:h-16 w-auto object-contain drop-shadow"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-7">
                        <ul className="flex items-center space-x-6 text-sm font-medium">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className={`transition-colors py-1 ${isActive ? activeLinkClass : linkTextClass}`}
                                            aria-label={`Navegar a ${link.label}`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Direct Phone & Quote CTA */}
                        <div className="flex items-center gap-3 pl-4 border-l border-slate-200/40">
                            <a
                                href={`tel:${companyInfo.contact.phone.mobile1.replace(/\s/g, '')}`}
                                className={`text-xs font-semibold flex items-center gap-1.5 transition-colors ${(!isHome || isScrolled) ? 'text-slate-600 hover:text-gold' : 'text-slate-200 hover:text-white'
                                    }`}
                                title="Llamar a S.I.D.M.I."
                            >
                                <Phone size={14} className="text-gold" />
                                <span>{companyInfo.contact.phone.mobile1}</span>
                            </a>

                            <button
                                onClick={openWizard}
                                className="bg-gold hover:bg-gold-dark text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-md hover:scale-105 flex items-center gap-1.5 cursor-pointer"
                            >
                                <FileText size={14} />
                                Cotizar en Línea
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            onClick={openWizard}
                            className="bg-gold text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow cursor-pointer"
                        >
                            Cotizar
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 cursor-pointer transition-colors rounded-lg ${(!isHome || isScrolled) ? 'text-slate-800' : 'text-white'
                                }`}
                            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */}
                {isMenuOpen && (
                    <div
                        id="mobile-menu"
                        className="lg:hidden mt-3 bg-white rounded-xl shadow-2xl p-5 border border-slate-200 animate-in fade-in"
                        role="menu"
                    >
                        <ul className="flex flex-col space-y-3">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <li key={link.path} role="none">
                                        <Link
                                            to={link.path}
                                            className={`block w-full text-left font-semibold transition-colors py-2 px-3 rounded-lg text-sm ${isActive
                                                ? 'bg-amber-50 text-gold font-bold'
                                                : 'text-slate-700 hover:bg-slate-50 hover:text-gold'
                                                }`}
                                            role="menuitem"
                                            aria-label={`Navegar a ${link.label}`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
                            <a
                                href={`tel:${companyInfo.contact.phone.mobile1.replace(/\s/g, '')}`}
                                className="flex items-center justify-center gap-2 text-slate-700 bg-slate-100 hover:bg-slate-200 font-semibold py-2.5 rounded-lg text-sm transition-colors"
                            >
                                <Phone size={16} className="text-gold" />
                                Llamar: {companyInfo.contact.phone.mobile1}
                            </a>
                            <button
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    openWizard();
                                }}
                                className="w-full bg-gold hover:bg-gold-dark text-white font-bold py-2.5 rounded-lg text-sm shadow transition-colors cursor-pointer"
                            >
                                Iniciar Cotización Gratuita
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
