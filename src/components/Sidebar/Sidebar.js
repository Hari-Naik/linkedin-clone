import { Add, TurnedIn } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const user = 'harinaik';

function Sidebar() {
	return (
		<aside className='md:sticky -top-[270px] w-[90vw] md:w-max h-max space-y-2'>
			<div className='relative w-[100%] rounded-lg bg-white border border-gray-300 flex flex-col items-center text-center'>
				<div className='w-full h-16 md:h-14relative rounded-lg'>
					<img
						src="https://res.cloudinary.com/dgwmfee0i/image/upload/v1662982787/linkedin_background_img_obw3dz.jpg"
						alt=""
						className='w-[100%] h-16 md:h-14 rounded-t'
					/>
				</div>
				<Avatar className='!absolute !top-10 md:!top-[34px]' />
				<div className='relative mt-7 w-2/3 pb-2'>
					<NavLink to={`/in/${user}`}>
						<h2 className=' text-md font-semibold hover:underline hover:underline-offset-1 hover:decoration-purple-500 cursor-pointer'>HariNaik Meravath</h2>
					</NavLink>
					<p className=' text-xs text-[#00000099]'>Frontend Developer | React Js, JavaScript, Redux</p>
				</div>
				<div className="hidden md:flex flex-col w-full border-y border-gray-300 py-3">
					<div className='flex items-center justify-between w-full px-2 hover:bg-gray-200 cursor-pointer'>
						<div className='flex flex-col items-start'>
							<p className='text-xs text-gray-400 font-medium'>Connections</p>
							<p className='text-xs font-semibold'>Grow your network</p>
						</div>
						<p className='text-blue-500 text-xs font-semibold'>38</p>
					</div>
					<div className='flex items-center w-full justify-between px-2 mt-2 hover:bg-gray-200'>
						<small>Who's viewed your profile</small>
						<p className='text-blue-500 text-xs font-semibold'>5</p>
					</div>
				</div>
				<div className='hidden md:flex flex-col items-start w-full p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-200 group'>
					<small>Access exclusive tools & insights</small>
					<div className='flex items-center space-x-1'>
						<span className='rounded-sm bg-gradient-to-tr w-3 h-3 from-yellow-700 to-yellow-500'></span>
						<span className='text-xs font-semibold underline group-hover:text-blue-500'>Try Premium for free</span>
					</div>
				</div>
				<div className='hidden md:flex items-center w-full p-2 rounded-b cursor-pointer hover:bg-gray-200'>
					<TurnedIn className='!h-4' />
					<p className='text-xs font-semibold'>My Items</p>
				</div>
			</div>
			<div className='hidden md:flex flex-col bg-white w-full border border-gray-300 rounded-lg'>
				<div className='p-2'>
					<p className='sidebar_bottom_tags'>Groups</p>
					<div className='flex items-center w-full justify-between'>
						<p className='sidebar_bottom_tags'>Events</p>
						<IconButton>
							<Add className='!h-4 !w-4' />
						</IconButton>
					</div>
					<p className='sidebar_bottom_tags'>Followed Hashtags</p>
				</div>
				<div className='w-full border-t border-gray-300 mt-2 p-2 flex items-center justify-center hover:bg-gray-200 cursor-pointer'>
					<p className='text-md text-gray-500 font-semibold'>Discover more</p>
				</div>
			</div>
		</aside>
	)
}

export default Sidebar