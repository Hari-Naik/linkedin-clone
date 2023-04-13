import React from 'react'

function NewsItem({ title, time, readers }) {
	return (
		<li className='mb-2 px-3 hover:bg-gray-200 cursor-pointer'>
			<h2 className='text-sm font-medium text-[#00000E6]'>{title}</h2>
			<div className='flex items-center space-x-1 text-xs text-[#00000099]'>
				<p>{time}</p>
				<div className='h-1 w-1 rounded-full bg-gray-500 '></div>
				<p>{readers}</p>
			</div>
		</li>
	)
}

export default NewsItem