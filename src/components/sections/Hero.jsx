import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { ChevronRight, Phone, MessageCircle } from 'lucide-react';
import heroBg from '../../assets/images/hero_bg_subtle.webp';

const Hero = () => {
    return (
        <div style={{
            height: '100vh',
            minHeight: '600px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background: 'var(--bg-dark)' // Strict white
        }}>
            {/* Background Effect */}
            <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.8, // Increased opacity since it's a subtle image
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'multiply' // Blends nicely with white
            }}></div>

            {/* Glowing Orbs - Subtle for Light Theme (Desktop Only) */}
            <motion.div
                className="hero-orb"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1], // Reduced opacity
                }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    zIndex: 0
                }}
            />

            <motion.div
                className="hero-orb"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--secondary-color) 0%, transparent 70%)',
                    filter: 'blur(100px)',
                    zIndex: 0
                }}
            />

            <style>{`
                @media (max-width: 768px) {
                    .hero-orb { display: none !important; }
                }
            `}</style>

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        color: 'var(--primary-color)',
                        textTransform: 'uppercase',
                        letterSpacing: '4px',
                        fontSize: '1rem',
                        fontWeight: '700',
                        marginBottom: 'var(--spacing-md)'
                    }}
                >
                    Welcome to Sharath Enterprises
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        lineHeight: 1.1,
                        marginBottom: 'var(--spacing-lg)',
                        background: 'linear-gradient(to right, var(--text-main), var(--primary-color))', // Theme gradient
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '800'
                    }}
                >
                    Complete AC & Refrigeration <br />
                    <span className="text-gradient">Spare Parts Solution</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        maxWidth: '700px',
                        margin: '0 auto var(--spacing-xl)',
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: 'var(--text-muted)'
                    }}
                >
                    From bolts to compressors, copper pipes to tools — we supply everything you need for industrial and residential cooling systems under one roof.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <Button to="/products">
                        View Products <ChevronRight size={18} />
                    </Button>
                    <Button variant="outline" onClick={() => window.open('https://wa.me/919892775134?text=Hello...', '_blank')}>
                        WhatsApp Enquiry <MessageCircle size={18} />
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
