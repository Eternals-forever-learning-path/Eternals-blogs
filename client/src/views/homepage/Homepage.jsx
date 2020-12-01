import React from 'react';
import Navbar from 'components/navbar/Navbar';
import Footer from 'components/footer/Footer';
import './homepage.scss';

const Homepage = () => {
	return (
		<div className='homepage'>
			<Navbar />
			This is the main content
			<Footer />
		</div>
	);
};

export default Homepage;
