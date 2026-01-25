import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "What are your business hours?",
        answer: "We are open Monday to Sunday from 9:00 AM to 8:00 PM. We operate all days of the week to ensure you can get the parts you need when you need them."
    },
    {
        question: "Do you deliver spare parts?",
        answer: "Yes, we offer same-day delivery within Mumbai for urgent orders. For other locations, we can arrange shipping through reliable courier services."
    },
    {
        question: "Are all your products genuine?",
        answer: "Absolutely. We source all our products from authorized distributors and globally recognized manufacturers. Every part comes with proper documentation and warranty."
    },
    {
        question: "Can you help me find the right part for my AC unit?",
        answer: "Yes! Our knowledgeable team can help you identify the exact part you need. Just provide us with your AC model number, and we'll guide you to the right component."
    },
    {
        question: "Do you offer bulk discounts for contractors?",
        answer: "Yes, we provide special pricing for HVAC contractors and businesses who purchase in bulk. Contact us directly to discuss your requirements."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept cash, UPI, credit/debit cards, and bank transfers. For regular customers, we also offer credit terms."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '30px', color: 'var(--text-main)' }}>
                Frequently Asked Questions
            </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="glass-panel"
                        style={{
                            padding: '20px',
                            cursor: 'pointer',
                            borderRadius: 'var(--radius-lg)',
                            border: openIndex === index ? '1px solid var(--primary-color)' : '1px solid var(--glass-border)'
                        }}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0 }}>
                                {faq.question}
                            </h3>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ color: 'var(--primary-color)' }}
                            >
                                <ChevronDown size={24} />
                            </motion.div>
                        </div>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <p style={{
                                        marginTop: '15px',
                                        color: 'var(--text-muted)',
                                        lineHeight: '1.6',
                                        fontSize: '0.95rem'
                                    }}>
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
