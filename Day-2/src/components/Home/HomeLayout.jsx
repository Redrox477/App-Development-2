import React from 'react';
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import PropTypes from 'prop-types';
const HomeLayout = ({ children }) => {
    return (
        <div style={{ padding: '2px'}}>
            <header>
             <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer style={{textAlign: 'center' }}>
                <Footer />
            </footer>
        </div>
    );

}
    HomeLayout.prototypes={
        children: PropTypes.node.isRequired
    }

export default HomeLayout;
