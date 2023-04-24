import React from 'react';
import Nutritional from './Nutritional';
import '../assets/styles/pages/Product.css';

function Product() {
	const handleBuyNow = () => {
		window.open('https://t.me/thccrumbs', '_blank');
	};

	return (
		<div className='section-fluid-main' id='info'>
			<div className='section'>
				<div className='info-wrap mob-margin'>
					<p className='title-up'>THCrumbs</p>
					<h2>Fruit Flavored Gummies</h2>
					<div className='section-fluid'>
						<input
							className='desc-btn'
							type='radio'
							id='desc-1'
							name='desc-btn'
							defaultChecked
						/>
						<label htmlFor='desc-1'>Description</label>
						<input
							className='desc-btn'
							type='radio'
							id='desc-2'
							name='desc-btn'
						/>
						<label htmlFor='desc-2'>Details</label>
						<div className='section-fluid desc-sec accor-1'>
							<p>
								The combination of highest quality indoor
								flower, RSO infusion, and expert craftsmanship
								results in gummies that are not only delicious,
								but also deliver a powerful and consistent
								cannabis experience that customers can rely on.
							</p>
						</div>
						<div className='section-fluid desc-sec accor-2'>
							<p>Serving Size: 1 Gummy</p>
							<br />
							<div className='section-inline'>
								<p>
									<span>15</span>mg
									<br />
									Dosage
								</p>
							</div>
							<div className='section-inline'>
								<p>
									<span>10</span>
									<br />
									Calories
								</p>
							</div>
							<div className='section-inline'>
								<p>
									<span>0</span>g
									<br />
									Total Fat
								</p>
							</div>
							<div className='section-inline'>
								<p>
									<span>0</span>mg
									<br />
									Sodium
								</p>
							</div>
							<div className='section-inline'>
								<p>
									<span>2</span>g
									<br />
									Total Carbs.
								</p>
							</div>
							<div className='section-inline'>
								<p>
									<span>2</span>g
									<br />
									Sugar
								</p>{' '}
							</div>
						</div>
					</div>
					<h5>Our Different Flavors:</h5>
				</div>
				<div className='clearfix'></div>
				<input
					className='color-btn for-color-1'
					type='radio'
					id='color-1'
					name='color-btn'
					defaultChecked
				/>
				<label
					className='first-color'
					htmlFor='color-1'
				></label>
				<input
					className='color-btn for-color-2'
					type='radio'
					id='color-2'
					name='color-btn'
				/>
				<label
					className='color-2'
					htmlFor='color-2'
				></label>
				<input
					className='color-btn for-color-3'
					type='radio'
					id='color-3'
					name='color-btn'
				/>
				<label
					className='color-3'
					htmlFor='color-3'
				></label>
				<input
					className='color-btn for-color-4'
					type='radio'
					id='color-4'
					name='color-btn'
				/>
				<label
					className='color-4'
					htmlFor='color-4'
				></label>

				<div className='clearfix'></div>
				<div className='info-wrap'>
					<a
						href='https://t.me/thccrumbs'
						target='_blank'
						rel='noopener noreferrer'
						className='btn'
					>
						<i className='uil uil-shopping-cart icon'></i> Buy Now
					</a>
				</div>
				<div className='img-wrap chair-1'></div>
				<div className='img-wrap chair-2'></div>
				<div className='img-wrap chair-3'></div>
				<div className='img-wrap chair-4'></div>
				<div className='back-color'></div>
				<div className='back-color chair-2'></div>
				<div className='back-color chair-3'></div>
				<div className='back-color chair-4'></div>
			</div>
		</div>
	);
}

export default Product;
