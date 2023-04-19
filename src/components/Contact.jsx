import contactStyles from '../assets/styles/pages/contact.module.css';
import { useState } from 'react';

const Contact = () => {
	const [firstName, setFirstName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

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

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(`
      Name: ${firstName}
      Phone Number: ${phoneNumber}
      Email: ${email}
      Message: ${message}
    `);
	};

	return (
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
	);
};

export default Contact;
