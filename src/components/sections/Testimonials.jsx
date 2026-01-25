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
        <section style={{ padding: 'var(--spacing-xl) 0', background: 'var(--bg-card)' }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: 'var(--spacing-xs)' }}>
                    Customer Reviews
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Trusted by technicians across Mumbai</p>
            </div>

            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Desktop default
                    gap: '15px'
                }}>
                    {/* Mobile overrides via inline style check or generic CSS class if available. 
                        Using the 'grid-cols-auto' class from main.css which I updated earlier is safer. */}
                    {/* Actually, let's use the className "grid-cols-auto" which forces 2 cols on mobile now. */}
                </div>

                {/* Direct implementation using className for consistency */}
                <div className="grid-cols-auto" style={{ gap: '10px' }}>
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ReviewCard = ({ review }) => (
    <div className="glass-panel" style={{
        padding: '15px',
        borderRadius: 'var(--radius-md)',
        background: '#fff',
        border: '1px solid var(--glass-border)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }}>
        <div>
            <div style={{ marginBottom: '8px', color: 'var(--primary-color)' }}>
                <Quote size={16} /> {/* Smaller Icon */}
            </div>
            <p style={{
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                marginBottom: '10px',
                fontSize: '0.8rem', // Smaller text
                lineHeight: '1.4',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
            }}>
                "{review.text}"
            </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ overflow: 'hidden' }}>
                <h4 style={{
                    fontWeight: '700',
                    color: 'var(--text-main)',
                    fontSize: '0.85rem',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden'
                }}>
                    {review.name}
                </h4>
            </div>
            <div style={{ display: 'flex' }}>
                <Star size={12} fill="gold" color="gold" />
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', marginLeft: '2px', color: 'var(--text-main)' }}>{review.rating}.0</span>
            </div>
        </div>
    </div>
);

export default Testimonials;
