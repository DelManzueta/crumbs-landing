import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

import { FaPhone } from 'react-icons/fa'; // Import the phone icon
import {
	faTelegram,
	faInstagram,
	faTwitter,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import socialIconsStyles from '../assets/styles/components/socialIcons.module.css';

const SocialIcons = () => {
	const handlePhoneIconClick = () => {
		window.open('tel:929-996-8863', '_self');
	};

	return (
		<div className={socialIconsStyles.container}>
			<span
				className={socialIconsStyles.header}
				id='social'
			>
				Connect With Us Today
			</span>
			<div className={socialIconsStyles.icons}>
				{/* Add phone icon */}
				<span
					className={socialIconsStyles.icon}
					onClick={handlePhoneIconClick}
				>
					<FaPhone />
				</span>

				<a
					href='https://t.me/your_telegram_channel'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon
						icon={faTelegram}
						className={socialIconsStyles.icon}
					/>
				</a>
				<a
					href='https://www.instagram.com/thcrumbs_'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon
						icon={faInstagram}
						className={socialIconsStyles.icon}
					/>
				</a>
				<a
					href='https://twitter.com/nycannabis_'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon
						icon={faTwitter}
						className={socialIconsStyles.icon}
					/>
				</a>
				<a
					href={`sms:+19299968863`}
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon
						icon={faCommentAlt}
						className={socialIconsStyles.icon}
					/>
				</a>
			</div>
		</div>
	);
};

export default SocialIcons;
