import { Avatar } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import InputOption from './InputOption'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material'

function Post({ name, email, text, imageUrl, videoUrl }) {
	//console.log(imageUrl, videoUrl)
	return (
		<li className='w-full h-max p-2 bg-white rounded-lg border border-gray-300'>
			<div className='flex space-x-2 p-2'>
				<Avatar />
				<div className='flex flex-col'>
					<span className='text-sm font-semibold'>{name}</span>
					<small>{email}</small>
				</div>
			</div>
			<p className='p-2 leading-snug'>{text}</p>
			{(imageUrl || videoUrl) && <div className='w-full h-[270px] mt-4'>
				{imageUrl && <img src={imageUrl} alt='post' className='w-full h-full' />}
				{videoUrl && <ReactPlayer url={videoUrl} width="100%" height="100%" controls />}
			</div>}
			<div>
				<div className='flex items-center justify-around w-full mt-2'>
					<InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
					<InputOption Icon={ChatOutlined} title="Comment" color="gray" />
					<InputOption Icon={ShareOutlined} title="Share" color="gray" />
					<InputOption Icon={SendOutlined} title="Send" color="gray" />
				</div>
			</div>
		</li>
	)
}

export default Post