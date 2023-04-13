import { Feedback } from '@mui/icons-material'
import React from 'react'
import NewsItem from './NewsItem'
import { IconButton } from '@mui/material'

function Widgets() {
	return (
		<div className='md:sticky -top-[203px] hidden lg:flex flex-col items-center space-y-2 w-max'>
			<div className='bg-white w-full border border-gray-300 rounded-lg'>
				<div className='flex px-3 items-center justify-between w-full'>
					<h4 className=' text-[16px] font-semibold'>Linkedin News</h4>
					<IconButton className='!text-black'>
						<Feedback className='!h-5 !w-5' />
					</IconButton>
				</div>
				<ul>
					<NewsItem title="Does WFH affect career progression?" time="1d ago" readers="10,839 readers" />
					<NewsItem title="Wait lengthens for US visas" time="21h ago" readers="2,110 readers" />
					<NewsItem title="NIT students land big offers" time="1d ago" readers="13,275 readers" />
					<NewsItem title="Should moonlighting be a concern" time="20h ago" readers="1,074 readers" />
					<NewsItem title="यह-है-कामयाब-लोगों-की-आदतें" time="1d ago" readers="5,452 readers" />
				</ul>
			</div>
			<div className='w-full h-64 border border-gray-300 rounded-lg'>
				<img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="" className='rounded-lg w-full h-full' />
			</div>
		</div>
	)
}

export default Widgets