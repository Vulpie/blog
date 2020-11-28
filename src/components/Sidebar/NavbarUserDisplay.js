import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

const NavbarUserDisplay = () => {
	const { user } = useContext(UserContext)
	console.log('USER::',user)
	return (
		<div>
			<p>{user.name}</p>
		</div>
	)
}

export default NavbarUserDisplay
