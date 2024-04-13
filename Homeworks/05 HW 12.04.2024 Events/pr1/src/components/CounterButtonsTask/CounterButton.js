import React from 'react'

function CounterButton({ increment, onClick }) {
	return (
		<>
			{increment >= 0 ? (
				<button onClick={() => onClick(increment)}>+{increment}</button>
			) : (
				<button onClick={() => onClick(increment)}>{increment}</button>
			)}
		</>
	)
}

export default CounterButton
