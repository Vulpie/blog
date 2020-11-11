import React, { useState, createContext, useEffect } from 'react'

export const UserContext = createContext()

const UserContextProvider = (props) => {
	const [user, setUser] = useState()
	useEffect(() => {
		const userAsText = localStorage.getItem('user')
		setUser(JSON.parse(userAsText))
	}, [])
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserContextProvider
