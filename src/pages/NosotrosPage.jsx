import { companyInfo } from '../data/companyInfo';
import { Target, Eye, Award, Users } from 'lucide-react';

const NosotrosPage = () => {
    return (
        <main id="main-content" className="pt-20">
            {/* Header */}
            <section className="py-16 bg-gradient-to-r from-oxford-grey to-graphite">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold text-dark-text mb-6">
                            Sobre Nosotros
                        </h1>
                        <p className="text-2xl text-gold font-semibold">
                            {companyInfo.about.yearsOfExperience} años de experiencia en el mercado mexicano
                        </p>
                    </div>
                </div>
            </section>

            {/* Quiénes Somos */}
            <section className="py-20 bg-cream">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-steel-blue bg-opacity-20 rounded-lg flex items-center justify-center">
                                <Users className="text-gold" size={32} />
                            </div>
                            <h2 className="text-4xl font-bold text-dark-text">
                                ¿Quiénes Somos?
                            </h2>
                        </div>

                        <div className="space-y-6 text-medium-text leading-relaxed text-lg">
                            <p>
                                <strong className="text-dark-text">{companyInfo.name.full}</strong> ({companyInfo.name.short}), es la empresa líder en el mercado Mexicano en atender, proveer y satisfacer soluciones para mejorar su ambiente.
                            </p>
                            <p>
                                {companyInfo.about.description}
                            </p>
                            <p>
                                Con el compromiso de cubrir las necesidades con la más avanzada tecnología en eficiencia y ahorro de energía, siendo usted nuestro cliente eje primordial.
                            </p>
                            <div className="bg-beige p-6 rounded-lg border-l-4 border-gold mt-8">
                                <p className="text-sm text-medium-text mb-2">Responsable Legal</p>
                                <p className="text-dark-text font-semibold text-lg">
                                    {companyInfo.legal.manager}
                                </p>
                                <p className="text-medium-text">{companyInfo.legal.managerTitle}</p>
                                <p className="text-sm text-medium-text mt-2">RFC: {companyInfo.legal.rfc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Misión */}
            <section className="py-20 bg-beige">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-steel-blue bg-opacity-20 rounded-lg flex items-center justify-center">
                                <Target className="text-gold" size={32} />
                            </div>
                            <h2 className="text-4xl font-bold text-dark-text">
                                Nuestra Misión
                            </h2>
                        </div>

                        <p className="text-medium-text leading-relaxed text-lg">
                            {companyInfo.about.mission}
                        </p>
                    </div>
                </div>
            </section>

            {/* Visión */}
            <section className="py-20 bg-cream">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-steel-blue bg-opacity-20 rounded-lg flex items-center justify-center">
                                <Eye className="text-gold" size={32} />
                            </div>
                            <h2 className="text-4xl font-bold text-dark-text">
                                Nuestra Visión
                            </h2>
                        </div>

                        <p className="text-medium-text leading-relaxed text-lg">
                            {companyInfo.about.vision}
                        </p>
                    </div>
                </div>
            </section>

            {/* Objetivo */}
            <section className="py-20 bg-beige">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-steel-blue bg-opacity-20 rounded-lg flex items-center justify-center">
                                <Award className="text-gold" size={32} />
                            </div>
                            <h2 className="text-4xl font-bold text-dark-text">
                                Nuestro Objetivo
                            </h2>
                        </div>

                        <p className="text-medium-text leading-relaxed text-lg">
                            {companyInfo.about.objective}
                        </p>
                    </div>
                </div>
            </section>

            {/* Valores */}
            <section className="py-20 bg-gradient-to-b from-cream to-beige">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-dark-text mb-12 text-center">
                            Nuestros Valores
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-beige p-6 rounded-lg border-2 border-transparent hover:border-gold transition-all">
                                <h3 className="text-xl font-bold text-dark-text mb-3">Calidad</h3>
                                <p className="text-medium-text">
                                    Compromiso con la excelencia en cada proyecto y servicio que realizamos.
                                </p>
                            </div>

                            <div className="bg-beige p-6 rounded-lg border-2 border-transparent hover:border-gold transition-all">
                                <h3 className="text-xl font-bold text-dark-text mb-3">Honestidad</h3>
                                <p className="text-medium-text">
                                    Transparencia y ética en todas nuestras relaciones comerciales.
                                </p>
                            </div>

                            <div className="bg-beige p-6 rounded-lg border-2 border-transparent hover:border-gold transition-all">
                                <h3 className="text-xl font-bold text-dark-text mb-3">Respeto</h3>
                                <p className="text-medium-text">
                                    Valoramos a nuestros clientes, colaboradores y el medio ambiente.
                                </p>
                            </div>

                            <div className="bg-beige p-6 rounded-lg border-2 border-transparent hover:border-gold transition-all">
                                <h3 className="text-xl font-bold text-dark-text mb-3">Innovación</h3>
                                <p className="text-medium-text">
                                    Utilizamos tecnología de vanguardia para ofrecer las mejores soluciones.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NosotrosPage;
