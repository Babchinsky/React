import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Для перенаправления
import UserService from '../../services/userService'
import styles from './Register.module.css'

function Register() {
	const [username, setUsername] = useState('') // Состояние для имени пользователя
	const [password, setPassword] = useState('') // Состояние для пароля
	const [confirmPassword, setConfirmPassword] = useState('') // Состояние для подтверждения пароля
	const [message, setMessage] = useState('') // Состояние для сообщений
	const userService = UserService() // Подключение сервиса
	const navigate = useNavigate() // Для перенаправления после регистрации

	const handleRegister = e => {
		e.preventDefault() // Предотвращение перезагрузки страницы

		// Проверка совпадения паролей
		if (password !== confirmPassword) {
			setMessage('Пароли не совпадают') // Сообщение об ошибке
			return // Завершить выполнение
		}

		// Попытка добавить нового пользователя
		const result = userService.addUser(username, password)

		if (result === 'User already exists') {
			setMessage('Пользователь с таким именем уже существует') // Пользователь уже существует
		} else {
			setMessage('Регистрация успешна') // Регистрация успешна
      
			setTimeout(() => {
				navigate('/auth/login') // Перенаправить на страницу логина после короткой задержки
			}, 1000)
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
					value={username} // Связь состояния с полем ввода
					onChange={e => setUsername(e.target.value)} // Обновление при изменении
				/>

				<label className={styles.label} htmlFor='password'>
					Пароль
				</label>
				<input
					className={styles.input}
					type='password'
					id='password'
					value={password} // Связь состояния с полем ввода
					onChange={e => setPassword(e.target.value)} // Обновление при изменении
				/>

				<label className={styles.label} htmlFor='confirm_password'>
					Подтвердить пароль
				</label>
				<input
					className={styles.input}
					type='password'
					id='confirm_password'
					value={confirmPassword} // Связь состояния с полем ввода
					onChange={e => setConfirmPassword(e.target.value)} // Обновление при изменении
				/>

				<button className={styles.button} type='submit'>
					Регистрация
				</button>

				{/* Отображение сообщения */}
				{message && <div className={styles.message}>{message}</div>}
			</form>
		</div>
	)
}

export default Register
