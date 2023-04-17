import PageTitle from '../../components/PageTitle/PageTitle';
import Container from '../../components/Container/Container';
import styles from './About.module.scss';
import image from '../../images/kat-myd-about.JPG';

const About = () => {
	return (
		<>
			<Container>
				<section className={styles.about_section}>
					<PageTitle>About me</PageTitle>
					<section className={styles.textImage_wrapper}>
						<article className={styles.text_wrapper}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
								elementum diam elit, ut sagittis odio fringilla a. Nam sed odio
								erat. Sed non quam ullamcorper, condimentum odio nec, sagittis
								mi. Donec porta at elit in dignissim. Cras blandit est id
								ultrices vulputate. Donec sit amet luctus enim.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
								elementum diam elit, ut sagittis odio fringilla a. Nam sed odio
								erat. Sed non quam ullamcorper, condimentum odio nec, sagittis
								mi. Donec porta at elit in dignissim. Cras blandit est id
								ultrices vulputate. Donec sit amet luctus enim.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
								elementum diam elit, ut sagittis odio fringilla a. Nam sed odio
								erat. Sed non quam ullamcorper, condimentum odio nec, sagittis
								mi. Donec porta at elit in dignissim. Cras blandit est id
								ultrices vulputate. Donec sit amet luctus enim.
							</p>
						</article>
						<img src={image} alt='fashion stylist profile pic' />
					</section>
				</section>
			</Container>
		</>
	);
};

export default About;
