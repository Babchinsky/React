import React from 'react'
// import { NavLink, Outlet } from 'react-router-dom'
import { Outlet} from 'react-router-dom'

function Layout() {
  return (
		<>
			{/* <header>
				<div className='container'>
					<nav>
						<ul className='menu'>
							<li>
								<NavLink to='/'>Home</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header> */}

			<main>
				<div className='container'>
					<Outlet />
				</div>
			</main>


			
			{/* <footer>
				<div className='container'></div>
			</footer> */}
		</>
	)
}

export default Layout
