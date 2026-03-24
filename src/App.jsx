import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="font-[family-name:--font-sans] bg-[#F4F7FA] min-h-screen text-[#1a202c]">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
