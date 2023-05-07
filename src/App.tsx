import React from 'react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Hero from '../src/components/Hero';
import Slider from '../src/components/Slider';

export default function App({ Component, pageProps }: any): JSX.Element {
  return (
    <>
      <Navbar />
      <Hero heading="Atelier Arcadie" message="" />
      <Slider />
      <Footer />
    </>
  );
}
