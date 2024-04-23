import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Для перенаправления
import UserService from '../../services/userService'
import styles from './Auth.module.css'

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
			// Если да, то перенаправляем на главную страницу
			navigate('/')
		} else {
			// Если нет, показываем сообщение или выполняем другую логику
			setMessage('Неверный логин или пароль')
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
		</div>
	)
}

export default Login
