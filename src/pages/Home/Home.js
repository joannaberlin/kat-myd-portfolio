import Slider from '../../components/Slider/Slider';
import { a } from '@react-spring/web';
import { images } from '../../items';

import styles from './Home.module.scss';

const Home = () => {
	return (
		<section className={`flex fill center ${styles.container}`}>
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
};

export default Home;
