import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Hero from './hero';
import Navigation from './navigation';
import Contact from './contact';
import Map from './map';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Navigation />
		<Hero />
		<Contact />
		<Map />
		<Footer />
	</div>
);

export default Layout;
