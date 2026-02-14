import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

const SuccessModal = ({ isOpen, onClose, title, message }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/30"
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="bg-cream rounded-lg max-w-md w-full p-8 shadow-2xl relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-medium-text hover:text-gold transition-colors"
                            aria-label="Cerrar"
                        >
                            <X size={24} />
                        </button>

                        {/* Success Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <Check size={32} className="text-white" strokeWidth={3} />
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-dark-text text-center mb-4">
                            {title}
                        </h3>

                        {/* Message */}
                        <p className="text-medium-text text-center mb-6 leading-relaxed">
                            {message}
                        </p>

                        {/* Action Button */}
                        <button
                            onClick={onClose}
                            className="w-full bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-dark transition-all"
                        >
                            Entendido
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SuccessModal;
