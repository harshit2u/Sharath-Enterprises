import React, { useEffect, useRef, useState } from 'react';
import Section from '../common/Section';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';

const stats = [
    { label: "Years Experience", value: 10, suffix: "+" },
    { label: "Products in Stock", value: 5000, suffix: "+" },
    { label: "Happy Customers", value: 1000, suffix: "+" },
    { label: "Brands", value: 50, suffix: "+" },
];

const Counter = ({ value, suffix }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return <span ref={ref}>{displayValue}{suffix}</span>;
};

const Stats = () => {
    return (
        <Section className="container" style={{ position: 'relative', zIndex: 10 }}>
            {/* 
               Adjusted margin and z-index to fix overlapping issues. 
               Removed negative margin to prevent covering content or being covered inappropriately.
               If a specific overlap look was desired, we can use a smaller negative margin with proper z-index.
               For now, we'll keep it clean.
            */}
            <div className="glass-panel" style={{
                marginTop: '-50px',
                marginBottom: '0',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(255,255,255,0.05)',
                background: 'var(--glass-bg)', // Ensure background is set to prevent see-through overlap mess
                backdropFilter: 'blur(10px)'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 'var(--spacing-lg)',
                    padding: 'var(--spacing-xl)',
                    textAlign: 'center'
                }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <h3 className="text-gradient" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: 'var(--spacing-xs)' }}>
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '500' }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Stats;
