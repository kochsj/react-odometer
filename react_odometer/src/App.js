import React from 'react';
import './App.css';
import Odometer from './odometer';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Odometer />
      <Footer />
    </div>
  );
}

export default App;
