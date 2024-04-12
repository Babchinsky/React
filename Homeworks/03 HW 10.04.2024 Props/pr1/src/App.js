// import React from 'react'
// import ProductList from './components/ProductList'

// function App() {
//   return (
//     <ProductList/>
//   )
// }

// export default App

import React, { useState } from 'react'
import Item1 from './Homework5Components/Item1'
import Item2 from './Homework5Components/Item2'
import Item3 from './Homework5Components/Item3'
function App() {
	const [showFirst, setShowFirst] = useState(true)
	const [showSecond, setShowSecond] = useState(false)
	const [showThird, setShowThird] = useState(true)

	const toggleFirst = () => {
		setShowFirst(!showFirst)
	}
	const toggleSecond = () => {
		setShowSecond(!showSecond)
	}
	const toggleThird = () => {
		setShowThird(!showThird)
	}

	let func
	if (showFirst) {
		func = <Item1 onClick={showFirst} />
	}
	return (
		<div className='app-container'>
			{func}
			<div>
				<button className='btn' onClick={toggleFirst}>
					Переключить первое
				</button>
			</div>
			<div>
				{showSecond ? <Item2 /> : null}
				<button className='btn' onClick={toggleSecond}>
					Переключить второе
				</button>
			</div>
			<div>
				{showThird && <Item3 />}
				<button className='btn' onClick={toggleThird}>
					Переключить третье
				</button>
			</div>
		</div>
	)
}

export default App