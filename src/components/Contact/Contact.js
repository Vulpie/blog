import React, { useState, useEffect } from 'react'

const Contact = () => {
	const [contactPage, setContactPage] = useState()
	useEffect(() => {
		fetch('/pages/11')
			.then((res) => res.json())
			.then((data) => {
				setContactPage(data)
				console.log(data)
			})
	}, [])
	return (
		<div className="contact">
			<h4>Contact</h4>
			{contactPage !== undefined ? (
				<div
					dangerouslySetInnerHTML={{
						__html: contactPage.content.rendered,
					}}
					className="blog__post_title"
				/>
			) : (
				<p>No contact info provided</p>
			)}
		</div>
	)
}

export default Contact
