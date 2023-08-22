import { Avatar } from '@mui/material'
import React from 'react'

function ProfileHeader() {
	return (
		<div className='hidden md:flex sticky top-[56px] z-[100] bg-white shadow-lg  items-center md:justify-between lg:justify-around w-full p-2 border-t border-gray-300 transform translate-y-0'>
			<div className='flex space-x-2'>
				<Avatar className='!h-6 !w-6' />
				<div>
					<h2 className='text-xs font-semibold'>HariNaik Meravath</h2>
					<p className='text-xs font-sans'>Frontend Developer | React Js, JavaScript, Redux</p>
				</div>
			</div>

			<div className='flex items-center space-x-2 mt-2'>
				<button className='bg-[#0A66C2]/80 hover:bg-[#0A66C2] text-white profile_button'>Open to</button>
				<button className='bg-transparent border border-[#0A66C2]  text-[#0A66C2] hover:bg-blue-200 profile_button'>Add profile section</button>
				<button className='bg-transparent border border-[#00000099] text-[#00000099] hover:bg-[#00000099]/20 profile_button'>More</button>
			</div>
		</div>
	)
}

export default ProfileHeader