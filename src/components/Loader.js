import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

function Loader() {
	return (
		<div className='w-full flex items-center justify-center'>
			<RotatingLines
				strokeColor="blue"
				strokeWidth="2"
				animationDuration="0.75"
				width="36"
				visible={true}
			/>
		</div>
	)
}

export default Loader