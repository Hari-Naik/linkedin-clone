import React from 'react'
import Header from '../components/Header'
import { Avatar } from '@mui/material'
import { Help } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { setShowHeader } from '../app/features/headerSlice'
import ProfileHeader from '../components/ProfileHeader'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Projects from '../components/Projects'
import UserProfile from '../components/UserProfile'




function Profile() {
	const dispatch = useDispatch()
	const showHeader = useSelector(state => state.showHeader.showHeader)


	const handleScroll = (e) => {
		if (Math.round(e.currentTarget.scrollTop) > 250) {
			dispatch(setShowHeader(true))
		} else {
			dispatch(setShowHeader(false))
		}

	}



	//console.log(showHeader)

	return (
		<div onScroll={handleScroll} className='w-full h-[calc(100vh-(56px))] md:h-screen bg-[#f3f2ef] overflow-x-hidden overflow-y-auto pb-10'>
			<Header />
			{
				showHeader && (
					<ProfileHeader />
				)}
			<main className='flex justify-center w-screen pt-5 h-[calc(100vh-56px)] gap-6 px-4 mb-10'>
				<div className='w-[90vw] md:w-max md:max-w-lg md:flex-1 lg:max-w-[760px] space-y-2'>
					<UserProfile />
					<Education />
					<Skills />
					<Projects />
				</div>
				<div className='space-y-2 hidden md:block w-max flex-1 max-w-xs h-max'>
					<div className='w-full h-max bg-white border border-gray-300 px-4 py-2 rounded-lg space-y-2'>
						<div className='w-full flex items-center justify-between text-[#666666] border-b border-gray-300 py-4'>
							<h2 className='text-sm font-semibold hover:underline decoration-[#0A66C7] underline-offset-1 decoration-2 cursor-pointer'>Edit public profile & URL</h2>
							<Help className='!h-4 !w-4' />
						</div>
						<div className='w-full flex items-center justify-between py-2 text-[#666666]'>
							<h2 className='w-[50%] text-sm font-semibold hover:underline decoration-[#0A66C7] underline-offset-1 decoration-2 cursor-pointer'>Add profile in another language</h2>
							<Help className='!h-4 !w-4' />
						</div>
					</div>
					<div className='w-full h-max space-y-2 p-3 bg-white border border-gray-300 rounded-lg text-center'>
						<small className='text-[#737373] text-xs'>HariNaik, unlock your full potential with Linkedin Premium</small>
						<div className='w-full flex items-center justify-center space-x-2'>
							<Avatar />
							<img src="https://media.licdn.com/dms/image/C560EAQFMxouNQyZ_9Q/rightRail-logo-shrink_200_200/0/1668521021396?e=1681981200&v=beta&t=GBp263MznS1I6pTZqUMdcxEGnO5oh6M0-bGrfI3UVuU" className="h-10 w-10" alt="logo" />
						</div>
						<p className='text-[#000000E6]/70 text-[13px]'>See who's viewed your profile in the last 90 days</p>
						<button className='bg-transparent text-[#0A66C7] border border-[#0A66C7] rounded-full px-2 py-1 text-sm font-semibold'>Try for Free</button>
					</div>
				</div>
			</main >

		</div >
	)
}

export default Profile