import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import '../assets/styles/components/Modal.css';
import logo from '../assets/img/logo.png';

const AgeVerificationModal = ({ onVerified }) => {
	const [isModalOpen, setIsModalOpen] = useState(true);
	const [isVerified, setIsVerified] = useState(false);
	const [dob, setDob] = useState('');

	const handleVerification = (event) => {
		event.preventDefault();
		const birthYear = Number(dob);
		const currentYear = new Date().getFullYear();
		const age = currentYear - birthYear;
		if (age >= 21) {
			setIsVerified(true);
			setIsModalOpen(false);
			onVerified(true);
		} else {
			alert('You must be 21 years or older to view this content.');
		}
	};

	const handleInputChange = (event) => {
		const value = event.target.value;
		const re = /^[0-9\b]+$/;
		if (value === '' || re.test(value)) {
			setDob(value);
		}
	};

	if (!isModalOpen || isVerified) {
		return null;
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className='AgeVerificationModal'
			transition={{ duration: 2.5 }}
		>
			<motion.img
				id='home'
				className='Modal__logo'
				src={logo}
				alt='THCrumbs RSO Infused Gummies'
			/>
			<motion.div
				initial={{ y: '-75vh' }}
				animate={{ y: 10 }}
				className='AgeVerificationModal__inner'
				transition={{ type: 'spring', duration: 1.5 }}
			>
				<h2>Age Verification Required</h2>
				<form onSubmit={handleVerification}>
					<label htmlFor='dob'>
						
						<input
							type='text'
							id='dob'
							placeholder='Year of Birth (YYYY)'
							maxLength={4}
							value={dob}
							onChange={handleInputChange}
							required
						/>
					</label>
					<p>You must be 21 years or older to view this content.</p>

					<Button text='Verify' onClick={handleVerification} />
				</form>
			</motion.div>
		</motion.div>
	);
};

export default AgeVerificationModal;
