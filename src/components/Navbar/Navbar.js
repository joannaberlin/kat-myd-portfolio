import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.scss';
import Logo from '../Logo/Logo';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleOpenBurger = () => {
		setOpen(true);
	};

	const handleCloseBurger = () => {
		setOpen(false);
	};

	return (
		<nav>
			<ul className={styles.list}>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? styles.active : undefined)}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/about'
						className={({ isActive }) => (isActive ? styles.active : undefined)}
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/portfolio'
						className={({ isActive }) => (isActive ? styles.active : undefined)}
					>
						Portfolio
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/contact'
						className={({ isActive }) => (isActive ? styles.active : undefined)}
					>
						Contact
					</NavLink>
				</li>
			</ul>
			{!open ? (
				<div className={styles.burgerLogo_wrapper}>
					<div className={styles.logo_wrapper}>
						<Logo />
					</div>
					<button className={styles.burger} onClick={handleOpenBurger}>
						<div className={`${styles.line} ${styles.line2}`}></div>
						<div className={`${styles.line} ${styles.line2}`}></div>
						<div className={`${styles.line} ${styles.line2}`}></div>
					</button>
				</div>
			) : (
				false
			)}

			{open ? (
				<nav className={styles.navMobile}>
					<button className={styles.closeButton} onClick={handleCloseBurger}>
						<span className='sr-only'>Close</span>
					</button>
					<ul className={styles.list_burger}>
						<NavLink
							to='/'
							className={styles.navLink_burger}
							onClick={handleCloseBurger}
						>
							Home
						</NavLink>
						<NavLink
							to='/About'
							className={styles.navLink_burger}
							onClick={handleCloseBurger}
						>
							About
						</NavLink>
						<NavLink
							to='/Portfolio'
							className={styles.navLink_burger}
							onClick={handleCloseBurger}
						>
							Portfolio
						</NavLink>
						<NavLink
							to='/Contact'
							className={styles.navLink_burger}
							onClick={handleCloseBurger}
						>
							Contact
						</NavLink>
					</ul>
				</nav>
			) : (
				false
			)}
		</nav>
	);
};

export default Navbar;
