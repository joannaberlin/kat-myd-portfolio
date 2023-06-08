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
						key={i}
						to={'/portfolio/' + project.projectId}
						className={styles.imageLink}
					>
						<div className={styles.image_wrapper}>
							<img
								key={i}
								src={project.images[0].url}
								alt={project.images[0].alt}
								className={styles.image}
							></img>
							<div className={styles.text_wrapper}>
								<p>{project.projectName}</p>
								<p>Discover More</p>
							</div>
						</div>
					</Link>
				))}
			</section>
		</Container>
	);
};

export default Portfolio;
