import React, { PureComponent } from 'react'


class Photos extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	render() {
		return (
			<div className='photo-wrap'>
				<img src='./images/1.jpg' alt='photo1' />
				<img src='./images/2.jpg' alt='photo2' />
				<img src='./images/3.jpg' alt='photo3' />
			</div>
		)
	}
}

export default Photos