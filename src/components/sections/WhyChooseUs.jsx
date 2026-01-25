import React from 'react';
import Section from '../common/Section';
import { CheckCircle, Shield, Package, Clock } from 'lucide-react';

const features = [
    {
        icon: <Shield size={32} />,
        title: 'Genuine Parts',
        description: '100% authentic spare parts sourced directly from trusted manufacturers.'
    },
    {
        icon: <Package size={32} />,
        title: 'Ready Stock',
        description: 'Huge inventory of spare parts available for immediate store pickup.'
    },
    {
        icon: <CheckCircle size={32} />,
        title: 'Best Prices',
        description: 'Wholesale prices guaranteed for bulk and retail orders.'
    },
    {
        icon: <Clock size={32} />,
        title: 'Support',
        description: 'Expert technical guidance to help you choose the right part.'
    }
];

const WhyChooseUs = () => {
    return (
        <Section className="container" style={{ position: 'relative', padding: '40px 0' }}>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100vw',
                height: '100%',
                background: 'var(--bg-lighter)',
                zIndex: -1,
                opacity: 0.5
            }}></div>

            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>
                    Why Choose Sharath Enterprises
                </h2>
                <p style={{ color: 'var(--text-muted)' }}>Your trusted partner in AC & Refrigeration solutions</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--spacing-xl)'
            }}>
                {features.map((feature, index) => (
                    <div key={index} style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                        <div style={{ color: 'var(--primary-color)' }}>
                            {feature.icon}
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-xs)', color: 'var(--text-main)' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default WhyChooseUs;
