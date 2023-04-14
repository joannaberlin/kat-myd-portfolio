import Logo from './components/Logo/Logo';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';

function App() {
	return (
		<>
			<Container>
				<Logo />
			</Container>
			<Hero />
			<Container>
				<Footer />
			</Container>
		</>
	);
}

export default App;
