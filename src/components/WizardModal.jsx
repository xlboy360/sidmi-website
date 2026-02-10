import { useState, useEffect, useRef } from 'react';
import { X, ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { setWizardStatus } from '../utils/localStorage';
import { wizardData } from '../data/wizardData';
import {
    emailConfig,
    formatSelectionsBreadcrumb,
    formatSIDMIMessage,
    formatClientMessage,
    formatWhatsAppMessage,
    openWhatsApp
} from '../config/emailConfig';

const WizardModal = ({ isOpen, onClose }) => {
    const [currentStep, setCurrentStep] = useState('category');
    const [selections, setSelections] = useState({
        category: null,
        subcategory: null,
        option: null,
        suboption: null,
        item: null,
        multipleOptions: [] // For multi-select (Mantenimiento Integral)
    });
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        localidad: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const modalRef = useRef(null);
    const firstFocusableRef = useRef(null);

    // Focus trap
    useEffect(() => {
        if (isOpen && firstFocusableRef.current) {
            firstFocusableRef.current.focus();
        }
    }, [isOpen, currentStep]);

    // Handle Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                handleClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const resetWizard = () => {
        setCurrentStep('category');
        setSelections({
            category: null,
            subcategory: null,
            option: null,
            suboption: null,
            item: null,
            multipleOptions: []
        });
        setFormData({
            nombre: '',
            telefono: '',
            correo: '',
            localidad: ''
        });
        setFormErrors({});
    };

    // Generate breadcrumb from selections
    const getBreadcrumb = () => {
        const crumbs = [];
        let counter = 1;

        if (selections.category) {
            const categoryData = wizardData[selections.category];
            crumbs.push(`${counter}. ${categoryData.name}`);
            counter++;
        }

        if (selections.subcategory) {
            const categoryData = wizardData[selections.category];
            const subcategoryData = categoryData.subcategories?.find(s => s.id === selections.subcategory);
            if (subcategoryData) {
                crumbs.push(`${counter}. ${subcategoryData.name}`);
                counter++;
            }
        }

        if (selections.option) {
            const categoryData = wizardData[selections.category];
            const subcategoryData = categoryData.subcategories?.find(s => s.id === selections.subcategory);
            const optionData = subcategoryData?.options?.find(o => o.id === selections.option) ||
                categoryData.options?.find(o => o.id === selections.option);
            if (optionData) {
                crumbs.push(`${counter}. ${optionData.name}`);
                counter++;
            }
        }

        if (selections.suboption) {
            const categoryData = wizardData[selections.category];
            const subcategoryData = categoryData.subcategories?.find(s => s.id === selections.subcategory);
            const optionData = subcategoryData?.options?.find(o => o.id === selections.option);
            const suboptionData = optionData?.suboptions?.find(so => so.id === selections.suboption);
            if (suboptionData) {
                crumbs.push(`${counter}. ${suboptionData.name}`);
            }
        }

        return crumbs.join(' > ');
    };

    const handleClose = () => {
        onClose();
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const handleCategorySelect = (categoryKey) => {
        setSelections({ ...selections, category: categoryKey, multipleOptions: [] });
        const categoryData = wizardData[categoryKey];

        if (categoryData.subcategories) {
            setCurrentStep('subcategory');
        } else if (categoryData.options) {
            setCurrentStep('options');
        }
    };

    const handleSubcategorySelect = (subcategoryId) => {
        const categoryData = wizardData[selections.category];
        const subcategory = categoryData.subcategories.find(s => s.id === subcategoryId);

        setSelections({ ...selections, subcategory: subcategoryId, multipleOptions: [] });

        if (subcategory.directToForm) {
            setCurrentStep('form');
        } else if (subcategory.options) {
            setCurrentStep('options');
        }
    };

    const handleOptionSelect = (optionId) => {
        const categoryData = wizardData[selections.category];
        const subcategoryData = categoryData.subcategories?.find(s => s.id === selections.subcategory);
        const option = subcategoryData?.options?.find(o => o.id === optionId) ||
            categoryData.options?.find(o => o.id === optionId);

        // Check if this is Mantenimiento Integral (multi-select)
        const isMantenimientoIntegral = selections.category === 'mantenimiento' &&
            selections.subcategory === 'integral';

        if (isMantenimientoIntegral) {
            // Toggle selection for multi-select
            const currentSelections = selections.multipleOptions || [];
            const isSelected = currentSelections.includes(optionId);

            const newSelections = isSelected
                ? currentSelections.filter(id => id !== optionId)
                : [...currentSelections, optionId];

            setSelections({ ...selections, multipleOptions: newSelections });
            // Don't advance step, wait for "Siguiente" button
            return;
        }

        setSelections({ ...selections, option: optionId });

        if (option.directToForm) {
            setCurrentStep('form');
        } else if (option.suboptions) {
            setCurrentStep('suboptions');
        } else if (option.items) {
            setCurrentStep('items');
        } else {
            setCurrentStep('form');
        }
    };

    const handleSuboptionSelect = (suboptionId) => {
        const categoryData = wizardData[selections.category];
        const subcategoryData = categoryData.subcategories.find(s => s.id === selections.subcategory);
        const optionData = subcategoryData.options.find(o => o.id === selections.option);
        const suboption = optionData.suboptions.find(so => so.id === suboptionId);

        setSelections({ ...selections, suboption: suboptionId });

        // For Instalación > Ductería > Extracción/Ventilación, go directly to form
        if (selections.category === 'instalacion' && selections.subcategory === 'ducteria') {
            setCurrentStep('form');
        } else if (suboption.items) {
            setCurrentStep('items');
        } else {
            setCurrentStep('form');
        }
    };

    const handleItemSelect = (item) => {
        setSelections({ ...selections, item });
        setCurrentStep('form');
    };

    const handleBack = () => {
        if (currentStep === 'form') {
            if (selections.item) {
                setCurrentStep('items');
            } else if (selections.suboption) {
                setCurrentStep('suboptions');
            } else if (selections.option) {
                setCurrentStep('options');
            } else if (selections.subcategory) {
                setCurrentStep('subcategory');
            } else {
                setCurrentStep('category');
            }
        } else if (currentStep === 'items') {
            setCurrentStep('suboptions');
        } else if (currentStep === 'suboptions') {
            setCurrentStep('options');
        } else if (currentStep === 'options') {
            if (selections.subcategory) {
                setCurrentStep('subcategory');
            } else {
                setCurrentStep('category');
            }
        } else if (currentStep === 'subcategory') {
            setCurrentStep('category');
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.nombre.trim()) {
            errors.nombre = 'El nombre es requerido';
        }

        if (!formData.telefono.trim()) {
            errors.telefono = 'El teléfono es requerido';
        } else if (!/^\d{10}$/.test(formData.telefono.replace(/\s/g, ''))) {
            errors.telefono = 'El teléfono debe tener 10 dígitos';
        }

        if (!formData.correo.trim()) {
            errors.correo = 'El correo es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
            errors.correo = 'El correo no es válido';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Format breadcrumb and messages
            const breadcrumb = formatSelectionsBreadcrumb(selections, wizardData);
            const sidmiMessage = formatSIDMIMessage(formData, breadcrumb);
            const clientMessage = formatClientMessage(formData, breadcrumb);
            const whatsappMessage = formatWhatsAppMessage(formData, breadcrumb);

            // ===== DEMO: Console logging =====
            console.log('='.repeat(60));
            console.log('📧 EMAIL TO S.I.D.M.I. (contacto@sidmi.com.mx)');
            console.log('='.repeat(60));
            console.log(sidmiMessage);
            console.log('\n');

            console.log('='.repeat(60));
            console.log(`📧 CONFIRMATION EMAIL TO CLIENT (${formData.correo})`);
            console.log('='.repeat(60));
            console.log(clientMessage);
            console.log('\n');

            console.log('='.repeat(60));
            console.log('💬 WHATSAPP MESSAGE');
            console.log('='.repeat(60));
            console.log(whatsappMessage);
            console.log('='.repeat(60));

            // ===== EmailJS Integration (uncomment when configured) =====
            /*
            // Initialize EmailJS
            emailjs.init(emailConfig.publicKey);

            // Send email to S.I.D.M.I.
            await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateIdSIDMI,
                {
                    to_email: emailConfig.sidmiEmail,
                    from_name: formData.nombre,
                    from_email: formData.correo,
                    from_phone: formData.telefono,
                    from_location: formData.localidad || 'No especificada',
                    service_details: breadcrumb,
                    message: sidmiMessage
                }
            );

            // Send confirmation email to client
            await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateIdClient,
                {
                    to_email: formData.correo,
                    to_name: formData.nombre,
                    service_details: breadcrumb,
                    message: clientMessage
                }
            );
            */

            // Mark wizard as completed
            setWizardStatus('completed');

            // Open WhatsApp with pre-formatted message
            openWhatsApp(whatsappMessage);

            // Show success message
            alert('✅ ¡Solicitud enviada exitosamente!\n\nHemos recibido tu solicitud y te contactaremos pronto.\n\nSe abrirá WhatsApp para que puedas enviar tu mensaje directamente.');

            // Reset and close wizard
            resetWizard();
            onClose();

        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            alert('❌ Hubo un error al enviar tu solicitud. Por favor intenta nuevamente o contáctanos directamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Calculate progress
    const getProgress = () => {
        let steps = 0;
        let completed = 0;

        if (selections.category) {
            steps++;
            completed++;
        }

        const categoryData = selections.category ? wizardData[selections.category] : null;

        if (categoryData?.subcategories) {
            steps++;
            if (selections.subcategory) completed++;
        }

        if (categoryData?.options || categoryData?.subcategories?.find(s => s.id === selections.subcategory)?.options) {
            steps++;
            if (selections.option || selections.multipleOptions.length > 0) completed++;
        }

        steps++; // Form step
        if (currentStep === 'form') completed++;

        return (completed / steps) * 100;
    };

    const progress = getProgress();

    // Render functions
    const renderCategorySelection = () => {
        return (
            <div>
                <h3 className="text-xl font-semibold text-dark-text mb-6">
                    ¿Qué servicio estás buscando?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(wizardData).map(([key, data]) => (
                        <button
                            key={key}
                            onClick={() => handleCategorySelect(key)}
                            className="p-6 bg-beige rounded-lg border-2 border-transparent hover:border-gold transition-all text-left group"
                        >
                            <h4 className="text-lg font-semibold text-dark-text group-hover:text-gold transition-colors">
                                {data.name}
                            </h4>
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const renderSubcategorySelection = () => {
        const categoryData = wizardData[selections.category];

        return (
            <div>
                <h3 className="text-xl font-semibold text-dark-text mb-6">
                    Selecciona una subcategoría
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categoryData.subcategories.map((subcategory) => (
                        <button
                            key={subcategory.id}
                            onClick={() => handleSubcategorySelect(subcategory.id)}
                            className="p-6 bg-beige rounded-lg border-2 border-transparent hover:border-gold transition-all text-left group"
                        >
                            <h4 className="text-lg font-semibold text-dark-text group-hover:text-gold transition-colors">
                                {subcategory.name}
                            </h4>
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const renderOptionsSelection = () => {
        const categoryData = wizardData[selections.category];
        const subcategoryData = categoryData.subcategories?.find(s => s.id === selections.subcategory);
        const options = subcategoryData?.options || categoryData.options;

        // Check if this is Mantenimiento Integral (multi-select)
        const isMantenimientoIntegral = selections.category === 'mantenimiento' &&
            selections.subcategory === 'integral';

        return (
            <div>
                <h3 className="text-xl font-semibold text-dark-text mb-2">
                    {isMantenimientoIntegral ? 'Selecciona uno o más servicios' : 'Selecciona una opción'}
                </h3>
                {isMantenimientoIntegral && (
                    <p className="text-sm text-medium-text mb-6">
                        Puedes seleccionar múltiples servicios de la lista
                    </p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {options.map((option) => {
                        const isSelected = selections.multipleOptions.includes(option.id);

                        return (
                            <button
                                key={option.id}
                                onClick={() => handleOptionSelect(option.id)}
                                className={`p-6 rounded-lg border-2 transition-all text-left group relative ${isSelected
                                    ? 'bg-gold bg-opacity-20 border-gold'
                                    : 'bg-beige border-transparent hover:border-gold'
                                    }`}
                            >
                                {isMantenimientoIntegral && isSelected && (
                                    <div className="absolute top-3 right-3 bg-gold text-white rounded-full p-1">
                                        <Check size={16} />
                                    </div>
                                )}
                                <h4 className={`text-lg font-semibold transition-colors ${isSelected ? 'text-gold-dark' : 'text-dark-text group-hover:text-gold'
                                    }`}>
                                    {option.name}
                                </h4>
                                {option.description && (
                                    <p className="text-sm text-medium-text mt-2">
                                        {option.description}
                                    </p>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Show "Siguiente" button for multi-select when at least one is selected */}
                {isMantenimientoIntegral && selections.multipleOptions.length > 0 && (
                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={() => setCurrentStep('form')}
                            className="bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-dark transition-all flex items-center gap-2"
                        >
                            Siguiente
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>
        );
    };

    const renderSuboptionsSelection = () => {
        const categoryData = wizardData[selections.category];
        const subcategoryData = categoryData.subcategories.find(s => s.id === selections.subcategory);
        const optionData = subcategoryData.options.find(o => o.id === selections.option);

        return (
            <div>
                <h3 className="text-xl font-semibold text-dark-text mb-6">
                    Selecciona el tipo
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {optionData.suboptions.map((suboption) => (
                        <button
                            key={suboption.id}
                            onClick={() => handleSuboptionSelect(suboption.id)}
                            className="p-6 bg-beige rounded-lg border-2 border-transparent hover:border-gold transition-all text-left group"
                        >
                            <h4 className="text-lg font-semibold text-dark-text group-hover:text-gold transition-colors">
                                {suboption.name}
                            </h4>
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const renderItemsSelection = () => {
        const categoryData = wizardData[selections.category];
        const subcategoryData = categoryData.subcategories.find(s => s.id === selections.subcategory);
        const optionData = subcategoryData.options.find(o => o.id === selections.option);
        const suboptionData = optionData.suboptions.find(so => so.id === selections.suboption);

        return (
            <div>
                <h3 className="text-xl font-semibold text-dark-text mb-6">
                    Selecciona una opción
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {suboptionData.items.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleItemSelect(item)}
                            className="p-6 bg-beige rounded-lg border-2 border-transparent hover:border-gold transition-all text-left group"
                        >
                            <h4 className="text-lg font-semibold text-dark-text group-hover:text-gold transition-colors">
                                {item}
                            </h4>
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const renderContactForm = () => {
        return (
            <div>
                <h3 className="text-xl font-semibold text-dark-text mb-6">
                    Completa tus datos para recibir tu cotización
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-dark-text mb-2">
                            Nombre <span className="text-gold">*</span>
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                            className={`w-full px-4 py-3 rounded-lg border-2 ${formErrors.nombre ? 'border-red-500' : 'border-gold-light'
                                } focus:border-gold focus:outline-none transition-colors`}
                            placeholder="Tu nombre completo"
                        />
                        {formErrors.nombre && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.nombre}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="telefono" className="block text-sm font-medium text-dark-text mb-2">
                            Número de teléfono <span className="text-gold">*</span>
                        </label>
                        <input
                            type="tel"
                            id="telefono"
                            value={formData.telefono}
                            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                            className={`w-full px-4 py-3 rounded-lg border-2 ${formErrors.telefono ? 'border-red-500' : 'border-gold-light'
                                } focus:border-gold focus:outline-none transition-colors`}
                            placeholder="10 dígitos"
                        />
                        {formErrors.telefono && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.telefono}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="correo" className="block text-sm font-medium text-dark-text mb-2">
                            Correo electrónico <span className="text-gold">*</span>
                        </label>
                        <input
                            type="email"
                            id="correo"
                            value={formData.correo}
                            onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                            className={`w-full px-4 py-3 rounded-lg border-2 ${formErrors.correo ? 'border-red-500' : 'border-gold-light'
                                } focus:border-gold focus:outline-none transition-colors`}
                            placeholder="tu@email.com"
                        />
                        {formErrors.correo && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.correo}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="localidad" className="block text-sm font-medium text-dark-text mb-2">
                            Localidad (opcional)
                        </label>
                        <input
                            type="text"
                            id="localidad"
                            value={formData.localidad}
                            onChange={(e) => setFormData({ ...formData, localidad: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border-2 border-gold-light focus:border-gold focus:outline-none transition-colors"
                            placeholder="Ciudad o municipio"
                        />
                    </div>

                    <div className="flex gap-4 pt-2">
                        <button
                            type="button"
                            onClick={handleBack}
                            disabled={isSubmitting}
                            className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-semibold px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft size={20} />
                            Atrás
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                        </button>
                    </div>
                </form>
            </div>
        );
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                style={{
                    backgroundColor: 'rgba(184, 134, 11, 0.15)',
                    backdropFilter: 'blur(12px) brightness(0.7)',
                    WebkitBackdropFilter: 'blur(12px) brightness(0.7)'
                }}
                onClick={handleBackdropClick}
                role="dialog"
                aria-modal="true"
                aria-labelledby="wizard-title"
            >
                <motion.div
                    ref={modalRef}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-cream rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gold-light">
                        <div className="flex-1">
                            <h2 id="wizard-title" className="text-2xl font-bold text-dark-text">
                                Obtén tu Cotización Gratuita
                            </h2>
                            {/* Breadcrumb */}
                            {getBreadcrumb() && (
                                <p className="text-sm text-medium-text mt-2">
                                    {getBreadcrumb()}
                                </p>
                            )}
                        </div>
                        <button
                            ref={firstFocusableRef}
                            onClick={handleClose}
                            className="text-dark-text hover:text-gold transition-colors p-2 ml-4"
                            aria-label="Cerrar asistente"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="px-6 pt-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-dark-text">Progreso</span>
                            <span className="text-sm text-gold">{Math.round(progress)}%</span>
                        </div>
                        <div className="w-full bg-beige rounded-full h-2">
                            <div
                                className="bg-gold h-2 rounded-full transition-all duration-300"
                                style={{ width: `${progress}%` }}
                                role="progressbar"
                                aria-valuenow={progress}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {currentStep === 'category' && renderCategorySelection()}
                        {currentStep === 'subcategory' && renderSubcategorySelection()}
                        {currentStep === 'options' && renderOptionsSelection()}
                        {currentStep === 'suboptions' && renderSuboptionsSelection()}
                        {currentStep === 'items' && renderItemsSelection()}
                        {currentStep === 'form' && renderContactForm()}
                    </div>

                    {/* Footer with Back button */}
                    {currentStep !== 'category' && currentStep !== 'form' && (
                        <div className="px-6 pb-6">
                            <button
                                onClick={handleBack}
                                className="text-gold hover:text-gold-dark transition-colors flex items-center gap-2 font-medium"
                            >
                                <ChevronLeft size={20} />
                                Atrás
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default WizardModal;
