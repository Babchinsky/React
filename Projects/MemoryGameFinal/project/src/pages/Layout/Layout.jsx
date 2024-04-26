import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Theme from '../Theme/Theme'
import { useState } from 'react'
import App from '../Game'
// import styles from './Layout.module.css' // Импортируем CSS Module
import '../../App.css'
import Login from '../Auth/Login'

const Layout = () => {
	const [isLogged, setLoggedInUser] = useState(false)

	const clearLog = () => {
		localStorage.removeItem('loggedInUser')
		setLoggedInUser(false)
	}

	return (
		<div>
			<header className='header'>
				{' '}
				{/* Используем классы из CSS Modules */}
				<div className='container'>
					<nav className='nav'>
						<Theme />
						<Link to={'/'} className='navLink'>
							<p>Играть</p>
						</Link>
						<Link to={'/leaderboard'} className='navLink'>
							<p>Leaderboard</p>
						</Link>
						<Link to={'/login'} className='navLink'>
							<p>Вход</p>
						</Link>
						<Link to={'/register'} className='navLink'>
							<p>Регистрация</p>
						</Link>

						{isLogged ? (
							<div className='hello-wrap'>
								{/* <p>Hello {Login.loggedInUser}</p> */}
								<Link to='/login' onClick={clearLog} className='navLink'>
									<p>Выйти</p>
								</Link>
							</div>
						) : null}
					</nav>
				</div>
			</header>
			<main className='main'>
				<div className='container'>
					<Outlet />
				</div>
			</main>
		</div>
	)
}

export default Layout
