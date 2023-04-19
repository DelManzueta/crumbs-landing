import React from 'react';
import { Link } from 'react-scroll';
import navbarStyles from '../assets/styles/components/navbar.module.css';
import logo from '../assets/img/logo.png';

const Navbar = () => {
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
						to='home'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						Home
					</Link>
				</li>
				<li className={navbarStyles.navbarItem}>
					<Link
						activeClass={navbarStyles.active}
						to='info'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						Info
					</Link>
				</li>
				<li className={navbarStyles.navbarItem}>
					<Link
						activeClass={navbarStyles.active}
						to='contact-form'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						Contact
					</Link>
				</li>
				 
			</ul>
		</nav>
	);
};

export default Navbar;
