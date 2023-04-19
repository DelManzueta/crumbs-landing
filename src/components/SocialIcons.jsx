import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTelegram,
	faInstagram,
	faTwitter,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import socialIconsStyles from '../assets/styles/components/socialIcons.module.css';

const SocialIcons = () => {
	return (
		<div className={socialIconsStyles.container}>
			<span className={socialIconsStyles.header}>Connect With Us Today</span>
			<div className={socialIconsStyles.icons}>
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
					href='https://www.instagram.com/your_instagram_profile'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon
						icon={faInstagram}
						className={socialIconsStyles.icon}
					/>
				</a>
				<a
					href='https://twitter.com/your_twitter_profile'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon
						icon={faTwitter}
						className={socialIconsStyles.icon}
					/>
				</a>
				<a
					href='https://wa.me/your_whatsapp_number'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon
						icon={faWhatsapp}
						className={socialIconsStyles.icon}
					/>
				</a>
			</div>
		</div>
	);
};

export default SocialIcons;
