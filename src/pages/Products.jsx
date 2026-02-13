import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Section from '../components/common/Section';
import { useLocation } from 'react-router-dom';
import Testimonials from '../components/sections/Testimonials';
import productCompressor from '../assets/images/product_compressor.webp';
import productCopper from '../assets/images/product_copper.webp';
import productTools from '../assets/images/product_tools.webp';
import productMotor from '../assets/images/product_motor.webp';
import productGas from '../assets/images/product_gas.webp';
import productCapacitor from '../assets/images/product_capacitor.webp';
import productValve from '../assets/images/product_valve.webp';
// New Generated Images
import productWires from '../assets/images/product_wires.webp';
import productTape from '../assets/images/product_tape.webp';
import productBracket from '../assets/images/product_bracket.webp';
import productPcb from '../assets/images/product_pcb.webp';
import productSuperlon from '../assets/images/product_superlon.webp';
// New Generated Images
import productAcSplit from '../assets/images/product_ac_split.webp';

const productSections = [
    {
        id: 'ac-split',
        category: 'ac-units',
        title: "Split & Window Air Conditioners",
        description: "Leading brands inclusive of Daikin, Mitsubishi, LG, Samsung, Voltas, Godrej, and more. We provide a complete range of energy-efficient split and window AC solutions.",
        image: productAcSplit,
        features: ["Multi-Brand Available", "All Star Ratings", "Copper Condenser", "Installation Services"]
    },
    {
        id: 'superlon',
        category: 'insulation',
        title: "Superlon Thermal Insulation",
        description: "High-quality closed-cell engineering flexible foam insulation. Ideal for HVAC/R, water pipe and ducting systems.",
        image: productSuperlon,
        features: ["Class 1 & Class 0", "Low Water Vapour Permeability", "Energy Saving", "Fire Retardant"]
    },
    {
        id: 'gases',
        category: 'gases',
        title: "Refrigerant Gases (R32, R410A)",
        description: "Certified eco-friendly refrigerant gases (R32, R410A) with zero ozone depletion. 99.9% pure and moisture-free for peak cooling performance.",
        image: productGas,
        features: ["99.9% Purity", "Eco-Friendly Options", "Safety Valves", "Standard Cylinders"]
    },
    {
        id: 'motors',
        category: 'motors',
        title: "Universal Fan Motors",
        description: "Universal fan motors compatible with indoor and outdoor AC units. High-quality copper windings and durable ball bearings for quiet, consistent airflow.",
        image: productMotor,
        features: ["Copper Winding", "Silent Operation", "Long Life Bearings", "Universal Fit"]
    },
    {
        id: 'compressors',
        category: 'compressors',
        title: "Industrial Compressors",
        description: "High-performance Rotary, Reciprocating, and Scroll compressors for residential and commercial use. Energy-efficient with quiet operation and voltage protection.",
        image: productCompressor,
        features: ["High Efficiency", "Low Noise", "Wide Voltage Range", "Thermal Overload Protection"]
    },
    {
        id: 'wires',
        category: 'electrical',
        title: "Wires & Cables",
        description: "High-grade copper wiring specifically insulated for HVAC applications. Heat resistant and durable.",
        image: productWires, // New Image
        features: ["Heat Resistant", "Multi-Strand Copper", "ISI Marked", "Various Gauges"]
    },
    {
        id: 'tapes',
        category: 'insulation',
        title: "Insulation Tapes",
        description: "Premium quality insulation tapes for secure electrical and thermal wrapping.",
        image: productTape, // New Image
        features: ["Strong Adhesion", "Fire Retardant", "Weather High Resistant", "Flexible"]
    },

    {
        id: 'brackets',
        category: 'accessories',
        title: "Stands & Brackets",
        description: "Heavy-duty galvanized steel stands for outdoor units. Rust-proof and vibration absorbing.",
        image: productBracket, // New Image
        features: ["Galvanized Steel", "Anti-Vibration Pads", "Heavy Load Capacity", "Rust Proof"]
    },
    {
        id: 'pcb',
        category: 'electrical',
        title: "PCB Boards",
        description: "Universal and specific model PCB boards for split and window AC units.",
        image: productPcb, // New Image
        features: ["Universal Compatibility", "Surge Protection", "Easy Installation", "Reliable Logic"]
    },
    {
        id: 'copper',
        category: 'copper',
        title: "Copper Piping Coils",
        description: "Premium 99.9% pure copper piping coils. Seamless construction for maximum efficiency and easy installation.",
        image: productCopper,
        features: ["99.9% Pure Copper", "Seamless", "Easy Bending"]
    },
    {
        id: 'capacitors',
        category: 'capacitors',
        title: "Run & Start Capacitors",
        description: "Reliable aluminium electrolytic capacitors for smooth motor starting and running.",
        image: productCapacitor,
        features: ["High Voltage Tolerance", "Self-Healing", "Explosion Proof"]
    },
    {
        id: 'valves',
        category: 'valves',
        title: "Brass Service Valves",
        description: "Precision-machined brass service valves for split AC outdoor units. Leak-proof design.",
        image: productValve,
        features: ["Forged Brass", "Leak Proof", "High Pressure Rated"]
    },
    {
        id: 'tools',
        category: 'tools',
        title: "HVAC Tools & Gauges",
        description: "Professional tools including vacuum pumps, manifold gauges, and flaring tools.",
        image: productTools,
        features: ["Pro Grade", "High Accuracy", "Durable", "Complete Kits"]
    }
];

const Products = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryFilter = queryParams.get('category');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const filteredProducts = categoryFilter
        ? productSections.filter(p => p.category === categoryFilter)
        : productSections;

    return (
        <>
            <Helmet>
                <title>Products | Sharath Enterprises</title>
                <meta name="description" content="Browse our wide range of AC and Refrigeration spare parts. Compressors, Motors, Gases, and more." />
            </Helmet>

            <div style={{ paddingTop: '100px', background: 'var(--bg-dark)' }}>
                {/* Compact Header */}
                <div className="container" style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-xs)' }}>
                        {categoryFilter
                            ? `${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)} Products`
                            : 'Our Products'}
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                        {filteredProducts.length > 0
                            ? "Premium spare parts for all your HVAC needs."
                            : "No products found in this category."}
                    </p>
                </div>

                {/* Zigzag Layout for Desktop, Grid for Mobile */}
                <div className="container products-container" style={{ paddingBottom: 'var(--spacing-xl)' }}>
                    {filteredProducts.length > 0 ? (
                        <>
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    className="product-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    style={{
                                        display: 'flex',
                                        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                                        alignItems: 'center',
                                        gap: 'var(--spacing-xl)',
                                        marginBottom: 'var(--spacing-lg)',
                                        background: 'var(--bg-card)',
                                        padding: 'var(--spacing-md)',
                                        borderRadius: 'var(--radius-lg)',
                                        border: '1px solid var(--glass-border)'
                                    }}
                                >
                                    {/* Text Content */}
                                    <div style={{ flex: 1.2, minWidth: '300px' }}>
                                        <h2 style={{ fontSize: '1.8rem', marginBottom: 'var(--spacing-xs)', color: 'var(--text-main)' }}>
                                            {product.title}
                                        </h2>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: 'var(--spacing-sm)' }}>
                                            {product.description}
                                        </p>
                                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                            {product.features.map((feature, i) => (
                                                <span
                                                    key={i}
                                                    style={{
                                                        background: 'rgba(0, 123, 255, 0.1)',
                                                        padding: '4px 10px',
                                                        borderRadius: 'var(--radius-sm)',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600',
                                                        color: 'var(--primary-color)'
                                                    }}
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Image Content */}
                                    <div style={{ flex: 0.8, minWidth: '200px', maxWidth: '300px' }}>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ type: 'spring', stiffness: 200 }}
                                            style={{
                                                borderRadius: 'var(--radius-md)',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    maxHeight: '200px',
                                                    objectFit: 'contain',
                                                    display: 'block'
                                                }}
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Responsive Styles */}
                            <style>{`
                                @media (max-width: 768px) {
                                    body {
                                        overflow-x: hidden;
                                    }
                                    .products-container {
                                        padding-left: 8px !important;
                                        padding-right: 8px !important;
                                        display: grid !important;
                                        grid-template-columns: repeat(2, 1fr) !important;
                                        gap: 8px !important;
                                        row-gap: 16px !important;
                                    }
                                    .product-card {
                                        flex-direction: column !important;
                                        padding: 10px !important;
                                        margin-bottom: 0 !important;
                                        gap: 0 !important;
                                    }
                                    .product-card > div:first-child {
                                        min-width: 100% !important;
                                        order: 2;
                                    }
                                    .product-card > div:last-child {
                                        min-width: 100% !important;
                                        max-width: 100% !important;
                                        order: 1;
                                        margin-bottom: 6px;
                                    }
                                    .product-card > div:last-child > div {
                                        height: 120px !important;
                                    }
                                    .product-card > div:last-child img {
                                        max-height: 120px !important;
                                    }
                                    .product-card h2 {
                                        font-size: 1rem !important;
                                        margin-bottom: 4px !important;
                                    }
                                    .product-card p {
                                        font-size: 0.8rem !important;
                                        line-height: 1.4 !important;
                                        margin-bottom: 6px !important;
                                    }
                                }
                            `}</style>
                        </>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '50px 0' }}>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>No products found.</p>
                            <button
                                onClick={() => window.location.href = '/products'}
                                style={{
                                    marginTop: '15px',
                                    padding: '8px 16px',
                                    background: 'var(--primary-color)',
                                    color: '#fff',
                                    borderRadius: 'var(--radius-full)'
                                }}
                            >
                                View All Products
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Testimonials Section */}
            <Testimonials />
        </>
    );
};
export default Products;
