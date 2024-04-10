import React, { PureComponent } from 'react'
import BookInfo from './BookInfo'

class TaskB4 extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<div className='container'>
				<h1>My Favorite Book</h1>
				<BookInfo />
			</div>
		)
	}
}

export default TaskB4
