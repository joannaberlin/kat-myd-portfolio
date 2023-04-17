import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import RootLayout from './pages/RootLayout/RootLayout';
import Error from './pages/Error/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
			{
				path: 'portfolio',
				element: <Portfolio />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
