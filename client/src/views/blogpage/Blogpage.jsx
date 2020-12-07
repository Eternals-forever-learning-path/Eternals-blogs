import React from 'react';
import Navbar from 'components/navbar/Navbar';
import Footer from 'components/footer/Footer';
import Blogcard from 'components/cards/blogcard/Blogcard';
import './blogpage.scss';

const Blogpage = () => {
	return (
		<div className='blogpage'>
			<Navbar />
			<div className='blogpage-content'>
				<div className='blog'>
					<div className='buttons'>
						<div className='button'>
							<i className='fa fa-heart'></i>
						</div>
						<div className='button'>
							<i className='fa fa-book'></i>
						</div>
						<div className='button'>
							<i className='fa fa-car'></i>
						</div>
					</div>
					<div className='title'>
						<span className='blog-title'>How do I make a Blog?</span>
						<span className='name'>Abhishek Kalavadiya</span>
						<div>
							<span className='date'>22 Oct, 2020</span>
							<span className='time'>10 min read</span>
						</div>
					</div>
					<div className='image-container'>
						<img
							className='image'
							src='https://images.pexels.com/photos/924633/pexels-photo-924633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
							alt='blog'
						/>
					</div>
					<div className='blog'>
						<p className='paragraphs'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Cupiditate delectus quisquam similique enim molestias quibusdam
							eligendi. A aspernatur provident consequuntur nesciunt consequatur
							qui, corporis iste perferendis inventore harum pariatur odio.
						</p>
						<p className='paragraphs'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Cupiditate delectus quisquam similique enim molestias quibusdam
							eligendi. A aspernatur provident consequuntur nesciunt consequatur
							qui, corporis iste perferendis inventore harum pariatur odio.
						</p>
						<p className='paragraphs'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Cupiditate delectus quisquam similique enim molestias quibusdam
							eligendi. A aspernatur provident consequuntur nesciunt consequatur
							qui, corporis iste perferendis inventore harum pariatur odio.
						</p>
						<div className='image-container'>
							<img
								className='image'
								src='https://images.pexels.com/photos/924633/pexels-photo-924633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
								alt='blog'
							/>
						</div>
						<p className='paragraphs'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Cupiditate delectus quisquam similique enim molestias quibusdam
							eligendi. A aspernatur provident consequuntur nesciunt consequatur
							qui, corporis iste perferendis inventore harum pariatur odio.
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Architecto obcaecati delectus repellat exercitationem nemo
							deserunt ullam mollitia cupiditate numquam ducimus magnam
							molestias possimus nam earum voluptatum, porro facilis quibusdam
							quos!
						</p>
						<div className='image-container'>
							<img
								className='image'
								src='https://images.pexels.com/photos/924633/pexels-photo-924633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
								alt='blog'
							/>
						</div>
						<p className='paragraphs'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Cupiditate delectus quisquam similique enim molestias quibusdam
							eligendi. A aspernatur provident consequuntur nesciunt consequatur
							qui, corporis iste perferendis inventore harum pariatur odio.
						</p>
					</div>
				</div>
				<div className='suggestions'>
					<span className='suggestions-heading'>Don't stop reading...</span>
					<div className='suggestions-slider'>
						{[...Array(10)].map((item, index) => (
							<Blogcard style={{ marginRight: '10px' }} index={index} />
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Blogpage;
