import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Navigation from './components/Navigation/Navigation'
import TaskA4 from './components/TaskA4/TaskA4'
import TaskB1 from './components/TaskB1/TaskB1'
import TaskB2 from './components/TaskB2/TaskB2'
import TaskB3 from './components/TaskB3/TaskB3'
import TaskB4 from './components/TaskB4/TaskB4'

class App extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<>
				<Router>
					<header>
							<Navigation/> 
					</header>

					<main>
						<Routes>
							<Route path='/TaskA4' element={<TaskA4 />} />
							<Route path='/TaskB1' element={<TaskB1 />} />
							<Route path='/TaskB2' element={<TaskB2 />} />
							<Route path='/TaskB3' element={<TaskB3 />} />
							<Route path='/TaskB4' element={<TaskB4 />} />
						</Routes>
					</main>
				</Router>
			</>
		)
	}
}

export default App
