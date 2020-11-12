import React, { useState, useEffect } from 'react'
import Loader from '../Partials/Loader'
import Post from './Post'

const Blog = () => {
	const [blog, setBlog] = useState([])
	const [page, setPage] = useState(1)
	const nextPage = () => {
		if (blog.length < 3) {
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
		fetch(`/wp-json/wp/v2/posts?page=${page}&per_page=3`)
			.then((res) => res.json())
			.then((data) => {
				setBlog(data)
				console.log(data)
			})
	}, [page])
	return (
		<div className="blog">
			{blog.length !== 0 ? (
				<>
					{blog.map((post) => (
						<Post post={post} key={'post_' + post.id} />
					))}
					<div className="blog__pagination">
						<div
							className="button button--neutral"
							onClick={() => prevPage()}
						>
							Previous
						</div>
						<div
							className="button button--neutral"
							onClick={() => nextPage()}
						>
							Next
						</div>
					</div>
				</>
			) : (
				<Loader />
			)}
		</div>
	)
}

export default Blog
