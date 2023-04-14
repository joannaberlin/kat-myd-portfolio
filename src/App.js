import Logo from './components/Logo/Logo';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import { a } from '@react-spring/web';
import { images } from './items';

import styles from './styles.module.scss';

function App() {
	return (
		<>
			<Container>
				<Logo />
			</Container>
			<div className={`flex fill center ${styles.container}`}>
				<div className={styles.main}>
					<Slider images={images} width={400} visible={5}>
						{({ css }, i) => (
							<div className={styles.content}>
								<div className={styles.marker}>
									{String(i).padStart(2, '0')}
								</div>
								<a.div
									className={styles.image}
									style={{ backgroundImage: css }}
								/>
							</div>
						)}
					</Slider>
				</div>
			</div>
			<Container>
				<Footer />
			</Container>
		</>
	);
}

export default App;
