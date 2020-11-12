import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { UserContext } from '../../contexts/UserContext'
import { useHistory } from 'react-router-dom'

const LogoutButton = () => {
	const { setIsAuthenticated } = useContext(AuthContext)
	const { setUser } = useContext(UserContext)
	const history = useHistory()
	const redirectAfterLogout = () => {
		history.push('/')
	}
	const logout = () => {
		setIsAuthenticated(false)
		setUser('')
		localStorage.removeItem('user')
		localStorage.removeItem('token')
		redirectAfterLogout()
	}
	return (
		<div className="button button--negative" onClick={() => logout()}>
			Logout
		</div>
	)
}

export default LogoutButton
