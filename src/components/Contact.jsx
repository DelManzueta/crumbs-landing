import axios from 'axios';
import contactStyles from '../assets/styles/pages/contact.module.css';
import { useState } from 'react';

const Contact = () => {
	const [firstName, setFirstName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	const handleFirstNameChange = (event) => {
		setFirstName(event.target.value);
	};

	const handlePhoneNumberChange = (event) => {
		setPhoneNumber(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const mailchimpAPIUrl =
			'https://us1.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members';

		const data = {
			email_address: email,
			status: 'subscribed',
			merge_fields: {
				FNAME: firstName,
				PHONE: phoneNumber,
				MESSAGE: message,
			},
		};

		try {
			const response = await axios.post(mailchimpAPIUrl, data, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `apikey YOUR_MAILCHIMP_API_KEY`,
				},
			});

			if (response.status === 200) {
				// Show success message
				setSuccessMessage('Your message has been sent successfully!');

				// Clear form fields
				setFirstName('');
				setPhoneNumber('');
				setEmail('');
				setMessage('');
			}
		} catch (error) {
			console.error('Error submitting the form:', error);
			setSuccessMessage('An error occurred. Please try again later.');
		}
	};

	return (
		<div id='contact'>
			{/* Display success message if available */}
			{successMessage && (
				<div className={contactStyles.successMessage}>
					{successMessage}
				</div>
			)}

			<form
				className={contactStyles.contactForm}
				onSubmit={handleSubmit}
			>
				<div className={contactStyles.formGroup}>
					<label htmlFor='firstName'>First Name:</label>
					<input
						type='text'
						id='firstName'
						name='firstName'
						className={contactStyles.formInput}
						value={firstName}
						onChange={handleFirstNameChange}
						required
					/>
				</div>
				<div className={contactStyles.formGroup}>
					<label htmlFor='phoneNumber'>Phone Number:</label>
					<input
						type='tel'
						id='phoneNumber'
						name='phoneNumber'
						className={contactStyles.formInput}
						value={phoneNumber}
						onChange={handlePhoneNumberChange}
						pattern='[0-9]*' // only allow numbers
						required
					/>
				</div>
				<div className={contactStyles.formGroup}>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						name='email'
						className={contactStyles.formInput}
						value={email}
						onChange={handleEmailChange}
						required
					/>
				</div>
				<div className={contactStyles.formGroup}>
					<label htmlFor='message'>Message:</label>
					<textarea
						id='message'
						name='message'
						className={contactStyles.formInput}
						value={message}
						onChange={handleMessageChange}
						required
					></textarea>
				</div>
				<button
					type='submit'
					className={contactStyles.formButton}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Contact;
