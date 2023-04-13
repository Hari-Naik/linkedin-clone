
import React, { useEffect, useState } from 'react'

//icons
import ExploreIcon from '@mui/icons-material/Explore';
import GroupIcon from '@mui/icons-material/Group';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

import HeaderLink from '../components/HeaderLink';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';


import Cookies from 'js-cookie'

function Login() {
	const [type, setType] = useState("password")
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	useEffect(() => {
		const token = Cookies.get("token")
		if (token !== undefined) {
			navigate('/')
		}
	},)

	const handleShowPassword = () => {
		setType("text")
	}

	const handleHidePassword = () => {
		setType("password")
	}

	const handleSignUp = async () => {
		await createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				const accessToken = user?.accessToken
				//console.log(user?.accessToken);
				Cookies.set("token", accessToken, { expires: 30 })
				navigate("/")
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorCode, errorMessage);
				// ..
			});
	}

	const handleSignIn = async (e) => {
		e.preventDefault()

		await signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				const accessToken = user?.accessToken
				console.log(user);
				Cookies.set("token", accessToken, { expires: 30 })
				navigate("/")
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorCode, errorMessage);
				// ..
			});
	}

	const onChangeEmail = (e) => {
		setEmail(e.target.value)
	}

	const onChangePassword = (e) => {
		setPassword(e.target.value)
	}



	return (
		<div className='h-screen overflow-y-auto'>
			<header className='flex items-center justify-between py-5 px-5 lg:justify-around lg:px-0'>
				<img src="/images/login-logo.svg" alt="login logo" className=" w-24 md:w-[135px] md:h-[34px]" />
				<div className='flex items-center md:divide-x divide-gray-500'>
					<div className='hidden md:flex space-x-6 px-6'>
						<HeaderLink Icon={ExploreIcon} title="Discover" />
						<HeaderLink Icon={GroupIcon} title="People" />
						<HeaderLink Icon={OndemandVideoIcon} title="Learning" />
						<HeaderLink Icon={BusinessCenterIcon} title="Jobs" />
					</div>
					<div className='flex space-x-6'>
						<button className=' text-gray-700 font-semibold cursor-pointer hover:bg-gray-100 py-2 px-3 md:px-4 rounded-full'>Join now</button>
						<button className='text-blue-700 font-semibold text-lg md:text-sm py-2 px-3 md:px-4 rounded-full border-[2px] border-blue-500 cursor-pointer hover:bg-blue-100/40'>Sign in</button>
					</div>
				</div>
			</header>
			<main className='flex flex-col md:flex-row md:width-[90%] lg:max-w-[91%] xl:max-w-[86%] lg:ml-auto px-5  xl:px-0 pt-2 '>
				<div className='md:w-1/2 xl:width-[55%] '>
					<h2 className='text-[#8f5849] font-light text-3xl md:text-5xl max-w-xl !leading-snug'>
						Welcome to your professional community
					</h2>
					<form className='pt-6' onSubmit={handleSignIn}>
						<div className='flex flex-col mb-3'>
							<label htmlFor="Email" className=' text-sm font-semibold py-3'>Email</label>
							<input
								type="email"
								id="Email"
								value={email}
								required
								className='border-[1px] border-black/40 p-4 outline-none rounded hover:border-black invalid:border-red-700 valid:border-green-700'
								onChange={onChangeEmail}
							/>
						</div>
						<div className='flex flex-col'>
							<label htmlFor="Password" className=' text-sm font-semibold py-3'>Password</label>
							<div className='relative w-full flex'>
								<input
									type={type}
									id="Password"
									value={password}
									required
									pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$"
									title='Password must include a uppercase letter, lowercase letter, a number and length between 8 & 25 characters'
									className='border-[1px] border-black/40 p-4 outline-none rounded hover:border-black w-full invalid:border-red-700 valid:border-green-700'
									onChange={onChangePassword}
								/>
								{type === "password" && <button className='text-blue-700 font-semibold z-10 -m-14 cursor-pointer' onClick={handleShowPassword}>Show</button>}

								{type === "text" && <button className='text-blue-700 font-semibold z-10 -m-14 cursor-pointer' onClick={handleHidePassword}>Hide</button>}

							</div>
						</div>
						<p className='text-blue-700 text-lg font-semibold mt-4'>Forgot password?</p>
						<button type="submit" className='bg-blue-500 hover:bg-blue-700 transition duration-300 text-white w-full py-3 rounded-full cursor-pointer mt-6 text-md font-semibold'>Sign in</button>
					</form>
					<button onClick={handleSignUp} className='w-full text-md font-semibold text-gray-500 cursor-pointer border border-black rounded-full py-3 mt-5'>
						New to Linkedin? Join now
					</button>
				</div>
				<div className='w-80 h-80 md:w-1/2 xl:width-[45%]  md:h-[680px] pt-14 md:ml-14'>
					<img src="/images/dxf91zhqd2z6b0bwg85ktm5s4 (1).svg" alt="" />
				</div>
			</main>

		</div>
	)
}

export default Login