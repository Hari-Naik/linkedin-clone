import { Add, Edit } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

function Education() {
	return (
		<section className='w-full bg-white border border-gray-300 rounded-lg py-2 px-4'>
			<div className='flex items-center justify-between w-full'>
				<h2>Education</h2>
				<div className='flex items-center space-x-2'>
					<IconButton>
						<Add />
					</IconButton>
					<IconButton>
						<Edit />
					</IconButton>
				</div>
			</div>
			<div className='flex items-start space-x-2'>
				<img src="https://static.licdn.com/sc/h/8zzzkhxduv0r11cuxbs48pg03" className=" h-10 w-10" alt="" />
				<div>
					<h4 className='text-sm font-semibold'>Gurunanak Institutions Technical Campus</h4>
					<p className='text-xs text-[#000000E6] font-sans'>Bachelor of Technology - BTech, Civil Engineering</p>
					<p className='text-xs text-[#00000099]'>Aug 2017 - Aug 2021</p>
				</div>
			</div>
		</section>
	)
}

export default Education