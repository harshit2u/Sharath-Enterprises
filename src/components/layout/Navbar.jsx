import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';


import logo from '../../assets/images/logo.webp';

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
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={logo} alt="Sharath Enterprises" style={{ height: '50px', width: 'auto' }} />
                <span style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    color: 'var(--text-main)',
                    letterSpacing: '-0.5px'
                }}>
                    Sharath Enterprises
                </span>
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
                        <Motion.span whileHover={{ scale: 1.05 }} style={{ display: 'inline-block' }}>
                            {link.name}
                        </Motion.span>
                        {location.pathname === link.path && (
                            <Motion.div
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
            <a href="tel:9892775134" className='desktop-cta' style={{
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
            <div className="mobile-toggle" onClick={toggleMenu} style={{ cursor: 'pointer', color: 'var(--text-main)', zIndex: 1002 }}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <Motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                        style={{
                            position: 'fixed',
                            top: '80px', // Below the navbar
                            left: 0,
                            right: 0,
                            height: 'auto',
                            maxHeight: '70vh', // Don't go all the way down
                            background: 'rgba(255, 255, 255, 0.98)',
                            backdropFilter: 'blur(12px)',
                            padding: '20px',
                            zIndex: 9998,
                            borderBottom: '1px solid var(--glass-border)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            borderRadius: '0 0 20px 20px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '15px',
                            overflowY: 'auto'
                        }}
                    >
                        {/* Removed the 'X' inside, since the toggle is on the navbar */}

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={toggleMenu}
                                style={{
                                    width: '100%',
                                    maxWidth: '300px',
                                    textAlign: 'center',
                                    padding: '15px 20px',
                                    borderRadius: 'var(--radius-lg)',
                                    background: location.pathname === link.path ? 'var(--primary-color)' : 'transparent',
                                    color: location.pathname === link.path ? '#fff' : 'var(--text-main)',
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    transition: 'all 0.2s ease',
                                    border: location.pathname === link.path ? 'none' : '1px solid var(--glass-border)'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a href="tel:9892775134" style={{
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
                    </Motion.div>
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
