import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Home } from './pages/Home/index.tsx';
import { NotFound } from './pages/_404.tsx';
import './style.css';
import { Redirect } from './components/Redirect.tsx';

export function App() {
	return (
		<LocationProvider>
			<main>
				<Router>
                    <Route path="/" component={Redirect} />
					<Route path="/:country" component={Home} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
