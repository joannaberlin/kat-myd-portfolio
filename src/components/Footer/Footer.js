import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className={styles.footer_wrapper}>
			{/* <Link to=''>
				<i className='fa fa-instagram' />
			</Link> */}

			<p>Kat Mydlak, copyright 2023</p>
		</div>
	);
};

export default Footer;
