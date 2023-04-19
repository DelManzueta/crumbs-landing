import './assets/styles/styles.css';

import React, { useState } from 'react';
import Index from './components/Index';
import NavBar from './components/NavBar';
import AgeVerificationModal from './components/AgeVerificationModal';
import Loading from './components/Loading';

function App() {
	const [isAgeVerified, setIsAgeVerified] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleAgeVerification = (isVerified) => {
		if (isVerified) {
			setIsAgeVerified(true);
			setIsLoading(true);

			setTimeout(() => {
				setIsLoading(false);
			}, 750);
		} else {
			window.location.replace('https://www.google.com');
		}
	};

	if (isLoading) {
		return <Loading />;
	}

	if (!isAgeVerified) {
		return <AgeVerificationModal onVerified={handleAgeVerification} />;
	}
	return (
		<div>
			<NavBar />
			<Index />
		</div>
	);
}

export default App;
