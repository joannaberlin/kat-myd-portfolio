import { Outlet } from 'react-router-dom';

import Logo from '../../components/Logo/Logo';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import styles from './RootLayout.module.scss';

const RootLayout = () => {
	return (
		<>
			<Container>
				<header className={styles.header}>
					<Logo />
					<Navbar />
				</header>
			</Container>
			<main>
				<Outlet />
				<Container>
					<Footer />
				</Container>
			</main>
		</>
	);
};

export default RootLayout;
