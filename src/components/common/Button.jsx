import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ children, to, onClick, variant = 'primary', className = '', ...props }) => {

    const baseStyle = {
        padding: '12px 28px',
        borderRadius: 'var(--radius-full)',
        fontWeight: '600',
        fontSize: '1rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
        border: '2px solid transparent'
    };

    const variants = {
        primary: {
            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
            color: '#fff',
            boxShadow: 'var(--shadow-glow)'
        },
        outline: {
            background: 'transparent',
            borderColor: 'var(--primary-color)',
            color: 'var(--primary-color)'
        },
        whatsapp: {
            background: '#25D366',
            borderColor: '#25D366',
            color: '#fff'
        },
        glass: {
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-white)'
        }
    };

    const combinedStyle = { ...baseStyle, ...variants[variant] };

    // Hover animation glow effect
    const hoverProps = {
        scale: 1.05,
        boxShadow: variant === 'primary' ? '0 0 25px var(--primary-color)' : undefined
    };

    const content = (
        <motion.span
            whileHover={hoverProps}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'center' }}
        >
            {children}
        </motion.span>
    );

    if (to) {
        return (
            <Link to={to} style={combinedStyle} className={className} {...props}>
                {content}
            </Link>
        );
    }

    return (
        <motion.button
            style={combinedStyle}
            className={className}
            onClick={onClick}
            whileHover={hoverProps}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
