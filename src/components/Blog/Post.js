import React, { useState, useEffect } from 'react'
import SmallLoader from '../Partials/SmallLoader'

const Post = ({ post }) => {
	const { title, content } = post
	const [author, setAuthor] = useState()
	useEffect(() => {
		fetch(`/users/${post.author}`)
			.then((res) => res.json())
			.then((data) => setAuthor(data))
	}, [])
	return (
		<div className="blog__post">
			<h4
				dangerouslySetInnerHTML={{ __html: title.rendered }}
				className="blog__post_title"
			/>

			<div
				dangerouslySetInnerHTML={{ __html: content.rendered }}
				className="blog__post_content"
			/>
			<div className="blog__post_footer">
				<p className="blog__post_footer_label">Author:</p>
				{author ? (
					<p className="blog__post_footer_author">{author.name}</p>
				) : (
					<SmallLoader />
				)}
			</div>
		</div>
	)
}

export default Post
