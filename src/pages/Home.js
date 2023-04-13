// import Cookies from 'js-cookie'
import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import { setModal } from '../app/features/modalSlice'
import Modal from '../components/Modal'
import Widgets from '../components/Widgets'


// import { useNavigate } from 'react-router-dom'

// [calc(100vh - 56px)]

function Home() {

	const modalOpen = useSelector(state => state.modal.modalOpen)

	const dispatch = useDispatch()
	//console.log(modalOpen)

	return (
		<div className='w-full h-screen overflow-hidden overflow-y-auto pb-6 bg-[#f3f2ef]'>
			<Header />
			<main className='h-[calc(100vh-112px)]  md:h-max w-full flex flex-col items-center md:items-start md:justify-center md:flex-row gap-4 pt-10'>
				{/* sidebar */}
				<Sidebar />
				<Feed />
				<Widgets />

			</main>
			<AnimatePresence>
				{modalOpen && <Modal handleClose={() => dispatch(setModal())} />}
			</AnimatePresence>

		</div>
	)
}

export default Home