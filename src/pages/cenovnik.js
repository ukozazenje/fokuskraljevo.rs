import React from 'react';
import Helmet from '../components/helmet';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import CenovnikTable from '../components/cenovnik_table';

const Cenovnik = () => (
  <div>
    <Helmet />
		<Navigation />
    <CenovnikTable />
		<Footer />
  </div>
)

export default Cenovnik;