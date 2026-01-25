import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', phone: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will contact you shortly.');
        setFormState({ name: '', phone: '', message: '' });
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | Sharath Enterprises</title>
                <meta name="description" content="Visit our shop in Vikhroli (W), Mumbai or call us for any AC spare parts inquiry." />
            </Helmet>

            <div className="container" style={{ paddingTop: '100px', paddingBottom: 'var(--spacing-xl)' }}>
                <Section className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>Contact Us</h1>
                    <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-lg)' }}>
                        Have a question or looking for a specific part? Our team is ready to assist you.
                    </p>
                </Section>

                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>

                    {/* Contact Info Centered */}
                    <Section delay={0.2} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)' }}>
                        <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
                            <div style={{ marginBottom: 'var(--spacing-md)', display: 'flex', justifyContent: 'center' }}>
                                <MapPin size={32} color="var(--primary-color)" />
                            </div>
                            <h3 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--text-main)' }}>Visit Us</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                Shop No 19, Vijaya House,<br />
                                Station Road, Vikhroli (West),<br />
                                Mumbai - 400083
                            </p>
                        </div>

                        <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
                            <div style={{ marginBottom: 'var(--spacing-md)', display: 'flex', justifyContent: 'center' }}>
                                <Phone size={32} color="var(--primary-color)" />
                            </div>
                            <h3 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--text-main)' }}>Call Us</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '10px' }}>
                                <a href="tel:8080055955" className="hover:text-primary">8080055955</a>
                            </p>
                            <Button variant="outline" onClick={() => window.open('https://wa.me/918080055955')}>Chat on WhatsApp</Button>
                        </div>

                        <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
                            <div style={{ marginBottom: 'var(--spacing-md)', display: 'flex', justifyContent: 'center' }}>
                                <Clock size={32} color="var(--primary-color)" />
                            </div>
                            <h3 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--text-main)' }}>Business Hours</h3>
                            <p style={{ color: 'var(--text-muted)' }}>
                                Monday - Saturday: 9:00 AM - 8:00 PM<br />
                                Sunday: Closed
                            </p>
                        </div>
                    </Section>
                </div>
            </div>
        </>
    );
};

export default Contact;
