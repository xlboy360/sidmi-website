import SEO from '../components/SEO';
import { companyInfo } from '../data/companyInfo';
import { Shield, Lock, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const PoliticaPrivacidadPage = () => {
    return (
        <main id="main-content" className="pt-20 bg-slate-50 min-h-screen">
            <SEO
                title="Aviso de Privacidad"
                description="Aviso de Privacidad integral de S.I.D.M.I. conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)."
                canonical="/privacidad"
            />

            {/* Header */}
            <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <div className="inline-flex p-3 bg-amber-500/20 text-gold rounded-2xl mb-4">
                        <Shield size={32} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
                        Aviso de Privacidad Integral
                    </h1>
                    <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
                        En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de los Estados Unidos Mexicanos.
                    </p>
                    <p className="text-xs text-slate-400 mt-4">
                        Última actualización: Septiembre 2026
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
                                1. Identidad y Domicilio del Responsable
                            </h2>
                            <p className="mb-3">
                                <strong className="text-slate-900">{companyInfo.name.full}</strong>, comercialmente conocida como <strong className="text-slate-900">{companyInfo.name.short}</strong>, legalmente representada por <strong className="text-slate-900">{companyInfo.legal.manager}</strong> ({companyInfo.legal.managerTitle}), con Registro Federal de Contribuyentes (RFC) <strong className="font-mono text-slate-900">{companyInfo.legal.rfc}</strong>, con domicilio fiscal y operativo en:
                            </p>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-800 font-medium my-3">
                                📍 {companyInfo.contact.address}, {companyInfo.contact.city}, {companyInfo.contact.state}, C.P. {companyInfo.contact.zipCode}, México.
                            </div>
                            <p>
                                Es la entidad responsable del tratamiento, uso y protección de sus datos personales, garantizando su confidencialidad bajo los más altos estándares éticos y de seguridad de la información.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                                2. Datos Personales que Recabamos
                            </h2>
                            <p className="mb-3">
                                Para las finalidades descritas en el presente aviso, podemos recabar sus datos personales a través de formularios en línea, cotizadores interactivos, llamadas telefónicas, correo electrónico o mensajería instantánea (WhatsApp):
                            </p>
                            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
                                <li><strong>Datos de Identificación y Contacto:</strong> Nombre completo, razón social de la empresa, teléfono fijo o móvil, correo electrónico profesional y ubicación o municipio de la obra o inmueble.</li>
                                <li><strong>Datos Técnicos de Proyecto:</strong> Medidas de instalaciones, tipo de equipo a suministrar o reparar, requerimientos técnicos y especificaciones electromecánicas.</li>
                                <li><strong>Datos de Facturación:</strong> Registro Federal de Contribuyentes (RFC), domicilio fiscal, uso de CFDI y constancia de situación fiscal (exclusivamente en caso de contratación formal de servicios).</li>
                            </ul>
                            <div className="mt-4 p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-900 text-xs md:text-sm">
                                ℹ️ <strong>Importante:</strong> S.I.D.M.I. <strong>no</strong> solicita ni recaba datos personales sensibles (como origen racial, estado de salud presente o futuro, creencias religiosas o preferencias individuales).
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                                3. Finalidades del Tratamiento de los Datos
                            </h2>
                            <p className="mb-3 font-semibold text-slate-800">Finalidades Primarias (necesarias para la relación comercial):</p>
                            <ul className="list-disc pl-6 space-y-1 text-slate-600 mb-4">
                                <li>Atender, procesar y responder sus solicitudes de contacto e información técnica.</li>
                                <li>Elaborar cotizaciones, levantamientos y presupuestos a la medida para proyectos de climatización, refrigeración, ductería y mantenimiento.</li>
                                <li>Coordinar visitas técnicas en sitio con nuestro personal especializado.</li>
                                <li>Formalizar la contratación de servicios y emisión de comprobantes fiscales (CFDI).</li>
                                <li>Brindar servicio de soporte técnico de emergencia 24/7 y dar seguimiento a pólizas de mantenimiento preventivo.</li>
                            </ul>
                            <p className="mb-3 font-semibold text-slate-800">Finalidades Secundarias (no indispensables pero que mejoran el servicio):</p>
                            <ul className="list-disc pl-6 space-y-1 text-slate-600">
                                <li>Encuestas de satisfacción sobre la calidad de nuestros servicios y montajes en obra.</li>
                                <li>Envío ocasional de información sobre nuevas tecnologías, normativas de ahorro energético o promociones en pólizas de mantenimiento.</li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                                4. Transferencia de Datos Personales
                            </h2>
                            <p>
                                Le informamos que sus datos personales <strong>no son vendidos, rentados ni transferidos a terceros</strong> ajenos a la prestación de nuestros servicios, salvo aquellas excepciones previstas en el artículo 37 de la LFPDPPP, tales como mandatos judiciales de autoridades competentes o proveedores de infraestructura tecnológica estrictamente necesarios para la operación del sitio (ej. servicios de entrega de correo electrónico y hosting seguro).
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                                5. Derechos ARCO y Revocación del Consentimiento
                            </h2>
                            <p className="mb-3">
                                Usted tiene derecho en todo momento a ejercer sus derechos de <strong>Acceso, Rectificación, Cancelación y Oposición (Derechos ARCO)</strong> al tratamiento de sus datos personales, así como a revocar el consentimiento que nos haya otorgado.
                            </p>
                            <p className="mb-3">
                                Para ejercer cualquiera de estos derechos, deberá enviar una solicitud por escrito al correo oficial:
                            </p>
                            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-slate-900 my-4">
                                <p className="font-bold flex items-center gap-2 mb-1">
                                    <Mail size={18} className="text-gold" />
                                    <span>Correo del Responsable de Datos:</span>
                                </p>
                                <a href="mailto:sidmiservicios@hotmail.com" className="text-gold font-semibold hover:underline">
                                    sidmiservicios@hotmail.com
                                </a>
                                <p className="text-xs text-slate-600 mt-2">
                                    La solicitud deberá contener: nombre del titular, documento que acredite su identidad, descripción clara de los datos respecto de los que busca ejercer algún derecho ARCO y medio de respuesta. Daremos respuesta en un plazo no mayor a 20 días hábiles.
                                </p>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                                6. Uso de Cookies y Tecnologías de Rastreo
                            </h2>
                            <p className="mb-3">
                                Este sitio web utiliza cookies técnicas para garantizar el correcto funcionamiento del portal, así como cookies analíticas para medir el tráfico y mejorar la experiencia de usuario.
                            </p>
                            <p>
                                Usted puede configurar su navegador en cualquier momento para bloquear o rechazar las cookies, o utilizar el banner de configuración de privacidad disponible en el sitio web. Tenga en cuenta que deshabilitar ciertas cookies técnicas podría limitar algunas funcionalidades interactivas (como el cotizador en línea).
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                                7. Modificaciones al Aviso de Privacidad
                            </h2>
                            <p>
                                Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente Aviso de Privacidad para la atención de novedades legislativas, jurisprudenciales o políticas internas. Cualquier modificación estará disponible públicamente en esta misma página web.
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
                                to="/terminos"
                                className="text-slate-600 hover:text-slate-900 font-semibold text-sm transition-colors"
                            >
                                Consultar Términos y Condiciones →
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default PoliticaPrivacidadPage;
