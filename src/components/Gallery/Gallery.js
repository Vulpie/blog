import React, { useState, useEffect } from 'react'
import Loader from '../Partials/Loader'
import GalleryImage from './GalleryImage'

const Gallery = () => {
	const [gallery, setGallery] = useState([])
	useEffect(() => {
		fetch('/media')
			.then((res) => res.json())
			.then((data) => {
				setGallery(data)
				console.log(data)
			})
	}, [])
	return (
		<div className="gallery">
			<h3>Gallery</h3>
			{gallery.length !== 0 ? (
				gallery.map((gallery_image) => (
					<GalleryImage
						gallery_image={gallery_image}
						key={'gallery_image' + gallery_image.id}
					/>
				))
			) : (
				<Loader />
			)}
		</div>
	)
}

export default Gallery
