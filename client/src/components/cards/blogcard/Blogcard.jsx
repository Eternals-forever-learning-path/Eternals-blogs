import React from 'react';
import { Link } from 'react-router-dom';
import './blogcard.scss';

const Blogcard = ({ index, style }) => {
	return (
		<Link to={`/blog/${index}`} style={{textDecoration:'none', color:'black'}}>
			<div className='blogcard' style={style}>
				<div className='blogcard-image'>
					<img
						src='https://images.pexels.com/photos/924633/pexels-photo-924633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
						className='image'
						alt='blog alternative text'
					/>
				</div>
				<div className='blogcard-title'>
					<span className='title'>How to be the best</span>
					<span className='author'>Abhishek Kalavadiya</span>
					<span className='date'>22 Oct, 2020</span>
				</div>
				<div className='blogcard-content'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
						provident facere laudantium minima minus ullam nobis earum quo
						neque, ad id exercitationem! Eius ipsam voluptatem voluptates rerum
						iste, hic cumque.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
						provident facere laudantium minima minus ullam nobis earum quo
						neque, ad id exercitationem! Eius ipsam voluptatem voluptates rerum
						iste, hic cumque.
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Blogcard;
