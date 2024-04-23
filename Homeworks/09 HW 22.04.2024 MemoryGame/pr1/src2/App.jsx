import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import Game from './pages/Game'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			children: [
				{
					path: '/',
					element: <Game />,
				},
			],
		},
		{
			path: 'auth',
			children: [
				{
					path: 'login',
					element: <Login />,
				},
				{
					path: 'register',
					element: <Register />,
				}
			],
		},
	])
	return (
		<>
			<RouterProvider router={router}/>
		</>
	)
}

export default App

