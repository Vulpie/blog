import React, { useState, useEffect } from 'react'
import Post from './Post'

const Blog = () => {
	const [blog, setBlog] = useState([])
	useEffect(() => {
		fetch('/posts')
			.then((res) => res.json())
			.then((data) => {
				setBlog(data)
				console.log(data)
			})
	}, [])
	return (
		<div className="blog">
			{blog.length !== 0 ? (
				blog.map((post) => <Post post={post} key={'post_' + post.id} />)
			) : (
				<p>No posts</p>
			)}
		</div>
	)
}

export default Blog
