import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={styles.footer_wrapper}>
			<a
				href='https://www.instagram.com/kasia_mydlak_fashion_stylist/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<i className='fa fa-instagram' />
			</a>
			<p>Kat Mydlak, copyright 2023</p>
		</div>
	);
};

export default Footer;
