import React, { useState } from 'react'

const Login = () => {
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
				console.log(data)
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
