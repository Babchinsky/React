import React, { useState } from 'react'
import DisplayCounter from './DisplayCounter'
import CounterButton from './CounterButton'

function CounterButtonsTask() {
	const [count, setCount] = useState(0)

	const handleClick = increment => {
		setCount(count + increment)
	}

	return (
		<div className='counterBtns'>
			<DisplayCounter counter={count} />
			<CounterButton increment={1} onClick={handleClick} />
			<CounterButton increment={10} onClick={handleClick} />
			<CounterButton increment={-100} onClick={handleClick} />
			<CounterButton increment={+25} onClick={handleClick} />
		</div>
	)
}

export default CounterButtonsTask
