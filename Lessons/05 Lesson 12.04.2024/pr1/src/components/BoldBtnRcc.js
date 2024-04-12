import React, { Component } from 'react'

class BoldTextToggle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isBold: false,
		}
	}

	toggleBold (){
		this.setState({
			isBold: !this.state.isBold,
		})
	}

	render() {
		return (
			<div>
				<p style={{ fontWeight: this.state.isBold ? 'bold' : 'normal' }}>
					Проверка
				</p>
				<button onClick={() => this.toggleBold()}>
					{this.state.isBold ? 'Сделать обычным' : 'Сделать жирным'}
				</button>
			</div>
		)
	}
}

export default BoldTextToggle
