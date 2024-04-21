import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import Product from './components/Product'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { ProductProvider } from './context/ProductContext'
import './App.css'


function App() {
  const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<ProductProvider>
					<Layout />
				</ProductProvider>
			),
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/product/:id',
					element: <Product />,
				},
				{
					path: '*',
					element: <NotFound />,
				},
			],
		},
		{},
	])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
