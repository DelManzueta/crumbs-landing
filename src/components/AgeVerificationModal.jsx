import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/components/Modal.css';

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
			<motion.div
				initial={{ y: '-1000vh' }}
				animate={{ y: 0 }}
				className='AgeVerificationModal__inner'
				transition={{ type: 'spring', duration: 1.5 }}
			>
				<h2>Age Verification Required</h2>
				<p>You must be 21 years or older to view this content.</p>
				<form onSubmit={handleVerification}>
					<label htmlFor='dob'>
						Year of Birth (YYYY)
						<input
							type='text'
							id='dob'
							maxLength={4}
							value={dob}
							onChange={handleInputChange}
							required
						/>
					</label>
					<button type='submit'>Verify</button>
				</form>
			</motion.div>
		</motion.div>
	);
};

export default AgeVerificationModal;
