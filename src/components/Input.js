import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import { CalendarViewDay, EventNote, Image, Subscriptions } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'

import { setModal } from '../app/features/modalSlice'

function Input() {
	const dispatch = useDispatch()
	//console.log(setModal)

	const handleClick = () => {
		dispatch(setModal())
	}

	return (
		<div className='w-full bg-white rounded-lg border border-gray-300 p-3'>
			<div className='flex items-center space-x-2 w-full'>
				<Avatar className='!h-9 !w-9' />
				<motion.button
					whileHover={{ scale: 1.01 }}
					whileTap={{ scale: 0.99 }}
					className='p-3 bg-transparent border border-gray-300 
					rounded-full w-full flex items-center text-sm
					font-semibold text-black/60 hover:bg-[#fff9f9]'
					onClick={handleClick}
				>
					Start a post
				</motion.button>
			</div>
			<div className='flex items-center justify-between w-full flex-wrap mt-2'>
				<InputOption title="Photo" Icon={Image} />
				<InputOption title="Video" Icon={Subscriptions} />
				<InputOption title="Event" Icon={EventNote} />
				<InputOption title="Write article" Icon={CalendarViewDay} />
			</div>
			<div>

			</div>
		</div>
	)
}

export default Input