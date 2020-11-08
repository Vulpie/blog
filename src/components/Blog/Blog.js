import React, { useState, useEffect } from 'react'
import Loader from '../Partials/Loader'
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
				<Loader />
			)}
		</div>
	)
}

export default Blog
