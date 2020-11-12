import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Page = () => {
	const [pageContent, setPageContent] = useState()
	let { id } = useParams()
	useEffect(() => {
		fetch(`/wp-json/wp/v2/pages/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setPageContent(data)
				console.log(data)
			})
	}, [id])
	return (
		<>
			{pageContent !== undefined ? (
				<div
					dangerouslySetInnerHTML={{
						__html: pageContent.content.rendered,
					}}
					className="page"
				/>
			) : (
				<p>No contact info provided</p>
			)}
		</>
	)
}

export default Page
