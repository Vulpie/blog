import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { AuthContext } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

const Login = () => {
	const history = useHistory()
	const redirectAfterLogin = () => {
		history.push('/')
	}
	const { setUser } = useContext(UserContext)
	const { setIsAuthenticated, isAuthenticated } = useContext(AuthContext)
	const handleSubmit = (e) => {
		e.preventDefault()
		const username = e.target['username'].value
		const password = e.target['password'].value
		console.log(username)
		console.log(password)
		const user_credentails = { username, password }
		console.log(user_credentails)
		fetch('/wp-json/jwt-auth/v1/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user_credentails),
		})
			.then((res) => res.json())
			.then((data) => {
				localStorage.setItem('token', data.token)
				const user = {
					name: data.user_display_name,
					email: data.user_email,
				}
				localStorage.setItem('user', JSON.stringify(user))
				console.log(data)
				if (!data.token) {
					throw 'There is no auth token'
				}

				setUser(user)
				setIsAuthenticated(true)
				redirectAfterLogin()
			})
			.catch((err) => console.log(err))
	}
	return (
		<form onSubmit={(e) => handleSubmit(e)} className="user-form">
			<h3 className="user-form__header">Login</h3>
			<label className="user-form__label">Username</label>
			<input type="text" name="username" className="user-form__input" />
			<label className="user-form__label">Password</label>
			<input
				type="password"
				name="password"
				className="user-form__input"
			/>
			<button type="submit" className="user-form__button">
				Log in
			</button>
		</form>
	)
}

export default Login
