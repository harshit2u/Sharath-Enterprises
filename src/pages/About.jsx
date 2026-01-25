import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Section from '../components/common/Section';
import { Award, Users, Target } from 'lucide-react';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Sharath Enterprises</title>
                <meta name="description" content="Learn about Sharath Enterprises, your trusted partner in AC and Refrigeration spare parts since 2013." />
            </Helmet>

            <div className="container" style={{ paddingTop: '100px', paddingBottom: 'var(--spacing-xl)' }}>
                {/* Header */}
                <Section className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>About Sharath Enterprises</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: 'var(--spacing-lg)' }}>
                        Established in 2013, Sharath Enterprises has grown to become Mumbai's premier supplier of air conditioning and refrigeration spare parts. We started with a simple mission: to provide technicians and businesses with immediate access to high-quality components, reducing equipment downtime and ensuring efficient operations.
                    </p>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: 'var(--spacing-lg)' }}>
                        Our extensive inventory includes everything from industrial compressors and copper flexible tubes to precision valves and eco-friendly refrigerant gases. We pride ourselves on sourcing products from globally recognized manufacturers, ensuring that every part you buy from us meets rigorous safety and performance standards.
                    </p>
                </Section>

                {/* Content Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-xxl)' }}>
                    <Section delay={0.2} className="glass-panel" style={{ padding: 'var(--spacing-xl)' }}>
                        <div style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-md)' }}><Award size={40} /></div>
                        <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Our Story</h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            Over the last decade, we have built strong relationships with HVAC professionals across the region. We understand the unique challenges of the industry—from emergency repairs in peak summer to complex industrial installations. Our knowledgeable team is always on hand to provide technical advice and help you find the exact part you need.
                        </p>
                    </Section>

                    <Section delay={0.4} className="glass-panel" style={{ padding: 'var(--spacing-xl)' }}>
                        <div style={{ color: 'var(--secondary-color)', marginBottom: 'var(--spacing-md)' }}><Target size={40} /></div>
                        <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Our Mission</h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            To be the most reliable and accessible source for quality refrigeration and air conditioning spares. We aim to support technicians and businesses by maximizing equipment uptime through fast availability of genuine parts at competitive prices.
                        </p>
                    </Section>
                </div>

                {/* Vision / Values */}
                <Section delay={0.6}>
                    <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                        <h2 style={{ fontSize: '2rem' }}>Core Values</h2>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-lg)', justifyItems: 'center', justifyContent: 'center' }}>
                        {['Customer First', 'Quality Assurance', 'Integrity', 'Technical Expertise'].map((val, i) => (
                            <div key={i} className="glass-panel" style={{ padding: '20px 40px', borderRadius: 'var(--radius-full)', border: '1px solid var(--primary-color)' }}>
                                <span style={{ fontWeight: '600', color: 'var(--primary-color)' }}>{val}</span>
                            </div>
                        ))}
                    </div>
                </Section>
            </div>
        </>
    );
};

export default About;
