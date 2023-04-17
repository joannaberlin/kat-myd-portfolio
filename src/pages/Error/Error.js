import { useRouteError } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import styles from './Error.module.scss';

const Error = () => {
	const error = useRouteError();

	let title = 'Something went wrong.';
	let message = '';

	if (error.status === 500) {
		message = error.data.message;
	}

	if (error.status === 404) {
		message = `We couldn't find the page you were looking for.`;
	}

	return (
		<Container>
			<Logo />
			<Footer />
			<div className={styles.error_wrapper}>
				<h2>{title}</h2>
				<p>{message}</p>
			</div>
		</Container>
	);
};

export default Error;
