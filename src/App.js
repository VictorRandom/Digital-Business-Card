import React from 'react';
import './App.css';
import Photo from './components/Photo';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Photo />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
