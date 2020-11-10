import React from 'react'

const Register = () => {
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('register')
		const { login, email, passwor, re_password } = e.target
		console.log(login.value)
	}
	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<label>Login</label>
			<input type="text" name="login" required />
			<label>Email</label>
			<input type="text" name="email" required />
			<label>Password</label>
			<input type="password" name="password" required />
			<label>Repeat Password</label>
			<input type="password" name="re_password" required />
			<button type="submit">Register</button>
		</form>
	)
}

export default Register
