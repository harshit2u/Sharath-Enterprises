import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--bg-lighter)',
            paddingTop: 'var(--spacing-lg)',
            marginTop: 'var(--spacing-lg)',
            borderTop: '1px solid var(--glass-border)'
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)' }}>

                {/* Company Info */}
                <div>
                    <img src={logo} alt="Sharath Enterprises" style={{ height: '100px', marginBottom: 'var(--spacing-md)' }} />
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: 'var(--spacing-md)' }}>
                        Your one-stop solution for all AC and Refrigeration spare parts. We provide top-quality components for industrial and residential cooling systems.
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                        <SocialIcon icon={<Facebook size={20} />} />
                        <SocialIcon icon={<Instagram size={20} />} />
                        <SocialIcon icon={<Twitter size={20} />} />
                    </div>
                </div>

                {/* Quick Contact */}
                <div>
                    <h4 style={{ marginBottom: 'var(--spacing-md)' }}>Contact Us</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                        <ContactItem icon={<MapPin size={18} />} text="Shop No 19, Vijaya House, Station Road, Vikhroli (W), Mumbai - 400083" />
                        <ContactItem icon={<Phone size={18} />} text="+91 8080055955" isLink href="tel:8080055955" />
                        <ContactItem icon={<MessageCircle size={18} />} text="WhatsApp Chat" isLink href="https://wa.me/918080055955" />
                        <ContactItem icon={<Clock size={18} />} text="Mon - Sat: 9:00 AM - 8:00 PM" />
                    </ul>
                </div>

                {/* Map */}
                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '250px' }}>
                    <iframe
                        src="https://maps.google.com/maps?q=Sharath+Enterprises+Station+Road+Vikhroli+West+Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                    <a href="https://goo.gl/maps/XYZ" target="_blank" rel="noopener noreferrer" style={{
                        display: 'block',
                        textAlign: 'center',
                        background: 'var(--bg-card)',
                        padding: '10px',
                        color: 'var(--primary-color)',
                        fontWeight: 'bold'
                    }}>
                        Get Directions
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div style={{
                borderTop: '1px solid rgba(255,255,255,0.05)',
                padding: 'var(--spacing-md)',
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.9rem'
            }}>
                &copy; {new Date().getFullYear()} Sharath Enterprises. All rights reserved.
            </div>
        </footer>
    );
};

const ContactItem = ({ icon, text, isLink, href }) => (
    <li style={{ display: 'flex', gap: '10px', alignItems: 'start', color: 'var(--text-main)' }}>
        <span style={{ color: 'var(--primary-color)', marginTop: '2px' }}>{icon}</span>
        {isLink ? (
            <a href={href} style={{ transition: 'color 0.2s' }} className="hover:text-primary">
                {text}
            </a>
        ) : (
            <span>{text}</span>
        )}
    </li>
);

const SocialIcon = ({ icon }) => (
    <div style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        background: 'rgba(0,0,0,0.05)', // Darker subtle bg for light theme
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.3s',
        color: 'var(--primary-color)'
    }}
        onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--primary-color)';
            e.currentTarget.style.color = '#fff';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0,0,0,0.05)';
            e.currentTarget.style.color = 'var(--primary-color)';
        }}
    >
        {icon}
    </div>
);

export default Footer;
