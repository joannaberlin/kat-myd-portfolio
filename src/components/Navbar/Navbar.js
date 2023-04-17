import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = () => {
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
		</nav>
	);
};

export default Navbar;
