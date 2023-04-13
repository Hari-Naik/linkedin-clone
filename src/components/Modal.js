import { Avatar, IconButton } from '@mui/material'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { AccessTime, ArrowDropDown, Close, Description, Image, MoreVert, Public, SmartDisplay } from '@mui/icons-material';
import Backdrop from './Backdrop';
import ReactPlayer from 'react-player';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';




const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
	},
};

function Modal({ handleClose }) {
	const [textInput, setTextInput] = useState('')
	const [postImg, setPostImg] = useState('')
	const [videoPost, setVideoPost] = useState('')
	const [showImg, setShowImg] = useState(false)
	const [showVideo, setShowVideo] = useState(false)

	const dbInstnce = collection(db, "posts1");

	const imgRef = useRef()
	const videoRef = useRef()


	const handlePost = async (e) => {
		e.preventDefault()

		const post = {
			name: "Hari Naik Meravath",
			email: "hari123@gmail.com",
			text: textInput,
			imageUrl: postImg,
			videoUrl: videoPost,
			timestamp: serverTimestamp()
		}

		addDoc(dbInstnce, post);
		handleClose()

	}

	const addImageToPost = (e) => {
		// const file = e.target.files[0]
		// const url = URL.createObjectURL(file);
		// setPostImg(url)

		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}

		reader.onload = (readerEvent) => {
			setPostImg(readerEvent.target.result)
		}
		setShowImg(false)
	}
	// setPostImg(url)


	const onClickVideo = () => {
		setShowVideo(true)
		videoRef.current.click()

	}

	const addVideoToPost = (e) => {
		// const file = e.target.files[0]
		// const url = URL.createObjectURL(file);
		// setVideoPost(url)

		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}

		reader.onload = (readerEvent) => {
			setVideoPost(readerEvent.target.result)
		}
		setShowVideo(false)

	}

	const onClickImg = () => {
		setShowImg(true)
		imgRef.current.click()

	}

	const handleOnChange = (e) => {
		setTextInput(e.target.value)
	}

	//console.log(videoPost)

	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className='w-[90vw] md:w-max md:flex-1 md:max-w-lg bg-white rounded-lg p-2'
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<div className='flex items-center w-full justify-between'>
					<h4>Create a post</h4>
					<IconButton onClick={handleClose}>
						<Close />
					</IconButton>
				</div>
				<div className='w-full h-[390px] overflow-x-hidden overflow-y-auto'>
					<div className='p-2'>
						<div className='flex items-center space-x-2'>
							<Avatar />
							<div>
								<h4 className='text-md font-semibold'>hari naik</h4>
								<button className='flex items-center justify-center w-max border-2 px-2 text-gray-500 border-gray-300 rounded-full'>
									<Public className='!h-4 !w-4 ' />
									<span className='text-sm text-gray-400 pl-[2px] pb-[2px] font-medium'>Anyone</span>
									<ArrowDropDown />
								</button>
							</div>
						</div>
					</div>
					<form onSubmit={handlePost} className='w-full p-4'>
						<textarea
							cols="63"
							rows="10"
							maxLength={250}
							value={textInput}
							placeholder='What do you want to talk about?'
							className=' outline-none'
							onChange={handleOnChange}
						/>
						{showImg && <p className='text-center p-3'>Select a image to share</p>}
						{postImg && <img src={postImg} alt='' />}
						{showVideo && <p className='text-center p-3'>Select a video to share</p>}
						{videoPost && (
							<div className='w-full h-72 mb-2'>
								<ReactPlayer url={videoPost} controls width="100%" height="100%" />
							</div>
						)}

						<div className='flex items-center justify-between w-full'>
							<div className='flex items-center'>
								<IconButton onClick={onClickImg}>
									<Image />
									<input ref={imgRef} type="file" className='hidden' onChange={addImageToPost} />

								</IconButton>
								<IconButton onClick={onClickVideo}>
									<SmartDisplay />
									<input ref={videoRef} type="file" className='hidden' onChange={addVideoToPost} />
								</IconButton>
								<IconButton>
									<Description />
								</IconButton>
								<IconButton>
									<MoreVert />
								</IconButton>
							</div>
							<div className='flex items-center w-full justify-end'>
								<IconButton>
									<AccessTime />
								</IconButton>
								<button className={`px-4 py-1 ${textInput.length >= 1 ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-300'} rounded-full ${textInput === '' ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'}`}>Post</button>
							</div>
							<div>

							</div>
						</div>
					</form>
				</div>

			</motion.div>
		</Backdrop>
	)

}

export default Modal