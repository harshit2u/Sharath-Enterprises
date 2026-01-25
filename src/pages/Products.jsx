import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Section from '../components/common/Section';
import { useLocation } from 'react-router-dom';
import Testimonials from '../components/sections/Testimonials';
import productCompressor from '../assets/images/product_compressor.png';
import productCopper from '../assets/images/product_copper.png';
import productTools from '../assets/images/product_tools.png';
import productFasteners from '../assets/images/product_fasteners.png';
import productMotor from '../assets/images/product_motor.png';
import productGas from '../assets/images/product_gas.png';
import productCapacitor from '../assets/images/product_capacitor.png';
import productValve from '../assets/images/product_valve.png';
import productInsulation from '../assets/images/product_insulation.png';
// New Generated Images
import productWires from '../assets/images/product_wires.png';
import productTape from '../assets/images/product_tape.png';
import productBracket from '../assets/images/product_bracket.png';
import productPcb from '../assets/images/product_pcb.png';

const productSections = [
    {
        id: 'gases',
        category: 'gases',
        title: "Refrigerant Gases (R32, R410A)",
        description: "Top-grade refrigerant gases available in certified, safety-compliant cylinders. We supply environmentally friendly options like R32 and R410A, known for their zero ozone depletion potential and high energy efficiency. Pure and moisture-free, our gases ensure your cooling systems run at peak performance.",
        image: productGas,
        features: ["99.9% Purity", "Eco-Friendly Options", "Safety Valves", "Standard Cylinders"]
    },
    {
        id: 'motors',
        category: 'motors',
        title: "Universal Fan Motors",
        description: "Our universal fan motors are compatible with a vast array of indoor and outdoor AC units. Built with high-quality copper windings and durable ball bearings, they provide consistent airflow and quiet operation. Whether you need a replacement for a window AC blower or a split unit condenser fan, we have the right motor specifications.",
        image: productMotor,
        features: ["Copper Winding", "Silent Operation", "Long Life Bearings", "Universal Fit"]
    },
    {
        id: 'compressors',
        category: 'compressors',
        title: "Industrial Compressors",
        description: "We stock a wide range of high-performance compressors including Rotary, Reciprocating, and Scroll types. Designed for both residential split ACs and heavy-duty commercial chillers, these compressors ensure rapid cooling and energy efficiency. We partner with leading global brands to bring you units that operate quietly, withstand voltage fluctuations.",
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
        description: "Our premium copper piping coils are engineered for maximum efficiency. 99.9% pure copper.",
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

                {/* Grid Card Layout */}
                <div className="container" style={{ paddingBottom: 'var(--spacing-xl)' }}>
                    {filteredProducts.length > 0 ? (
                        <>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '32px',
                                rowGap: '40px'
                            }}>
                                {filteredProducts.map((product, index) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        className="glass-panel"
                                        whileHover={{
                                            scale: 1.02,
                                            boxShadow: '0 0 0 2px rgba(0, 123, 255, 0.3), 0 15px 40px rgba(0, 123, 255, 0.4)',
                                            transition: { type: 'tween', duration: 0, ease: 'linear' }
                                        }}
                                        animate={{
                                            scale: 1,
                                            transition: { type: 'tween', duration: 0, ease: 'linear' }
                                        }}
                                        style={{
                                            padding: '24px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            cursor: 'pointer',
                                            height: '100%'
                                        }}
                                    >
                                        {/* Image */}
                                        <div style={{
                                            width: '100%',
                                            height: '200px',
                                            borderRadius: 'var(--radius-md)',
                                            overflow: 'hidden',
                                            marginBottom: '16px',
                                            background: 'rgba(0, 123, 255, 0.02)'
                                        }}>
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            marginBottom: '12px',
                                            color: 'var(--text-main)',
                                            fontWeight: '600'
                                        }}>
                                            {product.title}
                                        </h3>

                                        {/* Description */}
                                        <p style={{
                                            color: 'var(--text-muted)',
                                            fontSize: '0.9rem',
                                            lineHeight: '1.5',
                                            marginBottom: '16px',
                                            flex: 1
                                        }}>
                                            {product.description}
                                        </p>

                                        {/* Features */}
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '8px'
                                        }}>
                                            {product.features.map((feature, i) => (
                                                <span
                                                    key={i}
                                                    style={{
                                                        background: 'rgba(0, 123, 255, 0.1)',
                                                        padding: '4px 10px',
                                                        borderRadius: 'var(--radius-sm)',
                                                        fontSize: '0.75rem',
                                                        fontWeight: '600',
                                                        color: 'var(--primary-color)'
                                                    }}
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Responsive Styles */}
                            <style>{`
                                @media (max-width: 1024px) {
                                    .container > div > div {
                                        grid-template-columns: repeat(2, 1fr) !important;
                                        gap: 24px !important;
                                    }
                                }
                                @media (max-width: 768px) {
                                    .container > div > div {
                                        grid-template-columns: repeat(2, 1fr) !important;
                                        gap: 16px !important;
                                        row-gap: 24px !important;
                                    }
                                    .container > div > div > div {
                                        padding: 16px !important;
                                    }
                                    .container > div > div > div > div:first-child {
                                        height: 150px !important;
                                    }
                                    .container > div > div > div h3 {
                                        font-size: 1.1rem !important;
                                    }
                                    .container > div > div > div p {
                                        font-size: 0.85rem !important;
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
