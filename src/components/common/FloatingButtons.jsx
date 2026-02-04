import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons = () => {
    return (
        <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 999, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* WhatsApp */}
            <motion.a
                href="https://wa.me/919892775134?text=Hello..."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
                    color: '#fff'
                }}
            >
                <MessageCircle size={28} />
            </motion.a>

            {/* Phone - Visible mostly on mobile via CSS usually, but here we keep it sticky for all or hide on desktop if requested? 
                 User asked for "Sticky Call button on mobile" and "Floating WhatsApp button". 
                 We'll keep both floating for now, maybe hide Phone on desktop if it's redundant with navbar.
             */}
            <style>{`
                .floating-call { display: flex; }
                @media (min-width: 769px) {
                    .floating-call { display: none; }
                }
             `}</style>
            <motion.a
                href="tel:9892775134"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="floating-call"
                style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'var(--primary-color)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    color: '#fff' // White icon
                }}
            >
                <Phone size={24} />
            </motion.a>
        </div>
    );
};

export default FloatingButtons;
