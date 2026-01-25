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

            <div className="container" style={{ paddingTop: '80px', paddingBottom: '20px' }}>
                {/* Header */}
                <Section className="text-center" style={{ marginBottom: '30px', padding: '20px 0' }}>
                    <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '15px' }}>About Sharath Enterprises</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '15px' }}>
                        Established in 2013, Sharath Enterprises has grown to become Mumbai's premier supplier of air conditioning and refrigeration spare parts. We started with a simple mission: to provide technicians and businesses with immediate access to high-quality components, reducing equipment downtime and ensuring efficient operations.
                    </p>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '15px' }}>
                        Our extensive inventory includes everything from industrial compressors and copper flexible tubes to precision valves and eco-friendly refrigerant gases. We pride ourselves on sourcing products from globally recognized manufacturers, ensuring that every part you buy from us meets rigorous safety and performance standards.
                    </p>
                </Section>

                {/* Content Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                    <Section delay={0.2} className="glass-panel" style={{ padding: '20px' }}>
                        <div style={{ color: 'var(--primary-color)', marginBottom: '15px' }}><Award size={32} /></div>
                        <h2 style={{ marginBottom: '10px', fontSize: '1.5rem' }}>Our Story</h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.5', fontSize: '0.95rem' }}>
                            Over the last decade, we have built strong relationships with HVAC professionals across the region. We understand the unique challenges of the industry—from emergency repairs in peak summer to complex industrial installations. Our knowledgeable team is always on hand to provide technical advice and help you find the exact part you need.
                        </p>
                    </Section>

                    <Section delay={0.4} className="glass-panel" style={{ padding: '20px' }}>
                        <div style={{ color: 'var(--secondary-color)', marginBottom: '15px' }}><Target size={32} /></div>
                        <h2 style={{ marginBottom: '10px', fontSize: '1.5rem' }}>Our Mission</h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.5', fontSize: '0.95rem' }}>
                            To be the most reliable and accessible source for quality refrigeration and air conditioning spares. We aim to support technicians and businesses by maximizing equipment uptime through fast availability of genuine parts at competitive prices.
                        </p>
                    </Section>
                </div>

                {/* Vision / Values */}
                <Section delay={0.6} style={{ padding: '20px 0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <h2 style={{ fontSize: '1.8rem' }}>Core Values</h2>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyItems: 'center', justifyContent: 'center' }}>
                        {['Customer First', 'Quality Assurance', 'Integrity', 'Technical Expertise'].map((val, i) => (
                            <div key={i} className="glass-panel" style={{ padding: '15px 30px', borderRadius: 'var(--radius-full)', border: '1px solid var(--primary-color)' }}>
                                <span style={{ fontWeight: '600', color: 'var(--primary-color)', fontSize: '0.9rem' }}>{val}</span>
                            </div>
                        ))}
                    </div>
                </Section>
            </div>
        </>
    );
};

export default About;
