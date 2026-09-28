// LocalStorage and Session utility functions for wizard state management

const WIZARD_KEY = 'wizard_status';
const WIZARD_SESSION_KEY = 'wizard_session_dismissed';

/**
 * Get wizard status from localStorage
 * @returns {string|null} 'completed', 'skipped', or null
 */
export const getWizardStatus = () => {
    try {
        return localStorage.getItem(WIZARD_KEY);
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return null;
    }
};

/**
 * Set wizard status in localStorage
 * @param {string} status - 'completed' or 'skipped'
 */
export const setWizardStatus = (status) => {
    try {
        localStorage.setItem(WIZARD_KEY, status);
        sessionStorage.setItem(WIZARD_SESSION_KEY, 'true');
    } catch (error) {
        console.error('Error writing to storage:', error);
    }
};

/**
 * Mark wizard as dismissed in current session
 */
export const dismissWizardForSession = () => {
    try {
        sessionStorage.setItem(WIZARD_SESSION_KEY, 'true');
    } catch (error) {
        console.error('Error setting session storage:', error);
    }
};

/**
 * Clear wizard status from localStorage
 * This will make the wizard appear again
 */
export const clearWizardStatus = () => {
    try {
        localStorage.removeItem(WIZARD_KEY);
        sessionStorage.removeItem(WIZARD_SESSION_KEY);
    } catch (error) {
        console.error('Error removing from storage:', error);
    }
};

/**
 * Check if wizard should be automatically popped up
 * Note: To ensure optimal UX and avoid mobile penalties, automatic popup is disabled on page load;
 * the wizard remains accessible via the 'Cotización' CTAs across the site.
 * @returns {boolean} false
 */
export const shouldShowWizard = () => {
    return false;
};
