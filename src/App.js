import './style/App.scss'
import Blog from './components/Blog/Blog'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Page from './components/Page/Page'
import Login from './components/Partials/Login'
import Register from './components/Partials/Register'

import AuthContextProvider from './contexts/AuthContext'
import UserContextProvider from './contexts/UserContext'
import Dashboard from './components/User/Dashboard'

function App() {
	return (
		<div className="App">
			<AuthContextProvider>
				<UserContextProvider>
					<Router>
						<Header />
						<Switch>
							<Route path="/" exact>
								<Blog />
							</Route>
							<Route path="/dashboard">
								<Dashboard />
							</Route>
							<Route path="/login" exact>
								<Login />
							</Route>
							<Route path="/register" exact>
								<Register />
							</Route>
							<Route path="/show/page/:id" exact>
								<Page />
							</Route>
						</Switch>
					</Router>
				</UserContextProvider>
			</AuthContextProvider>
		</div>
	)
}

export default App
