import PageTitle from '../../components/PageTitle/PageTitle';
import Container from '../../components/Container/Container';
import styles from './Contact.module.scss';

const Contact = () => {
	return (
		<Container>
			<section className={styles.section}>
				<PageTitle>Contact</PageTitle>
				<div className={styles.contactDetails_wrapper}>
					<h1>Email</h1>
					<p>katmydlak@email.com</p>
					<h1>Phone</h1>
					<p>+48 123 456 789</p>
					<h2>Let's stay connected:</h2>
					<a
						href='https://www.instagram.com/kasia_mydlak_fashion_stylist/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Instagram
					</a>
				</div>
			</section>
		</Container>
	);
};

export default Contact;
