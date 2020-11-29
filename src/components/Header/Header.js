import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import LogoutButton from './LogoutButton'
import NavbarUserDisplay from './NavbarUserDisplay'

const Header = () => {
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
				console.log(main_links)
			})

		console.log(links)
	}, [])
	return (
		<div className="header">
			<div className="header__navbar">
				<Link to="/" className="header__navbar_link header__navbar_link--home">Vulpieblog</Link>
				<Link to="/" className="header__navbar_link">
					Blog
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
					<>
						<NavbarUserDisplay />
						<LogoutButton />
					</>
				) : (
					<>
						<Link to="/login" className="header__user_link">
							Login
						</Link>
						<Link to="/register" className="header__user_link">
							Register
						</Link>
					</>
				)}
			</div>
		</div>
	)
}

export default Header
