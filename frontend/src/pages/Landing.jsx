import React from 'react';
import Header from '../components/Header';

function LandingPage() {
  return (
    <div className="mt-20 grid grid-cols-1">
      <Header />
      <div className="relative">
        <h1 className="text-center text-3xl">Hi</h1>
      </div>
    </div>
  );
}

export default LandingPage;
