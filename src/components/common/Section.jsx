import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Section = ({ children, className = '', id = '', delay = 0, ...props }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            id={id}
            className={`section ${className}`}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(50px)',
                transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
                ...props.style // Allow overriding/merging styles
            }}
        >
            {children}
        </section>
    );
};

export default Section;
