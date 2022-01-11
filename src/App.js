import React from 'react';
import Header from './components/Header';
import Photo from './components/Photo';
import Contact from './components/Contact';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Photo />
      <Header />
      <Contact />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
