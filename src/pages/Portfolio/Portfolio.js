import Container from '../../components/Container/Container';
import { imagesAll } from '../../items';
import { Link } from 'react-router-dom';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
	return (
		<Container>
			<section className={styles.images_wrapper}>
				{imagesAll.map((project, i) => (
					<Link
						key={project.projectId}
						to={'/portfolio/' + project.projectId}
						className={styles.imageLink}
					>
						<img
							key={i}
							src={project.images[0].url}
							alt={project.images[0].alt}
							className={styles.image}
						></img>
					</Link>
				))}
			</section>
		</Container>
	);
};

export default Portfolio;
