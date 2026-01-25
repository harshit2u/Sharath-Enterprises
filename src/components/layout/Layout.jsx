import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButtons from '../common/FloatingButtons';
import SchemaMarkup from '../common/SchemaMarkup';

// Layout Wrapper
const Layout = ({ children }) => {
    return (
        <div className="app-wrapper">
            <SchemaMarkup />
            {/* CursorFollower removed */}
            <Navbar />
            <main style={{ minHeight: '100vh', paddingBottom: '0' }}>{children}</main>
            <Footer />
            <FloatingButtons />
        </div>
    );
};

export default Layout;
