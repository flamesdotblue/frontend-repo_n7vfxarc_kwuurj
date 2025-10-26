import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Offerings from './components/Offerings';
import Connect from './components/Connect';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-900">
      <Hero />
      <About />
      <Offerings />
      <Connect />
    </div>
  );
}

export default App;
