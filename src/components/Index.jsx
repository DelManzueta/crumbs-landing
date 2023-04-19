import React, { useEffect, useState } from 'react';

import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import SocialIcons from './SocialIcons';
import Product from './Product';

import indexStyles from '../assets/styles/pages/index.module.css';
import { motion } from 'framer-motion';
import { useScroll } from 'framer-motion';

const Index = () => {
	const { scrollY } = useScroll();
	const [contactInView, setContactInView] = useState(false);
	const [canScroll, setCanScroll] = useState(false);

	const handleConnectWithUsClick = () => {
		setContactInView(true);
		document.getElementById('contact-form').scrollIntoView({
			behavior: 'smooth',
		});
		setCanScroll(true);
	};

	const handleShopNowClick = () => {
		document.getElementById('info').scrollIntoView({
			behavior: 'smooth',
		});
		setCanScroll(true);
	};

	const variants = {
		visible: {
			opacity: 1,
			translateX: 0,
			y: 100,
			transition: {
				duration: 1,
				ease: 'easeInOut',
			},
		},
		hidden: {
			opacity: 0,
			translateX: '-100%',
			y: 50,
		},
	};

	return (
		<>
			<motion.div
				style={{
					color: 'var(--black)',
					overflow: canScroll ? 'auto' : 'hidden',
				}}
				className={indexStyles.indexContainer}
			>
				<div
					className='header'
					id='home'
				>
					<Header handleShopNowClick={handleShopNowClick} />
				</div>
				<SocialIcons />
				<Product />
				<motion.button
					className={indexStyles.connectBtn}
					onClick={handleConnectWithUsClick}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 1.5 }}
				></motion.button>
				<Contact />
				<Footer />
			</motion.div>
		</>
	);
};

export default Index;
