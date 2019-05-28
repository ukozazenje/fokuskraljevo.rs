import React from 'react';
import Helmet from '../components/helmet';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import AboutUs from '../components/about';

const Onama = () => (
  <div>
    <Helmet />
		<Navigation />
    <AboutUs />
		<Footer />
  </div>
)

export default Onama;