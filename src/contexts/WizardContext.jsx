import { createContext, useContext } from 'react';

// Create context for wizard modal control
export const WizardContext = createContext({
    openWizard: () => { },
});

// Hook to use wizard context
export const useWizard = () => {
    const context = useContext(WizardContext);
    if (!context) {
        throw new Error('useWizard must be used within WizardProvider');
    }
    return context;
};
