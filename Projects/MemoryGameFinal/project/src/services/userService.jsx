import { useState, useEffect } from 'react'

const UserService = () => {
	const [users, setUsers] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	// Базовый URL для загрузки данных из json-server
	const BASE_URL = 'http://localhost:3000/users'

	// Загрузка данных из json-server и вывод в консоль
	useEffect(() => {
		loadUsers() // Запускаем загрузку данных при монтировании компонента
	}, []) // Пустой массив зависимостей означает, что эффект сработает только один раз при монтировании

	const loadUsers = async () => {
		try {
			const response = await fetch(BASE_URL)
			if (!response.ok) {
				throw new Error(`Failed to fetch: ${response.status}`)
			}

			const data = await response.json() // Преобразуем JSON в объект JavaScript
			console.log('Loaded users:', data) // Выводим пользователей в консоль
			setUsers(data) // Сохраняем пользователей в состоянии
		} catch (err) {
			console.error('Error fetching users:', err) // Если ошибка, выводим в консоль
			setError('Failed to load users')
		} finally {
			setIsLoading(false) // Состояние загрузки завершено
		}
	}

	const addUser = (username, password) => {
		return new Promise((resolve, reject) => {
			if (isUserExists(username)) {
				resolve('User already exists')
				return
			}

			const newUser = { username, password }

			fetch(BASE_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newUser),
			})
				.then(response => {
					if (!response.ok) {
						throw new Error(`Failed to add user: ${response.status}`)
					}

					return response.json() // Разрешаем ответ в JSON
				})
				.then(() => {
					setUsers(prevUsers => [...prevUsers, newUser])
					resolve('User added successfully')
				})
				.catch(error => {
					console.error('Error adding user:', error)
					reject('Failed to add user')
				})
		})
	}

	// Проверка существования пользователя по имени
	const isUserExists = username => {
		return users.some(user => user.username === username)
	}

	// Проверка существования пользователя по имени и паролю
	const isUserWithPassword = (username, password) => {
		return users.some(
			user => user.username === username && user.password === password
		)
	}

	return {
		users,
		addUser,
		isUserExists,
		isUserWithPassword,
		isLoading, // Состояние загрузки
		error, // Ошибка, если есть
	}
}

export default UserService
