import React from 'react'
import { NavLink } from 'react-router-dom'



function Navigation() {
  return (
		<div className='container'>
			<nav>
				<ul>
					<li>
						<NavLink className='navLink' to='/TaskA4'>
							TaskA4
						</NavLink>
					</li>
					<li>
						<NavLink className='navLink' to='/TaskB1'>
							TaskB1
						</NavLink>
					</li>
					<li>
						<NavLink className='navLink' to='/TaskB2'>
							TaskB2
						</NavLink>
					</li>
					<li>
						<NavLink className='navLink' to='/TaskB3'>
							TaskB3
						</NavLink>
					</li>
					<li>
						<NavLink className='navLink' to='/TaskB4'>
							TaskB4
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navigation
