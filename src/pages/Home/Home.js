import Slider from '../../components/Slider/Slider';
import { a } from '@react-spring/web';
import { images } from '../../items';
import Container from '../../components/Container/Container';

import styles from './Home.module.scss';

const Home = () => {
	console.log(window.innerWidth);
	const windowWidth = window.innerWidth;

	if (windowWidth <= 576) {
		return (
			<Container>
				<section className={styles.images_section}>
					{images.map((image, i) => (
						<img
							key={i}
							src={image.url}
							alt={image.alt}
							className={styles.imageMobile}
						></img>
					))}
					{/* <img
						src={`${process.env.PUBLIC_URL}/images/slider/7-bankowiec.jpg`}
						alt='test'
					/> */}
				</section>
				{/* <footer className={styles.footerMobile}>
					<a
						href='https://www.instagram.com/kasia_mydlak_fashion_stylist/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fa fa-instagram' />
					</a>
					<p>Kat Mydlak, copyright 2023</p>
				</footer> */}
			</Container>
		);
	}

	if (windowWidth > 576 && windowWidth < 992) {
		return (
			<section>
				<p className={styles.imagesText}>
					Hover and scroll to discover more &gt;&gt;
				</p>
				<div className={styles.main}>
					<Slider images={images} width={200} visible={5}>
						{({ css }, i) => (
							<div className={styles.content}>
								{/* <div className={styles.marker}>{String(i).padStart(2, '0')}</div> */}
								<a.div
									className={styles.image}
									style={{ backgroundImage: css }}
								/>
							</div>
						)}
					</Slider>
				</div>
				<div className={styles.descriptionText}>
					<p>
						Welcome to online portfolio of Katarzyna Mydlak. Here you will find
						commercial fashion styling samples and editorial samples.
					</p>
					<p>Enjoy browsing and feel free to contact me for a collaboration.</p>
				</div>
			</section>
		);
	}

	if (windowWidth >= 992) {
		return (
			<section>
				<p className={styles.imagesText}>
					Hover and scroll to discover more &gt;&gt;
				</p>
				<div className={styles.main}>
					<Slider images={images} width={400} visible={5}>
						{({ css }, i) => (
							<div className={styles.content}>
								{/* <div className={styles.marker}>{String(i).padStart(2, '0')}</div> */}
								<a.div
									className={styles.image}
									style={{ backgroundImage: css }}
								/>
							</div>
						)}
					</Slider>
				</div>
				<div className={styles.descriptionText}>
					<p>
						Welcome to online portfolio of Katarzyna Mydlak. Here you will find
						commercial fashion styling samples and editorial samples.
					</p>
					<p>Enjoy browsing and feel free to contact me for a collaboration.</p>
				</div>
			</section>
		);
	}
};

export default Home;
