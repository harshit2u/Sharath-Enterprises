import React from 'react';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import CategoryShowcase from '../components/sections/CategoryShowcase';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Sharath Enterprises | AC & Refrigeration Spare Parts in Mumbai</title>
                <meta name="description" content="One-stop solution for all AC and Refrigeration spare parts. Compressors, copper pipes, tools, and more. Located in Vikhroli, Mumbai." />
            </Helmet>

            <Hero />
            <Stats />
            <CategoryShowcase />
            <Testimonials />
            <WhyChooseUs />

            <div style={{ height: '50px' }}></div> {/* Spacer */}
        </>
    );
};

export default Home;
