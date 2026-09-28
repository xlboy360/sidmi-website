import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../data/faq';
import { useWizard } from '../contexts/WizardContext';

const FaqAccordion = () => {
    const [openId, setOpenId] = useState(null);
    const { openWizard } = useWizard();

    const toggleFaq = (id) => {
        setOpenId(openId === id ? null : id);
    };

    // Handle keyboard interaction
    const handleKeyDown = (e, id) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleFaq(id);
        }
    };

    return (
        <section id="faq" className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq) => {
                        const isOpen = openId === faq.id;

                        return (
                            <div
                                key={faq.id}
                                className={`bg-white rounded-xl overflow-hidden border transition-all duration-200 shadow-sm ${isOpen ? 'border-gold shadow-md ring-1 ring-amber-100' : 'border-slate-200 hover:border-slate-300'
                                    }`}
                            >
                                {/* Question Button */}
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    onKeyDown={(e) => handleKeyDown(e, faq.id)}
                                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${faq.id}`}
                                >
                                    <div className="flex items-center gap-3 pr-4">
                                        <HelpCircle size={20} className={isOpen ? 'text-gold' : 'text-slate-400'} />
                                        <h3 className={`text-base md:text-lg font-bold transition-colors ${isOpen ? 'text-gold-dark' : 'text-slate-900'
                                            }`}>
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <ChevronDown
                                        className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'text-gold rotate-180' : 'text-slate-400'
                                            }`}
                                        size={22}
                                    />
                                </button>

                                {/* Answer */}
                                <div
                                    id={`faq-answer-${faq.id}`}
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'
                                        }`}
                                    role="region"
                                    aria-labelledby={`faq-question-${faq.id}`}
                                >
                                    <div className="px-6 pb-6 pt-1 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Question CTA */}
                <div className="mt-14 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                        ¿Tienes una pregunta específica sobre tu instalación?
                    </h3>
                    <p className="text-slate-600 text-sm mb-6 max-w-lg mx-auto">
                        Nuestro equipo de ingeniería revisa cada caso de forma personalizada.
                    </p>
                    <button
                        onClick={openWizard}
                        className="bg-gold hover:bg-gold-dark text-white font-bold px-6 py-3 rounded-xl transition-all shadow hover:scale-105 cursor-pointer text-sm"
                    >
                        Solicitar Asesoría Técnica
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FaqAccordion;
