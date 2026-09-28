// Google Analytics 4 (GA4) Integration Helper

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * Initialize Google Analytics 4 script dynamically
 */
export const initGA = () => {
    if (!GA_ID || typeof window === 'undefined') return;

    // Check if user has consented to analytics cookies
    const consent = localStorage.getItem('cookie_consent');
    if (consent === 'declined') return;

    // Avoid multiple script injections
    if (document.getElementById('ga-script')) return;

    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_ID, {
        anonymize_ip: true,
        send_page_view: false, // We manually send page_view via Router
    });

    console.log(`📊 Google Analytics initialized with ID: ${GA_ID}`);
};

/**
 * Track page views
 * @param {string} path - URL path
 * @param {string} title - Page title
 */
export const trackPageView = (path, title) => {
    if (typeof window !== 'undefined' && window.gtag && GA_ID) {
        window.gtag('event', 'page_view', {
            page_path: path,
            page_title: title || document.title,
            page_location: window.location.href,
        });
    }
};

/**
 * Track custom conversion events
 * @param {string} action - Event name (e.g. 'whatsapp_click', 'quote_started', 'form_submitted')
 * @param {Object} params - Event parameters
 */
export const trackEvent = (action, params = {}) => {
    if (typeof window !== 'undefined' && window.gtag && GA_ID) {
        window.gtag('event', action, params);
    } else {
        // Log in development if not configured
        if (import.meta.env.DEV) {
            console.log(`[Analytics Event: ${action}]`, params);
        }
    }
};
