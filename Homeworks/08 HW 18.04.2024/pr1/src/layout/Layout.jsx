import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

function Layout() {
	return (
		<div className={styles.layout}>
			<header className={styles.header}>
				<div className={styles.container}>
					<nav>
						<ul className={styles.menu}>
							<li>
								<NavLink
									to='/'
									className={({ isActive }) =>
										`${styles.navLink} ${isActive ? styles.activeLink : ''}`
									}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/admin-panel'
									className={({ isActive }) =>
										`${styles.navLink} ${isActive ? styles.activeLink : ''}`
									}
								>
									Admin Panel
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			<main className={styles.main}>
				<div className={styles.container}>
					<Outlet />
				</div>
			</main>

			<footer className={styles.footer}>
				<div className={styles.container}>
					<h2>Footer</h2>
					<p>&copy; 2024 Your Company. All rights reserved.</p>
				</div>
			</footer>
		</div>
	)
}

export default Layout
