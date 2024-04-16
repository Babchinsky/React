import React from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Layout from './layout/Layout'

function App() {
  const router = createBrowserRouter([
		{
			path: '/',
      element: <Layout/>,
			children: [
				{
					path: '/',
					element: <Home />
				},
				{
					path: '/About',
					element: <About />
				},
				{
					path: '/Contact',
					element: <Contact />
				},
				{
					path: '*',
					element: <NotFound />
				}
			],
		},
		{},
	])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
