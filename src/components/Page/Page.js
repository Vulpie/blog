import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Page = () => {
	const [pageContent, setPageContent] = useState()
	let { id } = useParams()
	useEffect(() => {
		fetch(`/pages/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setPageContent(data)
				console.log(data)
			})
	}, [id])
	return (
		<div>
			{pageContent !== undefined ? (
				<div
					dangerouslySetInnerHTML={{
						__html: pageContent.content.rendered,
					}}
					className="blog__post_title"
				/>
			) : (
				<p>No contact info provided</p>
			)}
		</div>
	)
}

export default Page
