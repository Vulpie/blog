import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import NavbarUserDisplay from '../Partials/NavbarUserDisplay'

const Navbar = () => {
	const [links, setLinks] = useState([])
	const { isAuthenticated } = useContext(AuthContext)
	useEffect(() => {
		fetch('/wp-json/wp/v2/pages')
			.then((res) => res.json())
			.then((data) => {
				const main_links = []
				data.forEach((item) => {
					if (item.parent === 0) {
						main_links.push(item)
					}
				})
				setLinks(main_links)
			})

		console.log(links)
	}, [])
	return (
		<div className="header">
			<div className="header__navbar">
				<Link to="/" className="header__navbar_link">
					Blog
				</Link>
				<Link to="/gallery" className="header__navbar_link">
					Photo Gallery
				</Link>
				{links.length !== 0 ? (
					links.map((page_details) => (
						<Link
							className="header__navbar_link"
							to={`/show/page/${page_details.id}`}
							key={'link_id_' + page_details.id}
						>
							{page_details.title.rendered}
						</Link>
					))
				) : (
					<span></span>
				)}
			</div>

			<div className="header__user">
				{isAuthenticated ? (
					<NavbarUserDisplay />
				) : (
					<>
						<Link to="/login" className="header__user_login">
							Login
						</Link>
						<Link to="/register" className="header__user_login">
							Register
						</Link>
					</>
				)}
			</div>
		</div>
	)
}

export default Navbar
