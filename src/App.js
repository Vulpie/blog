import './App.css'
import Blog from './components/Blog/Blog'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import Gallery from './components/Gallery/Gallery'

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact>
						<Blog />
					</Route>
					<Route path="/contact" exact>
						<Contact />
					</Route>
					<Route path="/gallery" exact>
						<Gallery />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
