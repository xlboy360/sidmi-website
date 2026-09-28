import SEO from '../components/SEO';
import { companyInfo } from '../data/companyInfo';
import { FileCheck, Shield, AlertCircle, Wrench, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TerminosCondicionesPage = () => {
    return (
        <main id="main-content" className="pt-20 bg-slate-50 min-h-screen">
            <SEO
                title="Términos y Condiciones"
                description="Términos y Condiciones de Servicio y Contratación de S.I.D.M.I. para instalaciones, climatización y mantenimiento industrial."
                canonical="/terminos"
            />

            {/* Header */}
            <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <div className="inline-flex p-3 bg-amber-500/20 text-gold rounded-2xl mb-4">
                        <FileCheck size={32} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
                        Términos y Condiciones de Servicio
                    </h1>
                    <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
                        Lineamientos comerciales, garantías y condiciones de ejecución para obras e instalaciones de S.I.D.M.I.
                    </p>
                    <p className="text-xs text-slate-400 mt-4">
                        Vigentes a partir de: Septiembre 2026
                    </p>
                </div>
            </section>

            {/* Content Container */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 space-y-10 text-slate-700 leading-relaxed text-sm md:text-base">

                        {/* Section 1 */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                                1. Disposiciones Generales y Aceptación
                            </h2>
                            <p className="mb-3">
                                El presente documento establece los Términos y Condiciones que rigen el uso del sitio web de <strong className="text-slate-900">{companyInfo.name.full}</strong> (<strong className="text-slate-900">{companyInfo.name.short}</strong>), así como las bases de contratación de nuestros servicios profesionales de climatización, refrigeración comercial e industrial, extracción, fabricación de ductos y mantenimiento electromecánico en los Estados Unidos Mexicanos.
                            </p>
                            <p>
                                Al navegar por este portal, solicitar presupuestos a través de nuestros formularios o cotizadores, o contratar nuestros servicios en obra, el cliente o usuario declara haber leído, comprendido y aceptado en su totalidad las condiciones aquí estipuladas.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                                2. Cotizaciones, Presupuestos y Precios
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                <li>
                                    <strong>Estimaciones Preliminares:</strong> Los montos arrojados por el cotizador interactivo o formularios del sitio web tienen carácter de estimación preliminar informativa y están sujetos a verificación mediante levantamiento técnico en sitio.
                                </li>
                                <li>
                                    <strong>Vigencia de Cotizaciones Formales:</strong> Salvo mención expresa en la propuesta formal emitida por nuestro departamento de ingeniería, las cotizaciones formales tienen una vigencia estándar de <strong>15 a 30 días naturales</strong> a partir de su fecha de emisión, debido a la fluctuación en los costos de materias primas (cobre, refrigerantes y lámina galvanizada).
                                </li>
                                <li>
                                    <strong>Moneda e Impuestos:</strong> Los precios cotizados se expresan en Moneda Nacional Mexicana (MXN) y desglosarán el Impuesto al Valor Agregado (IVA) correspondiente conforme a las disposiciones fiscales del SAT.
                                </li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                                3. Condiciones de Ejecución en Obra y Seguridad
                            </h2>
                            <p className="mb-3">
                                Para garantizar la integridad de las instalaciones y de nuestros técnicos especializados:
                            </p>
                            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
                                <li>El cliente facilitará los accesos seguros, permisos de trabajo en alturas o áreas confinadas, y las tomas de corriente o agua requeridas para las maniobras.</li>
                                <li>Todo el personal de S.I.D.M.I. cuenta con equipo de protección personal (EPP) certificado y sigue estrictos protocolos de seguridad industrial en apego a las normas NOM de la Secretaría del Trabajo y Previsión Social (STPS).</li>
                                <li>Cualquier modificación o trabajo extraordinario no contemplado en el catálogo de conceptos original deberá ser aprobado por escrito mediante orden de cambio antes de su ejecución.</li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                                4. Garantías de Equipos e Instalación
                            </h2>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                                <div className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-gold flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold text-slate-900">Garantía de Mano de Obra e Instalación:</p>
                                        <p className="text-sm text-slate-600">S.I.D.M.I. garantiza los trabajos de montaje, tendido de ductería, soldadura y conexión electromecánica durante un periodo de <strong>12 meses</strong> contra defectos de instalación.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-gold flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold text-slate-900">Garantía de Equipos y Compresores:</p>
                                        <p className="text-sm text-slate-600">Los equipos de aire acondicionado, chillers, condensadoras y compresores cuentan con la garantía directa del fabricante original, tramitada y respaldada por nuestro servicio técnico autorizado.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-3">
                                * Las garantías quedan sin efecto en casos de descargas eléctricas externas atribuibles a la red de suministro, negligencia del operador, siniestros naturales o intervención de personal ajeno a S.I.D.M.I.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                                5. Propiedad Intelectual
                            </h2>
                            <p>
                                Todos los contenidos, logotipos, marcas comerciales, fotografías de obras realizadas en campo, diagramas y textos exhibidos en este sitio web son propiedad exclusiva de <strong className="text-slate-900">{companyInfo.name.full}</strong> o se muestran con autorización legítima de nuestros clientes. Queda prohibida su reproducción parcial o total sin consentimiento previo por escrito.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                                6. Legislación Aplicable y Jurisdicción
                            </h2>
                            <p>
                                Para la interpretación, cumplimiento y resolución de cualquier controversia derivada del presente sitio web o de los contratos de servicio celebrados, las partes se someten expresamente a la legislación aplicable de los Estados Unidos Mexicanos y a la jurisdicción de los tribunales competentes de Tlalnepantla de Baz, Estado de México o de la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles por razón de sus domicilios presentes o futuros.
                            </p>
                        </div>

                        {/* Contact Card Footer */}
                        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <Link
                                to="/"
                                className="text-gold hover:text-gold-dark font-semibold text-sm transition-colors"
                            >
                                ← Volver a la página principal
                            </Link>
                            <Link
                                to="/privacidad"
                                className="text-slate-600 hover:text-slate-900 font-semibold text-sm transition-colors"
                            >
                                Consultar Aviso de Privacidad →
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default TerminosCondicionesPage;
