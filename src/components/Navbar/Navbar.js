import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/" className="navbar__link">
				Blog
			</Link>
			<Link to="/contact" className="navbar__link">
				Contact
			</Link>
			<Link to="/gallery" className="navbar__link">
				Photo Gallery
			</Link>
		</div>
	)
}

export default Navbar
