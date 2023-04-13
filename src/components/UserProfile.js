import { Edit } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'

function UserProfile() {
	return (
		<section className='w-full bg-white border border-gray-xl 300 rounded-lg pb-7'>
			<div className='w-full overflow-hidden relative -mb-[90px]'>
				<img
					src="https://res.cloudinary.com/dgwmfee0i/image/upload/v1662982787/linkedin_background_img_obw3dz.jpg"
					alt=""
					className='w-full h-40 rounded-t-lg'
				/>
				<Avatar className='!h-24 !w-24 absolute left-5 bottom-14' />
				<IconButton className='!absolute top-4 right-4 !bg-white'>
					<Edit className='!h-5 !w-5 text-blue-700' />
				</IconButton>
			</div>
			<div className='flex flex-col w-full px-4'>
				<IconButton className='self-end'>
					<Edit className='!h-6 !w-6 text-gray-700' />
				</IconButton>
				<div className='w-max text-[#000000E6]'>
					<h2 className='text-xl font-semibold'>HariNaik Meravath</h2>
					<p className='text-sm font-sans'>Frontend Developer | React Js, JavaScript, Redux</p>
					<small className='text-[#00000099]'>Hyderabad, Telangana, India .
						<span className='text-xs text-[#0A66C2] font-medium hover:underline cursor-pointer'>Contact info</span></small>
					<p className='text-xs text-[#0A66C2] font-semibold py-1 cursor-pointer hover:underline'>39 connections</p>
					<div className='flex items-center space-x-2 mt-2'>
						<button className='bg-[#0A66C2]/80 hover:bg-[#0A66C2] text-white profile_button'>Open to</button>
						<button className='bg-transparent border border-[#0A66C2]  text-[#0A66C2] hover:bg-blue-200 profile_button'>Add profile section</button>
						<button className='bg-transparent border border-[#00000099] text-[#00000099] hover:bg-[#00000099]/20 profile_button'>More</button>

					</div>
					<div className='flex justify-between p-2 bg-[#0A66C2]/10 rounded-lg mt-4'>
						<div>
							<h4 className='text-sm text-[#000000E6] font-semibold'>Open to work</h4>
							<p className='text-xs text-[#00000099] font-normal'>Frontend Developer roles</p>
							<button className='text-xs text-[#0A66C2] font-semibold hover:underline cursor-pointer'>Show details</button>
						</div>
						<IconButton className='!h-6 !w-6'>
							<Edit className='!h-4 !w-4' />
						</IconButton>
					</div>
				</div>
			</div>
		</section>
	)
}

export default UserProfile