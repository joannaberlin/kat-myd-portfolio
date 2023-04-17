import { Outlet } from 'react-router-dom';

import Logo from '../../components/Logo/Logo';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';

const RootLayout = () => {
	return (
		<>
			<Container>
				<Logo />
				<Footer />
			</Container>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
