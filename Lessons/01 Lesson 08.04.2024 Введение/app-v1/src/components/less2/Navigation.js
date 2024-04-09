import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
		<nav>
			<ul className='menu'>
				<li>
					<NavLink to='/Price'>Price</NavLink>
					<NavLink to='/About'>About</NavLink>
					<NavLink to='/Contact'>Contact</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
