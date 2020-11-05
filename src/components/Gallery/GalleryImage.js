import React from 'react'

const GalleryImage = ({ gallery_image }) => {
	const { source_url, title, id } = gallery_image
	return (
		<div>
			<img src={source_url} alt={id} />
			<p>{title.rendered}</p>
		</div>
	)
}

export default GalleryImage
