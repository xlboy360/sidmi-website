// LocalStorage utility functions for wizard state management

const WIZARD_KEY = 'wizard_status';

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
    } catch (error) {
        console.error('Error writing to localStorage:', error);
    }
};

/**
 * Clear wizard status from localStorage
 * This will make the wizard appear again
 */
export const clearWizardStatus = () => {
    try {
        localStorage.removeItem(WIZARD_KEY);
    } catch (error) {
        console.error('Error removing from localStorage:', error);
    }
};

/**
 * Check if wizard should be shown
 * @returns {boolean} true if wizard should be shown
 */
export const shouldShowWizard = () => {
    const status = getWizardStatus();
    // Only hide wizard if it has been completed (form submitted)
    // Closing/skipping will not prevent it from showing again
    return status !== 'completed';
};
