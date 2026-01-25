import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


import logo from '../../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`glass-panel ${scrolled ? 'scrolled' : ''}`} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            margin: 'var(--spacing-md)',
            padding: 'var(--spacing-sm) var(--spacing-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'all 0.3s ease',
            borderRadius: 'var(--radius-lg)'
        }}>
            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="Sharath Enterprises" style={{ height: '60px', width: 'auto' }} />
            </Link>

            {/* Desktop Links */}
            <div className="desktop-menu" style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        style={{
                            position: 'relative',
                            fontWeight: '600',
                            padding: '8px 16px',
                            color: location.pathname === link.path ? 'var(--primary-color)' : 'var(--text-main)',
                            transition: 'color 0.3s ease',
                            borderRadius: 'var(--radius-full)'
                        }}
                    >
                        <motion.span whileHover={{ scale: 1.05 }} style={{ display: 'inline-block' }}>
                            {link.name}
                        </motion.span>
                        {location.pathname === link.path && (
                            <motion.div
                                layoutId="activeNav"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'rgba(0, 123, 255, 0.1)',
                                    borderRadius: 'var(--radius-full)',
                                    zIndex: -1
                                }}
                            />
                        )}
                    </Link>
                ))}
            </div>

            {/* CTA Button (Desktop) */}
            <a href="tel:8080055955" className='desktop-cta' style={{
                background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))',
                padding: '10px 20px',
                borderRadius: 'var(--radius-full)',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#fff',
                boxShadow: 'var(--shadow-glow)'
            }}>
                <Phone size={18} />
                <span>Call Now</span>
            </a>

            {/* Mobile Toggle */}
            <div className="mobile-toggle" onClick={toggleMenu} style={{ cursor: 'pointer', color: 'var(--text-main)', zIndex: 1002, position: 'relative' }}>
                {isOpen ? null : <Menu size={28} />}
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            width: '100vw',
                            height: '100vh',
                            background: '#ffffff', // Solid white background
                            padding: 'var(--spacing-xl)',
                            zIndex: 9999, // Super high z-index
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 'var(--spacing-xl)',
                            overflowY: 'auto' // Allow scroll if content is long
                        }}
                    >
                        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
                            <X size={32} onClick={toggleMenu} style={{ cursor: 'pointer', color: 'var(--text-main)' }} />
                        </div>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={toggleMenu}
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: location.pathname === link.path ? 'var(--primary-color)' : 'var(--text-main)',
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a href="tel:8080055955" style={{
                            background: 'var(--primary-color)',
                            color: '#fff',
                            padding: '15px 40px',
                            borderRadius: 'var(--radius-full)',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            marginTop: 'var(--spacing-md)',
                            fontSize: '1.2rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <Phone size={24} /> Call Now
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Inline Media Queries for Simplicity */}
            <style>{`
                @media (max-width: 768px) {
                    .desktop-menu, .desktop-cta { display: none !important; }
                    .mobile-toggle { display: block; }
                }
                @media (min-width: 769px) {
                    .mobile-toggle { display: none !important; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
