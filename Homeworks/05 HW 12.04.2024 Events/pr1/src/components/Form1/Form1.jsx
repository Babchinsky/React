import React, { PureComponent } from 'react'
import styles from './Form1.module.css'

class Form1 extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			userName: '',
			userNameError: '',
			email: '',
			emailError: '',
			comments: '',
			commentsError: '',
			userList: [],
		}
	}

	handlePost = () => {
		// Создаем новый элемент на основе введенных данных
		const newUser = {
			userName: this.state.userName,
			email: this.state.email,
			comments: this.state.comments,
		}

		// Добавляем новый элемент в список
		this.setState(prevState => ({
			userList: [...prevState.userList, newUser],
			userName: '',
			email: '',
			comments: '',
		}))
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	validateName = () => {
		const { userName } = this.state
		let errorMessage = ''

		if (userName.length < 5) {
			errorMessage = 'Username must be at least 5 characters long.'
		}

		this.setState({ userNameError: errorMessage })
	}

	validateEmail = () => {
		const { email } = this.state
		let errorMessage = ''

		if (!email.includes('@') || !email.includes('.')) {
			errorMessage = 'Please enter a valid email address.'
		}

		this.setState({ emailError: errorMessage })
	}

	validateComments = () => {
		const { comments } = this.state
		let errorMessage = ''

		if (comments.length < 10) {
			errorMessage = 'Comments must be at least 10 characters long.'
		}

		this.setState({ commentsError: errorMessage })
	}

	render() {
		const { userNameError, emailError } = this.state

		return (
			<>
				<div className={styles['form-container']}>
					<h1 className={styles['form-title']}>Form1</h1>

					<div className={styles['input-container']}>
						<input
							type='text'
							name='userName'
							value={this.state.userName}
							onChange={this.handleChange}
							onInput={this.validateName}
							placeholder='Username'
							className={styles['input-field']}
						/>
						<p className={styles['error-message']}>{userNameError}</p>
					</div>

					<div className={styles['input-container']}>
						<input
							type='email'
							name='email'
							value={this.state.email}
							onChange={this.handleChange}
							onInput={this.validateEmail}
							placeholder='Email'
							className={styles['input-field']}
						/>
						<p className={styles['error-message']}>{emailError}</p>
					</div>

					<div className={styles['input-container']}>
						<textarea
							name='comments'
							value={this.state.comments}
							onChange={this.handleChange}
							onInput={this.validateComments}
							placeholder='Comments'
							className={styles['input-field']}
						></textarea>
						<p className={styles['error-message']}>
							{this.state.commentsError}
						</p>
					</div>

					<button className={styles.button} onClick={this.handlePost}>
						Post
					</button>
				</div>

				<div>
					{this.state.userList.map((user, index) => (
						<div className={styles['comment-wrapper']} key={index}>
							<p className={styles['comment-text']}>Email: {user.email}</p>
							<p className={styles['comment-text']}>
								Username: {user.userName}
							</p>
							<p className={styles['comment-text']}>
								Comments: {user.comments}
							</p>
						</div>
					))}
				</div>
			</>
		)
	}
}

export default Form1
