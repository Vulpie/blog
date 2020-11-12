import React, { useState, useEffect } from 'react'
import SmallLoader from '../Partials/SmallLoader'

const Post = ({ post }) => {
	const { title, content, date } = post
	const [author, setAuthor] = useState()
	useEffect(() => {
		fetch(`/wp-json/wp/v2/users/${post.author}`)
			.then((res) => res.json())
			.then((data) => setAuthor(data))
	}, [])
	return (
		<div className="blog__post">
			<h4
				dangerouslySetInnerHTML={{ __html: title.rendered }}
				className="blog__post_title"
			/>

			<p
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
				<p className="blog__post_footer_label">Published:</p>
				<p className="blog__post_footer_author">{date}</p>
			</div>
		</div>
	)
}

export default Post
