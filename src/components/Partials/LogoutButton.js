import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { UserContext } from '../../contexts/UserContext'

const LogoutButton = () => {
	const { setIsAuthenticated } = useContext(AuthContext)
	const { setUser } = useContext(UserContext)
	const logout = () => {
		setIsAuthenticated(false)
		setUser('')
		localStorage.removeItem('user')
		localStorage.removeItem('token')
	}
	return (
		<div className="button__logout" onClick={() => logout()}>
			Logout
		</div>
	)
}

export default LogoutButton
