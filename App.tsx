
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
