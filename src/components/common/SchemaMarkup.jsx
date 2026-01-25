import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaMarkup = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Sharath Enterprises",
        "image": "",
        "telephone": "+918080055955",
        "email": "",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No 19, Vijaya House, Station Road, Vikhroli (W)",
            "addressLocality": "Mumbai",
            "postalCode": "400083",
            "addressCountry": "IN"
        },
        "url": document.location.origin,
        "priceRange": "$$",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "20:00"
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};

export default SchemaMarkup;
