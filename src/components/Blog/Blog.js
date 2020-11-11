import React, { useState, useEffect } from 'react'
import Loader from '../Partials/Loader'
import Post from './Post'

const Blog = () => {
	const [blog, setBlog] = useState([])
	const [page, setPage] = useState(1)
	const nextPage = () => {
		if (blog.length < 4) {
			return
		}
		setPage(page + 1)
	}
	const prevPage = () => {
		if (page === 1) {
			return
		}
		setPage(page - 1)
	}
	useEffect(() => {
		fetch(`/wp-json/wp/v2/posts?page=${page}&per_page=4`)
			.then((res) => res.json())
			.then((data) => {
				setBlog(data)
				console.log(data)
			})
	}, [page])
	return (
		<div className="blog">
			{blog.length !== 0 ? (
				blog.map((post) => <Post post={post} key={'post_' + post.id} />)
			) : (
				<Loader />
			)}
			<div className="blog__pagination">
				<div
					className="blog__pagination_button"
					onClick={() => prevPage()}
				>
					Previous
				</div>
				<div
					className="blog__pagination_button"
					onClick={() => nextPage()}
				>
					Next
				</div>
			</div>
		</div>
	)
}

export default Blog
