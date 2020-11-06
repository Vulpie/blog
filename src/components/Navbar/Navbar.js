import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	const [links, setLinks] = useState([])
	useEffect(() => {
		fetch('/pages')
			.then((res) => res.json())
			.then((data) => setLinks(data))
	}, [])
	return (
		<div className="navbar">
			<Link to="/" className="navbar__link">
				Blog
			</Link>
			<Link to="/gallery" className="navbar__link">
				Photo Gallery
			</Link>
			{links.length !== 0 ? (
				links.map((page_details) => (
					<Link
						className="navbar__link"
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
	)
}

export default Navbar
