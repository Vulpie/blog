import React from 'react'

const Post = ({ post }) => {
	const { title, excerpt } = post
	return (
		<div>
			<h4 dangerouslySetInnerHTML={{ __html: title.rendered }} />

			<p dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
		</div>
	)
}

export default Post
