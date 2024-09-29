import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainSection from '../components/section/MainSection';
import AboutSection from '../components/section/AboutSection';
import FeatureSection from '../components/section/FeatureSection';

function LandingPage() {
  return (
    <div className="grid grid-cols-1">
      <Header />
      <div className="relative">
        <MainSection />
        <AboutSection />
        <FeatureSection />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
