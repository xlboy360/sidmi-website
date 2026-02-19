import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/faq';

const FaqAccordion = () => {
    const [openId, setOpenId] = useState(null);

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
        <section id="faq" className="py-20 bg-gradient-to-b from-beige to-gold-light">
            <div className="container mx-auto px-4">
                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq) => {
                        const isOpen = openId === faq.id;

                        return (
                            <div
                                key={faq.id}
                                className="bg-cream rounded-lg overflow-hidden border border-transparent hover:border-gold transition-colors"
                            >
                                {/* Question Button */}
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    onKeyDown={(e) => handleKeyDown(e, faq.id)}
                                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${faq.id}`}
                                >
                                    <h3 className="text-lg font-semibold text-dark-text pr-4">
                                        {faq.question}
                                    </h3>
                                    <ChevronDown
                                        className={`text-gold flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                            }`}
                                        size={24}
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
                                    <div className="px-6 pb-6">
                                        <p className="text-medium-text leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FaqAccordion;
