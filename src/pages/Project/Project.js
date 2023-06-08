import { useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import { imagesAll } from '../../items';

const Project = () => {
	const { projectId } = useParams();
	const projectData = imagesAll.filter((items) =>
		items.projectId === parseInt(projectId) ? items.images : false
	);
	console.log(projectData[0].images);

	return (
		<Container>
			<div>
				<h2>Hello</h2>
				{projectData[0].images.map((images, i) => (
					<img
						key={i}
						src={images.url}
						alt={images.alt}
						// className={styles.image}
					></img>
				))}
			</div>
		</Container>
	);
};

export default Project;
