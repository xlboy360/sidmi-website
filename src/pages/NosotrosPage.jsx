import { companyInfo } from '../data/companyInfo';
import { Target, Eye, Award, Users, CheckCircle2, Shield, HeartHandshake, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NosotrosPage = () => {
    return (
        <main id="main-content" className="pt-20 bg-slate-50">
            <SEO
                title="Quiénes Somos - 25 Años de Experiencia en Ingeniería y Mantenimiento"
                description="Conoce la historia, misión, valores y certificaciones de S.I.D.M.I. Más de 25 años brindando soluciones de ingeniería electromecánica en México."
                canonical="/nosotros"
            />
            {/* Header */}
            <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-gold font-bold text-xs uppercase tracking-widest block mb-3">
                            Compromiso y Excelencia
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                            Acerca de S.I.D.M.I.
                        </h1>
                        <p className="text-xl text-amber-300 font-semibold mb-2">
                            {companyInfo.about.yearsOfExperience} años de experiencia en el mercado mexicano
                        </p>
                        <p className="text-slate-300 text-base max-w-2xl mx-auto">
                            Ingeniería, montaje y mantenimiento integral enfocado en la satisfacción y confort de nuestros clientes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quiénes Somos */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-gold">
                                <Users size={28} />
                            </div>
                            <div>
                                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Identidad</span>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                                    ¿Quiénes Somos?
                                </h2>
                            </div>
                        </div>

                        <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
                            <p>
                                <strong className="text-slate-900">{companyInfo.name.full}</strong> ({companyInfo.name.short}) es una empresa mexicana con más de dos décadas y media de sólida trayectoria en proveer, instalar y mantener soluciones de climatización y mantenimiento especializado.
                            </p>
                            <p>
                                {companyInfo.about.description}
                            </p>
                            <p>
                                Nuestro compromiso es cubrir los requerimientos más exigentes de la industria con la más avanzada tecnología en eficiencia operativa y ahorro energético, priorizando la seguridad y continuidad operativa de tu empresa.
                            </p>

                            {/* Legal Badge Card */}
                            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border-l-4 border-gold border border-slate-200 mt-8 shadow-sm">
                                <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                                    <Shield size={16} className="text-gold" />
                                    <span>Garantía y Responsabilidad Institucional</span>
                                </div>
                                <p className="text-slate-900 font-bold text-xl mb-1">
                                    {companyInfo.legal.manager}
                                </p>
                                <p className="text-slate-600 text-sm">{companyInfo.legal.managerTitle}</p>
                                <p className="text-xs font-mono text-slate-500 mt-3 pt-3 border-t border-slate-200">
                                    RFC Fiscal: <span className="font-semibold text-slate-700">{companyInfo.legal.rfc}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Misión, Visión, Objetivo */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Misión */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 bg-amber-50 text-gold rounded-xl flex items-center justify-center mb-6">
                                    <Target size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    Nuestra Misión
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {companyInfo.about.mission}
                                </p>
                            </div>
                        </div>

                        {/* Visión */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 bg-blue-50 text-sky-600 rounded-xl flex items-center justify-center mb-6">
                                    <Eye size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    Nuestra Visión
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {companyInfo.about.vision}
                                </p>
                            </div>
                        </div>

                        {/* Objetivo */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    Nuestro Objetivo
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {companyInfo.about.objective}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Valores Corporativos */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold text-xs uppercase tracking-wider block mb-2">
                            Filosofía de Trabajo
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                            Nuestros Valores
                        </h2>
                        <p className="text-slate-600 text-sm max-w-xl mx-auto">
                            Principios que rigen cada cotización, instalación y relación con nuestros clientes y colaboradores.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200 hover:border-gold transition-all flex items-start gap-4">
                            <div className="p-2.5 bg-amber-100 text-gold rounded-xl mt-1">
                                <CheckCircle2 size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Calidad</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Compromiso irrestricto con la excelencia técnica en cada proyecto, materiales y servicio que ejecutamos.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200 hover:border-gold transition-all flex items-start gap-4">
                            <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl mt-1">
                                <Shield size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Honestidad</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Transparencia, presupuestos justos y ética profesional en todas nuestras relaciones comerciales.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200 hover:border-gold transition-all flex items-start gap-4">
                            <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-xl mt-1">
                                <HeartHandshake size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Respeto</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Trato digno y cumplimiento puntual con nuestros clientes, colaboradores y normativas ambientales.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200 hover:border-gold transition-all flex items-start gap-4">
                            <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl mt-1">
                                <Lightbulb size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Innovación</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Adopción de tecnologías de vanguardia en automatización y ahorro energético en cada obra.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            to="/contacto"
                            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105"
                        >
                            Comunícate con Nuestro Equipo
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NosotrosPage;
