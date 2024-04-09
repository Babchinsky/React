// import React, { PureComponent } from 'react'
// import './App.css'
// // import News from './components/News/News'
// // import Header from './components/Header/Header'
// // import Main from './components/Main/Main'
// // import Footer from './components/Footer/Footer'

// class App extends PureComponent {
// 	constructor(props) {
// 		super(props)

// 		this.state = {}
// 	}

// 	render() {
// 		return (
// 			<>
//         {/* <Header/>
//         <h1>Users</h1>
//         <News/>
//         <Main/>
//         <Footer/> */}
// 			</>
// 		)
// 	}
// }

// export default App


import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navigation from './components/less2/Navigation'
import Price from './components/less2/Price'
import About from './components/less2/About/About'
import Contact from './components/less2/Contact'

function App() {
	return (
		<Router>
			<>
				<header>
					<div className='container'>
						<Navigation />
					</div>
				</header>

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
