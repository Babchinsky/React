import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserService from '../../services/userService'
import styles from './Auth.module.css'
import { Link } from 'react-router-dom'
function Register() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState('')
	const [isFirstFocus, setIsFirstFocus] = useState(true) // Состояние для отслеживания первого фокуса
	const userService = UserService()
	const navigate = useNavigate()

	const usernamePattern = /^[a-zA-Z0-9_]{3,}$/ // Имя пользователя должно быть минимум из 3 символов, только буквы, цифры и подчеркивания
	const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/ // Пароль минимум 8 символов, с буквами в верхнем и нижнем регистрах и хотя бы одной цифрой

	const validateForm = () => {
		if (!username) {
			setMessage('Имя пользователя обязательно')
			return false
		}

		if (!usernamePattern.test(username)) {
			setMessage(
				'Имя пользователя должно содержать только буквы, цифры и подчеркивания, и быть не менее 3 символов.'
			)
			return false
		}

		if (!password || !confirmPassword) {
			setMessage('Пароль и подтверждение пароля обязательны')
			return false
		}

		if (password.length < 8) {
			setMessage('Пароль должен быть минимум 8 символов')
			return false
		}

		if (!passwordPattern.test(password)) {
			setMessage(
				'Пароль должен содержать минимум 8 символов, включать буквы в верхнем и нижнем регистрах и хотя бы одну цифру.'
			)
			return false
		}

		if (password !== confirmPassword) {
			setMessage('Пароли не совпадают')
			return false
		}

		return true
	}
	
	const isFormValid = username && password && confirmPassword;

	const handleRegister = e => {
		e.preventDefault() // Предотвращение перезагрузки страницы

		if (!validateForm()) {
			return
		}

		userService
			.addUser(username, password)
			.then(result => {
				if (result === 'User already exists') {
					setMessage('Пользователь с таким именем уже существует')
				} else {
					setMessage('Регистрация успешна')

					// Добавляем задержку 1 секунду перед навигацией
					// setTimeout(() => {
						navigate('/login')
					// }, 1000)
				}
			})
			.catch(error => {
				console.error('Error:', error)
				setMessage('Произошла ошибка при регистрации')
			})
	}

	const handleConfirmPasswordChange = e => {
		if (!isFirstFocus && e.target.value !== password) {
			setMessage('Пароли не совпадают')
		} else {
			setMessage('')
		}

		setConfirmPassword(e.target.value)
	}

	const handleConfPassBlur = e => {
		if (isFirstFocus) {
			setIsFirstFocus(false) // После первого выхода из фокуса меняем состояние

			if (e.target.value !== password) {
				setMessage('Пароли не совпадают')
			}
		}
	}

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleRegister}>
				<label className={styles.label} htmlFor='name'>
					Имя
				</label>
				<input
					className={styles.input}
					type='text'
					id='name'
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>

				<label className={styles.label} htmlFor='password'>
					Пароль
				</label>
				<input
					className={styles.input}
					type='password'
					id='password'
					value={password}
					onChange={e => {
						setPassword(e.target.value)
					}}
				/>

				<label className={styles.label} htmlFor='confirm_password'>
					Подтвердить пароль
				</label>
				<input
					className={styles.input}
					type='password'
					id='confirm_password'
					value={confirmPassword}
					onChange={e => {
						handleConfirmPasswordChange(e)
					}}
					onBlur={e => handleConfPassBlur(e)} // Устанавливаем фокус для отслеживания первого события
				/>

				<button
					className={`${styles.button} ${!isFormValid ? styles.disabled : ''}`}
					type='submit'
					disabled={!isFormValid}
				>
					Регистрация
				</button>

				{message && (
					<div
						className={
							message === 'Регистрация успешна'
								? styles.message + ' ' + styles.success
								: styles.message + ' ' + styles.error
						}
					>
						{message}
					</div>
				)}
			</form>
				<div className={styles.loginLink}>
				<p className='none_dark_mode'>
				Уже есть аккаунт? <Link to='/login'>Войти?</Link>
				</p>
			</div>
		</div>
	)
}

export default Register
