import React, { useSate } from 'react'

const Login = () => {
	const handleSubmit = (e) => {
		e.preventDefault()
		const login = e.target['login'].value
		const password = e.target['password'].value
		console.log(login)
		console.log(password)
	}
	return (
		<form onSubmit={(e) => handleSubmit(e)} className="user-form">
			<label className="user-form__label">Login</label>
			<input type="text" name="login" className="user-form__input" />
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
