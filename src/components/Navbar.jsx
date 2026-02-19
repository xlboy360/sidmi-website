import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

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

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glassmorphism shadow-lg' : 'bg-transparent'
                }`}
            role="banner"
        >
            <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center hover:opacity-80 transition-opacity"
                        aria-label={`${companyInfo.name.short} - Ir al inicio`}
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}logo.png`}
                            alt={companyInfo.name.short}
                            className="h-20 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`text-gold hover:text-gold-dark font-semibold transition-colors font-medium ${location.pathname === link.path ? 'text-gold-dark font-bold' : ''
                                        }`}
                                    aria-label={`Navegar a ${link.label}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-black hover:text-gold-dark transition-colors p-2 cursor-pointer"
                        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div
                        id="mobile-menu"
                        className="md:hidden mt-4 glassmorphism rounded-lg p-4"
                        role="menu"
                    >
                        <ul className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.path} role="none">
                                    <Link
                                        to={link.path}
                                        className={`block w-full text-left text-gold hover:text-gold-dark font-semibold transition-colors font-medium py-2 ${location.pathname === link.path ? 'text-gold-dark font-bold' : ''
                                            }`}
                                        role="menuitem"
                                        aria-label={`Navegar a ${link.label}`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
