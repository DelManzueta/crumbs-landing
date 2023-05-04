import React from 'react';
import { Link } from 'react-scroll';
import navbarStyles from '../assets/styles/components/navbar.module.css';
import logo from '../assets/img/logo.png';

const Navbar = () => {
	const handleCallNowClick = () => {
		window.open('tel:929-996-8863', '_self');
	};

	return (
		<nav className={navbarStyles.navBar}>
			<div className={navbarStyles.logo}>
				<Link
					to='home'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					<img
						src={logo}
						alt='logo'
					/>
				</Link>
			</div>
			<ul className={navbarStyles.navbarMenu}>
				<li className={navbarStyles.navbarItem}>
					<Link
						activeClass={navbarStyles.active}
						to='info'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						THCrumbs
					</Link>
				</li>
				<li className={navbarStyles.navbarItem}>
					<Link
						activeClass={navbarStyles.active}
						to='social'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						Connect
					</Link>
				</li>
				<li className={navbarStyles.navbarItem}>
					<Link
						activeClass={navbarStyles.active}
						to='contact'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						Contact
					</Link>
				</li>
				<li className={navbarStyles.navbarItem}>
					<button
						onClick={handleCallNowClick}
						className={navbarStyles.callNowButton}
					>
						Call Us Now
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
