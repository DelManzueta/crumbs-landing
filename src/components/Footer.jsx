import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faTwitter,
	faTelegramPlane,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import footerStyles from '../assets/styles/components/footer.module.css';

const Footer = () => {
	return (
		<footer className={footerStyles.container}>
			<div className={footerStyles.icons}>
				<a
					href='https://www.instagram.com/thccrumbs/'
					className={footerStyles.icon}
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<a
					href='https://twitter.com/thccrumbs'
					className={footerStyles.icon}
				>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a
					href='https://t.me/thccrumbs'
					className={footerStyles.icon}
				>
					<FontAwesomeIcon icon={faTelegramPlane} />
				</a>
				<a
					href='mailto:420@thccrumbs.com'
					className={footerStyles.icon}
				>
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
			</div>
			<div className={footerStyles.email}>
				<a href='mailto:420@thccrumbs.com'>420@thcrumbs.com</a>
			</div>
		</footer>
	);
};

export default Footer;
