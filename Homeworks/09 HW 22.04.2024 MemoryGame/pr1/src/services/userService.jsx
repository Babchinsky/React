import { useState, useEffect } from 'react'

const UserService = () => {
	const [users, setUsers] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	// Базовый URL для загрузки данных из json-server
	const BASE_URL = 'http://localhost:3000/users'

	// Загрузка данных из json-server и вывод в консоль
	useEffect(() => {
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

		loadUsers() // Запускаем загрузку данных при монтировании компонента
	}, []) // Пустой массив зависимостей означает, что эффект сработает только один раз при монтировании

	// Добавление пользователя через json-server
	const addUser = async (username, password) => {
		if (isUserExists(username)) {
			return 'User already exists'
		}

		try {
			const newUser = { username, password }
			const response = await fetch(BASE_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newUser), // Преобразуем объект в JSON
			})

			if (!response.ok) {
				throw new Error(`Failed to add user: ${response.status}`)
			}

			setUsers(prevUsers => [...prevUsers, newUser]) // Добавляем нового пользователя в состояние
			return 'User added successfully'
		} catch (err) {
			console.error('Error adding user:', err)
			return 'Failed to add user'
		}
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
