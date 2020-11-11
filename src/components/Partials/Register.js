import React from 'react'

const Register = () => {
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('register')
		const { login, email, passwor, re_password } = e.target
		console.log(login.value)
	}
	return (
		<form onSubmit={(e) => handleSubmit(e)} className="user-form">
			<h3 className="user-form__header">Register</h3>
			<label className="user-form__label">Login</label>
			<input
				type="text"
				name="login"
				className="user-form__input"
				required
			/>
			<label className="user-form__label">Email</label>
			<input
				type="text"
				name="email"
				className="user-form__input"
				required
			/>
			<label className="user-form__label">Password</label>
			<input
				type="password"
				name="password"
				className="user-form__input"
				required
			/>
			<label className="user-form__label">Repeat Password</label>
			<input
				type="password"
				name="re_password"
				className="user-form__input"
				required
			/>
			<button type="submit" className="user-form__button">
				Register
			</button>
		</form>
	)
}

export default Register
