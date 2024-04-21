import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import classes from './AuthLayout.module.css'



function AuthLayout() {
  

  return (
		<>
			<header>
				<div className='container'>
					<nav>
						<ul className='menu'>
							<li>
								<NavLink
									to='/auth/login'
									className={classes.link}
									activeClassName={classes.active}
								>
									Login
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/auth/register'
									className={classes.link}
									activeClassName={classes.active}
								>
									Register
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			<>
				<Outlet />
			</>
		</>
	)
}

export default AuthLayout
