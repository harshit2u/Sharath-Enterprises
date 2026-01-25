import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        name: "Rajesh Kumar",
        role: "HVAC Technician",
        text: "Sharath Enterprises is my go-to for all spare parts. The quality of copper pipes and compressors is unmatched in Mumbai.",
        rating: 5
    },
    {
        name: "Amit Patel",
        role: "AC Service Center Owner",
        text: "Excellent service and genuine products. Their same-day delivery has saved me so many times during peak summer.",
        rating: 5
    },
    {
        name: "Suresh Menon",
        role: "Industrial Contractor",
        text: "I buy all my refrigerant gases and insulation materials here. Best prices and 100% original stock.",
        rating: 5
    },
    {
        name: "Vikram Singh",
        role: "Maintenance Manager",
        text: "The universal fan motors are very durable. Highly recommend them for any commercial AC repair work.",
        rating: 4
    },
    {
        name: "Anil Deshmukh",
        role: "Freelance Technician",
        text: "Professional team and huge variety. From capacitors to manifold gauges, they have everything.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section style={{ padding: '40px 0', overflow: 'hidden', background: 'var(--bg-card)' }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>
                    What Our Customers Say
                </h2>
                <p style={{ color: 'var(--text-muted)' }}>Trusted by hundreds of technicians across Mumbai</p>
            </div>

            <div style={{ position: 'relative', width: '100vw', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
                <div style={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
                    {/* First Loop */}
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            },
                        }}
                        style={{ display: 'flex', gap: 'var(--spacing-lg)', paddingLeft: 'var(--spacing-lg)' }}
                    >
                        {reviews.map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))}
                    </motion.div>

                    {/* Duplicate Loop for seamless effect */}
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            },
                        }}
                        style={{ display: 'flex', gap: 'var(--spacing-lg)', paddingLeft: 'var(--spacing-lg)' }}
                    >
                        {reviews.map((review, index) => (
                            <ReviewCard key={`dup-${index}`} review={review} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ReviewCard = ({ review }) => (
    <div className="glass-panel" style={{
        minWidth: '350px',
        padding: 'var(--spacing-lg)',
        borderRadius: 'var(--radius-lg)',
        background: '#fff',
        border: '1px solid var(--glass-border)'
    }}>
        <div style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--primary-color)' }}>
            <Quote size={32} />
        </div>
        <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: 'var(--spacing-md)', lineHeight: '1.6' }}>
            "{review.text}"
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
            <div>
                <h4 style={{ fontWeight: '700', color: 'var(--text-main)' }}>{review.name}</h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{review.role}</span>
            </div>
            <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="gold" color="gold" />
                ))}
            </div>
        </div>
    </div>
);

export default Testimonials;
