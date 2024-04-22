import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Для перенаправления
import UserService from '../../services/userService'
import styles from './Login.module.css' // Импорт модульных стилей

function Login() {
	const userService = UserService() // Инициализация сервиса
	const navigate = useNavigate() // Инициализация для перенаправления
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	


	const onLogin = e => {
		e.preventDefault() // Предотвращение перезагрузки страницы по умолчанию

		// Проверяем, существует ли пользователь с данным именем и паролем
		if (userService.isUserWithPassword(username, password)) {
			// Если да, то перенаправляем на главную страницу
			navigate('/')
		} else {
			// Если нет, показываем сообщение или выполняем другую логику
			alert('Invalid username or password')
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
				<button className={styles.button} type='submit'>
					Вход
				</button>
			</form>
		</div>
	)
}

export default Login
