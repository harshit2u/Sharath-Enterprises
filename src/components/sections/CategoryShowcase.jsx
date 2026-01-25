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
        <Section className="container" id="categories" style={{ marginBottom: '150px' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>
                    Our Product Categories
                </h2>
                <p style={{ color: 'var(--text-muted)' }}>Explore our wide range of spare parts and tools</p>
            </div>

            <div className="grid-cols-auto" style={{ gap: 'var(--spacing-lg)' }}>
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
                                whileHover={{
                                    y: -10,
                                    boxShadow: '0 0 25px var(--primary-color)',
                                    borderColor: 'var(--primary-color)'
                                }}
                                style={{
                                    padding: 'var(--spacing-lg)',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    transition: 'box-shadow 0.3s ease, border-color 0.3s ease', // kept css transition for non-motion props if needed, but motion handles y/color well
                                    cursor: 'pointer',
                                    border: '1px solid transparent' // Ensure border transition is visible
                                }}
                            >
                                <div style={{
                                    background: 'rgba(0, 123, 255, 0.1)', // Fixed blue tint
                                    padding: '20px',
                                    borderRadius: '50%',
                                    marginBottom: 'var(--spacing-md)',
                                    color: 'var(--primary-color)'
                                }}>
                                    <Icon size={40} />
                                </div>
                                <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.25rem', color: 'var(--text-main)' }}>{cat.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{cat.description}</p>
                            </motion.div>
                        </Link>
                    )
                })}
            </div>
        </Section>
    );
};

export default CategoryShowcase;
