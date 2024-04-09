import React from 'react'
import Email from './Email/Email'
import Fullname from './Fullname/Fullname'
import Phone from './Phone/Phone'

function TaskA4() {
	return (
		<div className='container'>
			<h1>Task A4</h1>
			<Fullname />
			<Phone />
			<Email />
		</div>
	)
}

export default TaskA4
