import React from 'react';
import { motion } from 'framer-motion';

const brands = [
    "JKB-Gold",
    "Superlon",
    "Quality NBR Solutions",
    "Godrej",
    "Floron",
    "Cruise",
    "Camipro",
    "Totaline"
];

const Brands = () => {
    return (
        <section style={{
            padding: 'var(--spacing-lg) 0',
            background: 'var(--bg-lighter)',
            borderBottom: '1px solid var(--glass-border)',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Trusted Brands We Stock
            </div>

            <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
                <div style={{ display: 'flex', width: '200%' }}> {/* Double width container */}
                    {/* First Loop */}
                    <motion.div
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, // Slow rotation
                            ease: "linear",
                        }}
                        style={{ display: 'flex', gap: 'var(--spacing-xxl)', whiteSpace: 'nowrap', paddingRight: 'var(--spacing-xxl)' }}
                    >
                        {[...brands, ...brands, ...brands].map((brand, index) => (
                            <span
                                key={index}
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '800',
                                    color: 'var(--text-muted)',
                                    opacity: 0.6,
                                    fontFamily: 'var(--font-heading)',
                                    display: 'inline-block'
                                }}
                            >
                                {brand}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Fade edges */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '50px',
                    height: '100%',
                    background: 'linear-gradient(to right, var(--bg-lighter), transparent)',
                    zIndex: 2
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '50px',
                    height: '100%',
                    background: 'linear-gradient(to left, var(--bg-lighter), transparent)',
                    zIndex: 2
                }}></div>
            </div>
        </section>
    );
};

export default Brands;
