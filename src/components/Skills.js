import { Add, ArrowForward, Edit } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useState } from 'react'

const skills = [
	{ id: 'TYPE_SCRIPT', title: "TypeScript" },
	{ id: 'REDUX', title: "Redux" },
	{ id: 'REACT.JS', title: "React.js" },
	{ id: 'JAVA_SCRIPT', title: "JavaScript" },
	{ id: 'TAILWIND_CSS', title: "TailwindCss" },
	{ id: 'HTML', title: "HTML" },
	{ id: 'CSS', title: "CSS" },
	{ id: 'PYTHON', title: "Python" },
]


function Skills() {
	const [index, setIndex] = useState(4)

	const onClickShowAllBtn = () => {
		if (index === 4) {
			setIndex(skills.length)
		} else {
			setIndex(4)
		}
	}

	return (
		<section className='w-full bg-white border border-gray-300 rounded-lg pt-2'>
			<div className='w-full flex items-center justify-between  px-4'>
				<h2 className='text-md font-semibold'>Skills</h2>
				<div className='flex items-center space-x-2'>
					<button className='py-1 px-3 rounded-full bg-transparent border border-[#0A66C2] text-[#0A66C2] text-sm font-semibold'>Take skill quiz</button>
					<IconButton>
						<Add />
					</IconButton>
					<IconButton>
						<Edit />
					</IconButton>
				</div>
			</div>
			<ul className='px-4'>
				{skills.slice(0, index).map((skill, i) => (
					<li key={skill.id} className={`py-2 ${i === index - 1 ? '' : 'border-b bor-gray-300'} text-sm font-semibold`}>
						{skill.title}
					</li>
				))}
			</ul>
			<button onClick={onClickShowAllBtn} className='w-full p-2 border-t border-gray-300 text-sm font-semibold text-gray-500'>
				{index === 4 ? (
					<>
						`Show all {skills.length} skills`
						<ArrowForward />
					</>

				) : ('Show less')}

			</button>
		</section>
	)
}

export default Skills