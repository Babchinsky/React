import { useState, useEffect } from "react"

const Timer = ({ isRunning }) => {
	const [seconds, setSeconds] = useState(0)

	useEffect(() => {
		if (isRunning) {
			const interval = setInterval(() => {
				setSeconds(s => s + 1)
			}, 1000)

			return () => clearInterval(interval)
		}
	}, [isRunning])

	const minutes = Math.floor(seconds / 60)
	const remainderSeconds = seconds % 60

	return (
		<div className='timer'>
			{`${minutes < 10 ? '0' : ''}${minutes}:${
				remainderSeconds < 10 ? '0' : ''
			}${remainderSeconds}`}
		</div>
	)
}
export default Timer