// import React, { useState, useEffect } from 'react'
// import '../App.css'
// import shuffleArray from '../components/shuffleArray'
// import Timer from '../components/Timer'
// import Card from '../components/Card'

// const cardImages = ['1', '2', '3', '4', '5', '6', '7']
// // const totalCards = cardImages.length * 2;

// const Game = () => {
// 	const [cards, setCards] = useState([])
// 	const [openedCards, setOpenedCards] = useState([])
// 	const [isGameRunning, setIsGameRunning] = useState(false)
// 	const [gameWon, setGameWon] = useState(false)

// 	useEffect(() => {
// 		if (isGameRunning) {
// 			const shuffledCards = shuffleArray([...cardImages, ...cardImages])
// 			const initialCards = shuffledCards.map(value => ({
// 				value,
// 				isFlipped: false,
// 				isMatched: false,
// 			}))
// 			setCards(initialCards)
// 		}
// 	}, [isGameRunning])

// 	const handleCardClick = index => {
// 		if (isGameRunning && !cards[index].isFlipped && openedCards.length < 2) {
// 			const updatedCards = [...cards]
// 			updatedCards[index].isFlipped = true

// 			const updatedOpenedCards = [...openedCards, index]
// 			setOpenedCards(updatedOpenedCards)

// 			if (updatedOpenedCards.length === 2) {
// 				const [firstIndex, secondIndex] = updatedOpenedCards
// 				if (cards[firstIndex].value !== cards[secondIndex].value) {
// 					setTimeout(() => {
// 						updatedCards[firstIndex].isFlipped = false
// 						updatedCards[secondIndex].isFlipped = false
// 						setCards(updatedCards)
// 						setOpenedCards([])
// 					}, 750)
// 				} else {
// 					updatedCards[firstIndex].isMatched = true
// 					updatedCards[secondIndex].isMatched = true
// 					setCards(updatedCards)
// 					setOpenedCards([])
// 				}
// 			}

// 			setCards(updatedCards)
// 		}
// 	}

// 	useEffect(() => {
// 		if (cards.length > 0 && cards.every(card => card.isMatched)) {
// 			setGameWon(true)
// 			setIsGameRunning(false)
// 		}
// 	}, [cards])

// 	const startGame = () => {
// 		setGameWon(false)
// 		setOpenedCards([])
// 		setIsGameRunning(true)
// 	}

// 	return (
// 		<div className='app'>
// 			<Timer isRunning={isGameRunning} />
// 			{gameWon && <div className='win-message'>Поздравляю, вы выиграли!</div>}
// 			<div className='card-container'>
// 				{cards.map((card, index) => (
// 					<Card
// 						key={index}
// 						value={card.value}
// 						isFlipped={card.isFlipped}
// 						isMatched={card.isMatched}
// 						onClick={() => handleCardClick(index)}
// 					/>
// 				))}
// 			</div>
// 			<button onClick={startGame}>
// 				{isGameRunning ? 'Закончить' : 'Начать'}
// 			</button>
// 		</div>
// 	)
// }

// export default Game

// import React, { useState, useRef, useEffect } from 'react'
// import '../App.css'
// import shuffleArray from './components/shuffleArray'
// import Timer, { timerValues } from './components/Timer'
// import Card from './components/Card'

import React, { useState, useRef, useEffect } from 'react'
import '../App.css'
import shuffleArray from '../components/shuffleArray'
import Timer, {timerValues} from '../components/Timer'
import Card from '../components/Card'


let cardImages = ['1', '2', '3', '4', '5', '6', '7']
const totalCards = cardImages.length * 2

const App = () => {
	const [darkTheme, setDark] = useState(false)
	const handleCheck = () => {
		setDark(!darkTheme)
		toggleTheme()
	}
	const toggleTheme = () => {
		const themeToggle = document.getElementById('theme-toggle')
		const body = document.body
		body.classList.toggle('dark-mode')
	}

	const [audioPlaying, setAudioPlaying] = useState(false)
	const audioRef = useRef(null)

	const toggleAudio = () => {
		if (audioPlaying) {
			audioRef.current.pause()
		} else {
			audioRef.current.play()
		}
		setAudioPlaying(!audioPlaying)
	}

	const [selectedValue, setSelectedValue] = useState(4)
	const [cards, setCards] = useState([])
	const [openedCards, setOpenedCards] = useState([])
	const [isGameRunning, setIsGameRunning] = useState(false)
	const [gameWon, setGameWon] = useState(false)
	const [Kol, setKol] = useState(3)
	const [Animate, setAnimate] = useState(false)
	const [Total, setTotal] = useState(0)
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
			setTotal(Total + 1)
			const updatedCards = [...cards]
			updatedCards[index].isFlipped = true

			const updatedOpenedCards = [...openedCards, index]
			setOpenedCards(updatedOpenedCards)

			if (updatedOpenedCards.length === 2) {
				const [firstIndex, secondIndex] = updatedOpenedCards
				if (cards[firstIndex].value !== cards[secondIndex].value) {
					setTimeout(() => {
						console.log('///////')
						updatedCards.forEach(item => {
							console.log(item)
							item.isFlipped = false
							item.isMatched = false
						})

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

	function showAll() {
		if (Kol != 0 && isGameRunning && !Animate) {
			setAnimate(true)
			const updatedCards = [...cards]
			setTimeout(() => {
				console.log('//show/')
				updatedCards.forEach(item => {
					console.log(item)
					item.isFlipped = true
				})
				setOpenedCards([])
				hide()
			}, 750)
			setKol(Kol - 1)
		}
	}
	function hide() {
		const updatedCards = [...cards]
		setTimeout(() => {
			console.log('/hide/')
			updatedCards.forEach(item => {
				console.log(item)
				if (!item.isMatched) {
					item.isFlipped = false
				}
			})

			setOpenedCards([])
			setAnimate(false)
		}, 2000)
	}

	useEffect(() => {
		if (cards.length > 0 && cards.every(card => card.isMatched)) {
			setGameWon(true)
			console.log(timerValues.minutes)
			console.log(timerValues.remainderSeconds)
			setIsGameRunning(false)
		}
	}, [cards])

	const startGame = () => {
		toggleAudio()
		const cardImages1 = ['1', '2', '3', '4', '5', '6', '7']
		cardImages = []

		for (let i = 0; i < selectedValue; i++) {
			cardImages.push(cardImages1[i])
		}

		setGameWon(false)
		setOpenedCards([])
		setIsGameRunning(true)
	}

	const stopGame = () => {
		const cardImages1 = ['1', '2', '3', '4', '5', '6', '7']
		cardImages = []

		for (let i = 0; i < selectedValue; i++) {
			cardImages.push(cardImages1[i])
		}
		console.log(timerValues.minutes)
		console.log(timerValues.remainderSeconds)
		setGameWon(false)
		setOpenedCards([])
		setIsGameRunning(false)
		setKol(3)
		setTotal(0)
	}

	return (
		<div className='app'>
			<h3>
				Количество showAll {Kol} Количество нажатых карточек {Total}
			</h3>
			<h2>Select number of cards</h2>
			<div class='checkbox-wrapper-5'>
				<div class='check'>
					<input
						id='check-5'
						type='checkbox'
						checked={!darkTheme}
						onChange={handleCheck}
					/>
					<label for='check-5'></label>
				</div>
			</div>

			<select
				style={{ height: 30 + 'px', fontSize: 24 + 'px' }}
				onChange={e => setSelectedValue(parseInt(e.target.value))}
				value={selectedValue}
			>
				<option value={2}>4</option>
				<option value={3}>6</option>
				<option value={5}>10</option>
				<option value={6}>12</option>
				<option value={7}>14</option>
			</select>
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
			<audio ref={audioRef} autoPlay={false}>
				<source src='sound/pvz.m4a' type='audio/mp4' />
				Your browser does not support the audio element.
			</audio>
			<button onClick={isGameRunning ? stopGame : startGame}>
				{isGameRunning ? 'Закончить' : 'Начать'}
			</button>
			<button style={{}} onClick={showAll}>
				showAll
			</button>
		</div>
	)
}

export default App
