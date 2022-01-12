import React from 'react';
import './Container.css'
import Header from './Header';
import Contact from './Contact';
import Info from './Info';
import Footer from './Footer';

const Container = () => {
    return(
        <div className="container">
            <Header />
            <Contact />
            <Info />
            <Footer />
        </div>
    );
};

export default Container;