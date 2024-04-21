import React from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Layout from './layout/Layout'
import './App.css'
import Product from './components/Product'
import { ProductProvider } from './context/ProductContext'
import AuthLayout from './layout/AuthLayout'
import Login from './pages/Login'
import Register from './pages/Register'

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
					path: '/About',
					element: <About />,
				},
				{
					path: '/Contact',
					element: <Contact />,
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
		{
			path: '/auth',
			element: <AuthLayout />,
			children: [
				{
					path: 'login',
					element: <Login />,
				},
				{
					path: 'register',
					element: <Register/>
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
