import { Add, Edit, Launch } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

function Projects() {
	return (
		<section className='w-full bg-white rounded-lg border border-gray-300 px-4 py-2'>
			<div className='flex items-center justify-between w-full'>
				<h2 className='text-md font-semibold'>Projects</h2>
				<div className='flex items-center space-x-2'>
					<IconButton>
						<Add />
					</IconButton>
					<IconButton>
						<Edit />
					</IconButton>
				</div>
			</div>
			<ul className='mt-4 pb-2'>
				<li className='border-b border-gray-300 py-2'>
					<h4 className='text-sm font-semibold'>Youtube Clone</h4>
					<a href="https://deft-duckanoo-eb2230.netlify.app/" target='_blank' rel="noreferrer"
						className='text-sm text-[#666666] font-semibold flex border border-gray-300 rounded-full px-4 py-1.5 w-max mt-2 hover:bg-[#000000E6]/20 hover:border-[#00000099] hover:font-bold hover:border-2 box-border transition duration-300'>
						<span>Show project</span>
						<Launch className='!h-5 !w-5 pl-1' />
					</a>

				</li>
				<li className='py-2'>
					<h4 className='text-sm font-semibold'>Youtube Clone</h4>
					<a href="https://deft-duckanoo-eb2230.netlify.app/" target='_blank' rel="noreferrer"
						className='text-sm text-[#666666] font-semibold flex border border-gray-300 rounded-full px-4 py-1.5 w-max mt-2 hover:bg-[#000000E6]/20 hover:border-[#00000099] hover:font-bold hover:border-2 box-border transition duration-200'>
						<span>Show project</span>
						<Launch className='!h-5 !w-5 pl-1' />
					</a>

				</li>
			</ul>
		</section>
	)
}

export default Projects