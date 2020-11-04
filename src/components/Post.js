import React from 'react'

const Post = ({ post }) => {
	const { title, excerpt } = post
	return (
		<div>
			<h4>{title.rendered}</h4>
			<p dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
		</div>
	)
}

export default Post
