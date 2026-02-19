// EmailJS Configuration
export const emailConfig = {
    // Your EmailJS Service ID (from EmailJS dashboard)
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,

    // Template ID for Wizard admin notifications
    wizardTemplateId: import.meta.env.VITE_EMAILJS_WIZARD_TEMPLATE_ID,

    // Template ID for Contact Form admin notifications
    contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,

    // Your EmailJS Public Key (from EmailJS dashboard)
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,

    // S.I.D.M.I. admin email
    adminEmail: 'sidmiservicios1@gmail.com',

    // WhatsApp Business number (format: +52XXXXXXXXXX)
    whatsappNumber: '+525573268042', // Primary contact number
};

/**
 * Format wizard selections into a readable breadcrumb
 * @param {Object} selections - Wizard selections object
 * @param {Object} wizardData - Wizard data structure
 * @returns {string} Formatted breadcrumb
 */
export const formatSelectionsBreadcrumb = (selections, wizardData) => {
    const parts = [];
    let counter = 1;

    if (selections.category) {
        const categoryData = wizardData[selections.category];
        parts.push(`${counter}. ${categoryData.name}`);
        counter++;
    }

    if (selections.subcategory) {
        const categoryData = wizardData[selections.category];
        const subcategoryData = categoryData.subcategories?.find(s => s.id === selections.subcategory);
        if (subcategoryData) {
            parts.push(`${counter}. ${subcategoryData.name}`);
            counter++;
        }
    }

    if (selections.option) {
        const categoryData = wizardData[selections.category];
        const subcategoryData = categoryData.subcategories?.find(s => s.id === selections.subcategory);
        const optionData = subcategoryData?.options?.find(o => o.id === selections.option) ||
            categoryData.options?.find(o => o.id === selections.option);
        if (optionData) {
            parts.push(`${counter}. ${optionData.name}`);
            counter++;
        }
    }

    if (selections.suboption) {
        const categoryData = wizardData[selections.category];
        const subcategoryData = categoryData.subcategories?.find(s => s.id === selections.subcategory);
        const optionData = subcategoryData?.options?.find(o => o.id === selections.option);
        const suboptionData = optionData?.suboptions?.find(so => so.id === selections.suboption);
        if (suboptionData) {
            parts.push(`${counter}. ${suboptionData.name}`);
        }
    }

    // Handle multiple selections (Mantenimiento Integral)
    if (selections.multipleOptions && selections.multipleOptions.length > 0) {
        const categoryData = wizardData[selections.category];
        const subcategoryData = categoryData.subcategories?.find(s => s.id === selections.subcategory);
        const options = subcategoryData?.options || categoryData.options;

        const selectedNames = selections.multipleOptions
            .map(id => options.find(o => o.id === id)?.name)
            .filter(Boolean);

        if (selectedNames.length > 0) {
            parts.push(`Servicios: ${selectedNames.join(', ')}`);
        }
    }

    return parts.join(', ');
};

/**
 * Format message for S.I.D.M.I. email
 * @param {Object} formData - Form data
 * @param {string} breadcrumb - Formatted selections breadcrumb
 * @returns {string} Formatted message
 */
export const formatSIDMIMessage = (formData, breadcrumb) => {
    let message = `Equipo S.I.D.M.I.\n\n`;
    message += `Hay una persona interesada en sus servicios:\n\n`;
    message += `Nombre: ${formData.nombre}\n`;
    message += `Teléfono: ${formData.telefono}\n`;
    message += `Email: ${formData.correo}\n`;

    if (formData.localidad) {
        message += `Ubicación: ${formData.localidad}\n`;
    }

    message += `\nServicio solicitado:\n${breadcrumb}\n\n`;
    message += `Por favor contáctelo de inmediato.`;

    return message;
};

/**
 * Format confirmation message for client email
 * @param {Object} formData - Form data
 * @param {string} breadcrumb - Formatted selections breadcrumb
 * @returns {string} Formatted message
 */
export const formatClientMessage = (formData, breadcrumb) => {
    const currentDate = new Date().toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    let message = `Estimado/a ${formData.nombre},\n\n`;
    message += `Gracias por contactar a Servicios Integrales de Mantenimiento e Instalaciones (S.I.D.M.I.).\n\n`;
    message += `Hemos recibido su solicitud de cotización y nuestro equipo la está revisando. `;
    message += `Nos pondremos en contacto con usted a la brevedad posible para proporcionarle la información solicitada.\n\n`;
    message += `Datos de su solicitud:\n`;
    message += `- Servicio: ${breadcrumb}\n`;
    message += `- Fecha de solicitud: ${currentDate}\n\n`;
    message += `Si tiene alguna pregunta urgente, no dude en contactarnos directamente al correo ${emailConfig.adminEmail}.\n\n`;
    message += `Atentamente,\n`;
    message += `Equipo S.I.D.M.I.`;

    return message;
};

/**
 * Format message for WhatsApp
 * @param {Object} formData - Form data
 * @param {string} breadcrumb - Formatted selections breadcrumb
 * @returns {string} Formatted message
 */
export const formatWhatsAppMessage = (formData, breadcrumb) => {
    let message = `Hola, soy ${formData.nombre}. `;
    message += `Estoy interesado en sus servicios de: ${breadcrumb}. `;
    message += `Mi teléfono es ${formData.telefono} y mi email es ${formData.correo}.`;

    return message;
};

/**
 * Open WhatsApp with pre-formatted message
 * @param {string} message - Message to send
 */
export const openWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${emailConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
};
