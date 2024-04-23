import React, { useState, useEffect } from 'react'
import '../App.css'
import shuffleArray from '../components/shuffleArray'
import Timer from '../components/Timer'
import Card from '../components/Card'

const cardImages = ['1', '2', '3', '4', '5', '6', '7']
// const totalCards = cardImages.length * 2;

const Game = () => {
	const [cards, setCards] = useState([])
	const [openedCards, setOpenedCards] = useState([])
	const [isGameRunning, setIsGameRunning] = useState(false)
	const [gameWon, setGameWon] = useState(false)

	useEffect(() => {
		if (isGameRunning) {
			const shuffledCards = shuffleArray([...cardImages, ...cardImages])
			const initialCards = shuffledCards.map(value => ({
				value,
				isFlipped: false,
				isMatched: false,
			}))
			setCards(initialCards)
		}
	}, [isGameRunning])

	const handleCardClick = index => {
		if (isGameRunning && !cards[index].isFlipped && openedCards.length < 2) {
			const updatedCards = [...cards]
			updatedCards[index].isFlipped = true

			const updatedOpenedCards = [...openedCards, index]
			setOpenedCards(updatedOpenedCards)

			if (updatedOpenedCards.length === 2) {
				const [firstIndex, secondIndex] = updatedOpenedCards
				if (cards[firstIndex].value !== cards[secondIndex].value) {
					setTimeout(() => {
						updatedCards[firstIndex].isFlipped = false
						updatedCards[secondIndex].isFlipped = false
						setCards(updatedCards)
						setOpenedCards([])
					}, 750)
				} else {
					updatedCards[firstIndex].isMatched = true
					updatedCards[secondIndex].isMatched = true
					setCards(updatedCards)
					setOpenedCards([])
				}
			}

			setCards(updatedCards)
		}
	}

	useEffect(() => {
		if (cards.length > 0 && cards.every(card => card.isMatched)) {
			setGameWon(true)
			setIsGameRunning(false)
		}
	}, [cards])

	const startGame = () => {
		setGameWon(false)
		setOpenedCards([])
		setIsGameRunning(true)
	}

	return (
		<div className='app'>
			<Timer isRunning={isGameRunning} />
			{gameWon && <div className='win-message'>Поздравляю, вы выиграли!</div>}
			<div className='card-container'>
				{cards.map((card, index) => (
					<Card
						key={index}
						value={card.value}
						isFlipped={card.isFlipped}
						isMatched={card.isMatched}
						onClick={() => handleCardClick(index)}
					/>
				))}
			</div>
			<button onClick={startGame}>
				{isGameRunning ? 'Закончить' : 'Начать'}
			</button>
		</div>
	)
}

export default Game
