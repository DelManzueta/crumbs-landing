// import Nutritional from './Nutritional';
import ProductDescription from './ProductDescription';
import React from 'react';
import img from '../assets/img/hero-sm.png';
import { motion } from 'framer-motion';
import styles from '../assets/styles/pages/info.module.css';
import { useInView } from 'react-intersection-observer';
import Nutritional from './Nutritional';
import Product from './Product';

const Info = () => {
	const [ref, inView] = useInView({ threshold: 0.5 });

	const containerVariants = {
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				duration: 0.5,
			},
		},
		hidden: { opacity: 0 },
	};

	const imageVariants = {
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: 'easeInOut',
			},
		},
		hidden: { scale: 0.5, opacity: 0 },
	};

	const handleOrderClick = () => {
		window.location.href = 'https://t.me/YourTelegramChannel'; // Telegram channel link
	};

	return (
		<motion.div
			className={styles.infoContainer}
			ref={ref}
			initial='hidden'
			animate={inView ? 'visible' : 'hidden'}
			variants={containerVariants}
			id='info'
		>
			<Product />
		</motion.div>
	);
};

export default Info;
