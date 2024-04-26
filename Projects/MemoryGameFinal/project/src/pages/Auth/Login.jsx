import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' // Для перенаправления
import UserService from '../../services/userService'
import styles from './Auth.module.css'
import Layout from '../Layout/Layout'

function Login() {
	const userService = UserService() // Инициализация сервиса
	const navigate = useNavigate() // Инициализация для перенаправления
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')

	const isFormValid = username && password;

	const onLogin = e => {
		e.preventDefault() // Предотвращение перезагрузки страницы по умолчанию

		// Проверяем, существует ли пользователь с данным именем и паролем
		if (userService.isUserWithPassword(username, password)) {
			localStorage.setItem('loggedInUser', username)
			navigate('/')
		} else {
			// Если нет, показываем сообщение или выполняем другую логику
			setMessage('Неверный логин или пароль')
		}
	}

	const GetCurrentUser = e => {
		const user = localStorage.getItem('loggedInUser')
		if (user) {
		 	return user
		} else {
		  //navigate('/login') // Если нет, перенаправляем на страницу логина
		}
	}
	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={onLogin}>
				<label className={styles.label} htmlFor='name'>
					Имя
				</label>
				<input
					className={styles.input}
					type='text'
					id='name'
					value={username} // Привязка состояния к input
					onChange={e => setUsername(e.target.value)} // Обновление состояния при изменении ввода
				/>
				<label className={styles.label} htmlFor='password'>
					Пароль
				</label>
				<input
					className={styles.input}
					type='password'
					id='password'
					value={password} // Привязка состояния к input
					onChange={e => setPassword(e.target.value)} // Обновление состояния при изменении ввода
				/>
				<button
					className={`${styles.button} ${!isFormValid ? styles.disabled : ''}`}
					type='submit'
					disabled={!isFormValid}
				>
					Вход
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
				Нет аккаунта? <Link to='/register'>Зарегистрироваться</Link>
				</p>
			</div>
		</div>
	)
}

export default Login
