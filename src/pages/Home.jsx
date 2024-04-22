import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PopularSearches from '../components/PorpularSearches';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar  />
      <div className="container mx-auto px-4">
        <Hero />
        <PopularSearches />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
