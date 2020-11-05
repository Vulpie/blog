import React from 'react'

const Post = ({ post }) => {
	const { title, content } = post
	return (
		<div className="blog__post">
			<h4
				dangerouslySetInnerHTML={{ __html: title.rendered }}
				className="blog__post_title"
			/>

			<div
				dangerouslySetInnerHTML={{ __html: content.rendered }}
				className="blog__post_title"
			/>
		</div>
	)
}

export default Post
