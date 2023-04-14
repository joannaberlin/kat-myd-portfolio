import styles from './Hero.module.scss';
import { useScroll } from '@use-gesture/react';

const images = [
	'/images/1re-premium.jpg',
	'/images/2gdy-bankowiec.jpg',
	'/images/3zodiak.jpg',
	'/images/4zodiak.jpg',
	'/images/5bl-wh.jpg',
	'/images/6re.jpg',
	'/images/7zodiak.jpg',
	'/images/8re.jpg',
	'/images/9zodiak.jpg',
	'/images/10re.jpg',
	'/images/11re.jpg',
];

const Hero = () => {
	const bind = useScroll((event) => (event.scrolling ? event.delta[0] : 0));

	return (
		<>
			<div className={styles.container} {...bind()}>
				{images.map((src) => (
					<div
						key={src}
						className={styles.card}
						style={{
							backgroundImage: `url(${process.env.PUBLIC_URL}${src})`,
						}}
					/>
				))}
			</div>
		</>
	);
};

export default Hero;
