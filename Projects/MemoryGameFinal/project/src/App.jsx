import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import Game from './pages/Game'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Layout from './pages/Layout/Layout'
import Leaderboard from './components/Leaderboard'
function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element:(
				<Layout/>
			),
			children: [
				{
					path: '/',
					element:  <Game/>,
				},
				{
					path: 'login',
					element: <Login />,
				},
				{
					path: 'register',
					element: <Register />,
				},
				{
					path: 'leaderboard',
					element: <Leaderboard />,
				},
			],
		},
		{
	
		},
	])
	return (
		<>
			<RouterProvider router={router}/>
		</>
	)
}

export default App

