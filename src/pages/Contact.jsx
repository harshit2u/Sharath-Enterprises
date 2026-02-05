import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import FAQ from '../components/sections/FAQ';
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

            <div className="container" style={{ paddingTop: '80px', paddingBottom: '30px', minHeight: 'auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                    style={{ marginBottom: '20px', padding: '20px 0' }}
                >
                    <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Contact Us</h1>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '10px' }}>
                        Have a question or looking for a specific part? Our team is ready to assist you.
                    </p>
                </motion.div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                    {/* Contact Info Centered - Replaced Section with div to remove default padding */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}
                    >
                        <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
                            <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
                                <MapPin size={32} color="var(--primary-color)" />
                            </div>
                            <h3 style={{ marginBottom: '10px', color: 'var(--text-main)' }}>Visit Us</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                Shop No 19, Vijaya House,<br />
                                Station Road, Vikhroli (West),<br />
                                Mumbai - 400083
                            </p>
                        </div>

                        <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
                            <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
                                <Phone size={32} color="var(--primary-color)" />
                            </div>
                            <h3 style={{ marginBottom: '10px', color: 'var(--text-main)' }}>Call Us</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '8px' }}>
                                        <a href="tel:9892775134" className="hover:text-primary">9892775134</a>
                                    </p>
                                    <Button variant="whatsapp" onClick={() => window.open('https://wa.me/919892775134?text=Hello...')}>Chat on WhatsApp</Button>
                                </div>
                                <div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '8px' }}>
                                        <a href="tel:8080055955" className="hover:text-primary">8080055955</a>
                                    </p>
                                    <Button variant="whatsapp" onClick={() => window.open('https://wa.me/918080055955?text=Hello...')}>Chat on WhatsApp</Button>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
                            <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
                                <Clock size={32} color="var(--primary-color)" />
                            </div>
                            <h3 style={{ marginBottom: '10px', color: 'var(--text-main)' }}>Business Hours</h3>
                            <p style={{ color: 'var(--text-muted)' }}>
                                Monday - Sunday: 9:00 AM - 8:00 PM<br />
                                (Open All Days)
                            </p>
                        </div>
                    </motion.div>

                    {/* FAQ Section */}
                    <FAQ />
                </div>
            </div>
        </>
    );
};

export default Contact;
