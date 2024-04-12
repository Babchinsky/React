import React, {useState} from 'react'
import MyButton from './MyButton'


function Counter() {
	const [count, setCount] = useState(0)

	function handleClick(){
	  setCount(count => count + 1);
	}

	return (
		<>
      <span>Counter: {count}</span>
			<MyButton count={count} onClick={handleClick} />
			<MyButton count={count} onClick={handleClick} />
			<MyButton count={count} onClick={handleClick} />
		</>
	)
}

export default Counter
