import { useState, useEffect } from 'react'

// Базовый URL для JSON-сервера
const BASE_URL = 'http://localhost:3000/'

const LeaderService = () => {
	const [leaders, setLeaders] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	// Загрузка данных о лидерах при монтировании компонента
	useEffect(() => {
		loadLeaders() // Загрузка при монтировании
	}, [])

	const loadLeaders = async () => {
		try {
			const response = await fetch(`${BASE_URL}leaderboard`)
			if (!response.ok) {
				throw new Error(`Failed to fetch leaders: ${response.status}`)
			}

			const data = await response.json()

			// Сортировка по времени (по минутам, затем по секундам)
			data.sort((a, b) => {
				if (a.time_minutes !== b.time_minutes) {
					return a.time_minutes - b.time_minutes // Сначала по минутам
				}
				return a.time_seconds - b.time_seconds // Затем по секундам
			})

			setLeaders(data) // Сохраняем в состояние отсортированный список
		} catch (err) {
			setError('Failed to load leaders')
			console.error(err)
		} finally {
			setIsLoading(false) // Загрузка завершена
		}
	}

	const addLeader = async (
		username,
		time_minutes,
		time_seconds,
		cards_collected
	) => {
		try {
			const newLeader = {
				username,
				time_minutes,
				time_seconds,
				cards_collected,
			}

			const response = await fetch(`${BASE_URL}leaderboard`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newLeader),
			})

			if (!response.ok) {
				throw new Error(`Failed to add leader: ${response.status}`)
			}

			setLeaders(prevLeaders => {
				const updatedLeaders = [...prevLeaders, newLeader]

				// Сортировка при добавлении нового лидера
				updatedLeaders.sort((a, b) => {
					if (a.time_minutes !== b.time_minutes) {
						return a.time_minutes - b.time_minutes
					}
					return a.time_seconds - b.time_seconds
				})

				return updatedLeaders
			})
		} catch (err) {
			setError('Failed to add leader')
			console.error(err)
		}
	}

	const isLoadingOrError = isLoading || error !== null

	return {
		leaders, // Возвращаем список отсортированных лидеров
		addLeader, // Функция добавления лидеров
		isLoadingOrError, // Состояние загрузки или ошибки
	}
}

export default LeaderService
