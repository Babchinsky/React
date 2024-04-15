import React, { PureComponent } from 'react'

class Form1 extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			userName: '',
			email: '',
			lang_ua: false,
			lang_en: false,
			comments: '',
			city: '', 
			theme: '', 
		}
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleCheckChange = e => {
		this.setState({ [e.target.name]: e.target.checked })
	}

	render() {
		return (
			<>
				<h1>Form1</h1>
				<input
					type='text'
					name='userName'
					value={this.state.userName}
					onChange={this.handleChange}
					placeholder='Name'
				/>

				<input
					type='email'
					name='email'
					value={this.state.email}
					onChange={this.handleChange}
					placeholder='Email'
				/>

				<input
					type='checkbox'
					id='lang_ua'
					name='lang_ua'
					checked={this.state.lang_ua}
					onChange={this.handleCheckChange}
				/>
				<label htmlFor='lang_ua'>UA</label>

				<input
					type='checkbox'
					id='lang_en'
					name='lang_en'
					checked={this.state.lang_en}
					onChange={this.handleCheckChange}
				/>
				<label htmlFor='lang_en'>EN</label>

				<select
					name='city'
					value={this.state.city}
					onChange={this.handleChange}
				>
					<option value=''>Select City</option>
					<option value='New York'>New York</option>
					<option value='London'>London</option>
					<option value='Paris'>Paris</option>
				</select>

				<textarea
					name='comments'
					value={this.state.comments}
					onChange={this.handleChange}
					placeholder='Comments'
				/>

				<select
					name='theme'
					value={this.state.theme}
					onChange={this.handleChange}
				>
					<option value=''>Select Theme</option>
					<option value='Dark'>Dark</option>
					<option value='Light'>Light</option>
					<option value='Colorful'>Colorful</option>
				</select>

				<p>{this.state.userName}</p>
				<p>{this.state.email}</p>
				<p>{this.state.city}</p>
				<p>{this.state.comments}</p>
				<p>{this.state.theme}</p>
			</>
		)
	}
}

export default Form1
