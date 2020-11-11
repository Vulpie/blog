import React, { useState, createContext, useEffect } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			setIsAuthenticated(true)
		}
	}, [])
	return (
		<AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider
