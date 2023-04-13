

import React, { useEffect, useState } from 'react'
import Post from './Post'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Loader from './Loader';

function Posts() {
	const [loading, setLoading] = useState(true)
	const [posts, setPosts] = useState([])
	const dbInstance = collection(db, 'posts1');

	useEffect(() => {
		getDocs(dbInstance)
			.then((data) => {
				setPosts(data.docs.map((item) => {
					return { ...item.data(), id: item.id }
				}));
				setLoading(false)
			})
	}, [posts, dbInstance])

	if (loading) {
		return <Loader />
	}

	return (
		<ul className='flex flex-col space-y-2'>
			{posts.map(post => (
				<Post
					key={post?.id}
					name={post.name}
					email={post?.email}
					text={post?.text}
					imageUrl={post.imageUrl}
					videoUrl={post.videoUrl}
				/>
			))}
		</ul >
	)
}

export default Posts