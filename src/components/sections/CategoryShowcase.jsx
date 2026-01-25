import React from 'react';
import Section from '../common/Section';
import { motion } from 'framer-motion';
import { Wrench, Wind, Zap, Hammer, ShieldCheck, Fan, Settings, Battery } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    { id: 'copper', title: 'Copper Pipes & Rods', description: 'High-quality copper fittings.', icon: 'Wrench' },
    { id: 'compressors', title: 'Compressors', description: 'Rotary, Reciprocating, and Scroll.', icon: 'Zap' },
    { id: 'capacitors', title: 'Capacitors', description: 'Running and starting capacitors.', icon: 'Battery' },
    { id: 'tools', title: 'AC Tools', description: 'Professional installation tools.', icon: 'Hammer' },
    { id: 'insulation', title: 'Insulation Materials', description: 'Thermal insulation tapes and tubes.', icon: 'ShieldCheck' },
    { id: 'gases', title: 'Refrigerant Gases', description: 'Top-grade cooling gases (R22, R410A).', icon: 'Wind' },
    { id: 'motors', title: 'Motors & Fans', description: 'Durable motors for indoor/outdoor.', icon: 'Fan' },
    { id: 'valves', title: 'Valves & Fittings', description: 'Precision brass valves.', icon: 'Settings' },
];

const iconMap = {
    Wind: Wind,
    Zap: Zap,
    Wrench: Wrench,
    Hammer: Hammer,
    ShieldCheck: ShieldCheck,
    Fan: Fan,
    Settings: Settings,
    Battery: Battery
};

const CategoryShowcase = () => {
    return (
        <Section className="container" id="categories" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>
                    Our Product Categories
                </h2>
                <p style={{ color: 'var(--text-muted)' }}>Explore our wide range of spare parts and tools</p>
            </div>

            <div style={{
                rowGap: '40px',
                columnGap: '32px',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                width: '100%',
                alignItems: 'start'
            }}>
                <style>{`
                    @media (max-width: 1024px) {
                        #categories > div {
                            grid-template-columns: repeat(3, 1fr) !important;
                        }
                    }
                    @media (max-width: 768px) {
                        #categories > div {
                            grid-template-columns: repeat(2, 1fr) !important;
                            row-gap: 24px !important;
                            column-gap: 16px !important;
                        }
                    }
                `}</style>
                {categories.map((cat, index) => {
                    const Icon = iconMap[cat.icon] || Settings;
                    return (
                        <Link to={`/products?category=${cat.id}`} key={cat.id}>
                            <motion.div
                                className="glass-panel"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                animate={{
                                    scale: 1,
                                    boxShadow: 'none',
                                    borderColor: 'rgba(255,255,255,0.05)',
                                    transition: { type: 'tween', duration: 0, ease: 'linear' }
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.4), 0 20px 60px rgba(0, 123, 255, 0.5)',
                                    borderColor: 'rgba(0, 123, 255, 0.6)',
                                    transition: { type: 'tween', duration: 0, ease: 'linear' }
                                }}
                                style={{
                                    padding: '30px 20px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <div style={{
                                    width: '70px',
                                    height: '70px',
                                    borderRadius: '50%',
                                    background: 'rgba(0, 123, 255, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '15px',
                                    color: 'var(--primary-color)'
                                }}>
                                    <Icon size={32} />
                                </div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--text-main)' }}>
                                    {cat.title}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                                    {cat.description}
                                </p>
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
        </Section>
    );
};

export default CategoryShowcase;
