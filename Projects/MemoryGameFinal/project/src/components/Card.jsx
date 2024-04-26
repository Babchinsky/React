const Card = ({ value, isFlipped, isMatched, onClick }) => {
	const backgroundImage =
		isFlipped || isMatched
			? `url(/textures/${value}.png)`
			: 'url(/textures/background.png) '

	return (
		<div
			className={`card ${isFlipped ? 'flipped' : ''} ${
				isMatched ? 'matched' : ''
			}`}
			style={{ backgroundImage}}
			onClick={onClick}
		/>
	)
}
export default Card
