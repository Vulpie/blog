import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import LogoutButton from '../Partials/LogoutButton'
import NavbarUserDisplay from '../Partials/NavbarUserDisplay'

const Sidebar = () => {
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
		<div className="sidebar">
			<div className="sidebar__navbar">
				<Link to="/" className="sidebar__navbar_link">
					Blog
				</Link>
				<Link to="/gallery" className="sidebar__navbar_link">
					Photo Gallery
				</Link>
				{links.length !== 0 ? (
					links.map((page_details) => (
						<Link
							className="sidebar__navbar_link"
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

			<div className="sidebar__user">
				{isAuthenticated ? (
					<>
						<NavbarUserDisplay />
						<LogoutButton />
					</>
				) : (
					<>
						<Link to="/login" className="sidebar__user_login">
							Login
						</Link>
						<Link to="/register" className="sidebar__user_login">
							Register
						</Link>
					</>
				)}
			</div>
		</div>
	)
}

export default Sidebar
