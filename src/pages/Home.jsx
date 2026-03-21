import React from 'react';
import Hero from '../components/Hero';
import CostComparison from '../components/CostComparison';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import Security from '../components/Security';
import Testimonials from '../components/Testimonials';
import FreeTrial from '../components/FreeTrial';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
      <Hero />
      <CostComparison />
      <Services />
      <Benefits />
      <About />
      <HowItWorks />
      <Security />
      <Testimonials />
      <FreeTrial />
      <ContactForm />
    </>
  );
};

export default Home;
