import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navigation from './components/less2/Navigation'
import Price from './components/less2/Price'
import About from './components/less2/About/About'
import Contact from './components/less2/Contact'
import UserList from './components/less2/Users/UserList'

function App() {
	return (
		<Router>
			<>
				<header>
					<div className='container'>
						<Navigation />
					</div>
				</header>

				<section>
					<UserList/>
				</section>


				<main>
					<div className='container'>
						<Routes>
							<Route path='/Price' element={<Price />} />
							<Route path='/About' element={<About />} />
							<Route path='/Contact' element={<Contact />} />
						</Routes>
					</div>
				</main>
			</>
		</Router>
	)
}

export default App
