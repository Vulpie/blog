import React, { useState, useEffect } from 'react'
import Post from './Post'

const Blog = () => {
	const [blog, setBlog] = useState([])
	useEffect(() => {
		fetch('http://localhost/vulpieblog/wp-json/wp/v2/posts')
			.then((res) => res.json())
			.then((data) => setBlog(data))
	}, [])
	return (
		<>
			{blog.length !== 0 ? (
				blog.map((post) => <Post post={post} key={'post_' + post.id} />)
			) : (
				<p>No posts</p>
			)}
		</>
	)
}

export default Blog
