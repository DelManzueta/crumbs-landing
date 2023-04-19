import * as React from 'react';

import { motion } from 'framer-motion';
import pdStyles from '../assets/styles/components/pd.module.css';
import { useInView } from 'react-intersection-observer';

import Product from './Product';

const textVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5 },
	},
};

const ProductDescription = ({ imageVariants }) => {
	const [ref, inView] = useInView({ threshold: 0.5 });

	return (
		<motion.div className={pdStyles.info}> 
				<Product />
		</motion.div>
	);
};

export default ProductDescription;
