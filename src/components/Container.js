import React from 'react';
import './Container.css'
import Header from './Header';
import Contact from './Contact';
import Info from './Info';

const Container = () => {
    return(
        <div className="container">
            <Header />
            <Contact />
            <Info />
        </div>
    );
};

export default Container;