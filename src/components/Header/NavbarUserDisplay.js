import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import user_icon from '../../assets/icons/user-icon.png'

const NavbarUserDisplay = () => {
	const { user } = useContext(UserContext)
	console.log('USER::',user)
	return (
		<div className="header__user_box">
			<img src={user_icon} alt="User icon" className="header__user_box_icon"/>
			<p className="header__user_box_username">{user.name}</p>
		</div>
	)
}

export default NavbarUserDisplay
