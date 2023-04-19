import * as React from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

import bag from '../assets/img/bag-shade.png';
import headerStyles from '../assets/styles/components/header.module.css';

const container = {
	hidden: { opacity: 0, scale: 0 },
	visible: {
		y: 0,
		opacity: 1,
		scale: 1,
	},
};

const item = {
	hidden: { x: 0, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 1,
			stagger: {
				each: 1,
				staggerDirection: -1,
				ease: 'easeInOut',
			},
		},
	},
};

const item2 = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 2,
			stagger: {
				each: 1,
				staggerDirection: 1,
				ease: 'easeInOut',
			},
		},
	},
};

const item3 = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delay: 3,
			stagger: {
				each: 1,
				staggerDirection: 1,
				ease: 'easeInOut',
			},
		},
	},
};

const yorkItem = {
	hidden: {
		x: 150,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 3.75,
			duration: 1,
			ease: 'easeInOut',
		},
	},
};

const bagAnimation = {
	hidden: {
		x: '-5%',
		y: '-5%',
		rotate: 2,
		opacity: 0,
	},
	visible: {
		x: 0,
		y: 0,
		rotate: 5,
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.55,
			type: 'fade',
			damping: 0,
			stiffness: 0,
			delay: 1,
			ease: 'easeInOut',
		},
	},
};

const bagScrollAnimation = {
	transition: {
		ease: 'easeInOut',
		type: 'spring',
		damping: 10,
		stiffness: 100,
	},
};

const exitVariants = {
	hidden: {
		opacity: 0,
		scale: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
};

const Header = () => {
	const [animationComplete, setAnimationComplete] = useState(false);
	const { scrollY } = useScroll();
	const y1 = useTransform(scrollY, [0, 500], [0, -500]);
	const y2 = useTransform(scrollY, [0, 500], [0, -750]);
	const y3 = useTransform(scrollY, [0, 500], [0, 700]);
	const y4 = useTransform(scrollY, [0, 500], [0, 600]);
	const y5 = useTransform(scrollY, [0, 500], [0, -900]);
	const [contactInView, setContactInView] = useState(false);

	const handleEmailFormSubmit = async (event) => {
		event.preventDefault();
		const email = event.target.email.value;

		try {
			const response = await fetch(
				'https://your-email-api.com/send-email',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						to: email,
						subject: 'Thanks for signing up!',
						body: 'Thank you for signing up for our email list!',
					}),
				}
			);
			const data = await response.json();
			console.log('Email sent successfully!', data);
			// show success message to user
		} catch (error) {
			console.error('Error sending email:', error);
			// show error message to user
		}
	};

	useEffect(() => {
		const handleComplete = () => {
			setAnimationComplete(true);
		};
		const header = document.querySelector('.header');
		header.addEventListener('animationend', handleComplete);
		return () => header.removeEventListener('animationend', handleComplete);
	}, []);

	const handleScroll = (event) => {
		if (!animationComplete) {
			event.preventDefault();
		}
	};
	const handleConnectWithUsClick = () => {
		setContactInView(true);
		document.getElementById('contact-form').scrollIntoView({
			behavior: 'smooth',
		});
		setCanScroll(true);
	};

	return (
		<div
			className={headerStyles.headerContainer}
			style={{
				overflowY: animationComplete ? 'scroll' : 'hidden',
				y: y2,
			}} // toggle overflowY based on animationComplete
		>
			<motion.div
				className={headerStyles.headerRow}
				style={{ y: y1 }}
			>
				<motion.div
					className={headerStyles.headerLeft}
					variants={container}
					initial='hidden'
					animate='visible'
				>
					{/* Copy */}
					<motion.h3
						variants={item}
						className={headerStyles.staple}
						style={{ y: y1 }}
					>
						The
					</motion.h3>
					<div
						className={headerStyles.headerSpan}
						id='home'
					>
						<motion.h3
							variants={item2}
							style={{ y: y3 }}
						>
							New
						</motion.h3>
						<motion.h3
							variants={yorkItem}
							className={headerStyles.yorkItem}
							style={{ y: y3 }}
						>
							York
						</motion.h3>
					</div>
					<motion.h3
						className={headerStyles.staple}
						variants={item3}
						style={{ y: y5 }}
					>
						Standard
					</motion.h3>
					{/* Copy Ends */}

					{/* Button */}
					<motion.div
						className={headerStyles.ctaContainer}
						variants={exitVariants}
						initial='visible'
						animate='visible'
						style={{
							y: y3,
						}}
					>
						<form onSubmit={handleEmailFormSubmit}>
							<input
								className={headerStyles.emailInput}
								type='email'
								name='email'
								placeholder='Enter your email for updates'
								required
							/>
							<motion.button
								className={headerStyles.connectBtn}
								type='submit'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 1.5 }}
							>
								Sign Up
							</motion.button>
						</form>
					</motion.div>
					{/* Button Ends */}
				</motion.div>
				<motion.div
					className={headerStyles.headerRight}
					variants={item}
				>
					<motion.img
						id='home'
						className={headerStyles.image}
						src={bag}
						alt='THCrumbs RSO Infused Gummies'
						variants={bagAnimation}
						initial='hidden'
						animate='visible'
						style={{
							y: y3,
						}}
						onAnimationComplete={() =>
							console.log('bag animation complete')
						}
						onTap={() => console.log('tapped')}
						{...bagScrollAnimation}
					/>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Header;
