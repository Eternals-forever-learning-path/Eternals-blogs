import React from 'react';
import Navbar from 'components/navbar/Navbar';
import Footer from 'components/footer/Footer';
import Tag from 'components/Tag';
import Blogcard from 'components/cards/blogcard/Blogcard';

import './homepage.scss';

const Homepage = () => {
	return (
		<div className='homepage'>
			<Navbar />
			<div className='tagbar'>
			{[...Array(35)].map((item, index) => (
				<Tag text={'tag'} index={index} selected={Math.floor(Math.random()*10)%2} />
			))}
			</div>
			<div className='content'>
				{[...Array(10)].map((item, index) => (
					<Blogcard index={index} />
				))}
			</div>
			<Footer />
		</div>
	);
};

export default Homepage;
