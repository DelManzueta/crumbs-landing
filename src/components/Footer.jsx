import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FaPhone } from 'react-icons/fa';
import {
  faTelegramPlane,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import footerStyles from '../assets/styles/components/footer.module.css';

const Footer = () => {
  const handlePhoneIconClick = () => {
    window.open('tel:929-996-8863', '_self');
  };

  return (
    <footer className={footerStyles.container}>
      <div className={footerStyles.icons}>
        <span
          className={footerStyles.icon}
          onClick={handlePhoneIconClick}
        >
          <FaPhone />
        </span>
        <a
          href='https://t.me/thccrumbs'
          className={footerStyles.icon}
        >
          <FontAwesomeIcon icon={faTelegramPlane} />
        </a>
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
          href={`sms:+19299968863`}
          className={footerStyles.icon}
        >
          <FontAwesomeIcon icon={faCommentAlt} />
        </a>
      </div>
      <div className={footerStyles.email}>
        <a href='mailto:420@thccrumbs.com'>420@thcrumbs.com</a>
      </div>
    </footer>
  );
};

export default Footer;
