import { useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import styles from './Project.module.scss';
import { imagesAll } from '../../items';

const Project = () => {
	const { projectId } = useParams();
	const projectData = imagesAll.filter((items) =>
		items.projectId === parseInt(projectId) ? items.images : false
	);

	return (
		<Container>
			<div className={styles.images_container}>
				{projectData[0].images.map((images, i) => (
					<img
						key={i}
						src={images.url}
						alt={images.alt}
						className={styles.image}
					></img>
				))}
			</div>
		</Container>
	);
};

export default Project;
