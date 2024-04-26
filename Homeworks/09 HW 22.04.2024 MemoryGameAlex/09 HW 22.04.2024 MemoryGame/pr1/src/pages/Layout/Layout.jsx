import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import Theme from '../Theme/Theme';
import { useState } from 'react';
import Login from '../Auth/Login';
import '../../App.css'
const Layout = () => {
    
	const [isLogged, setLoggedInUser] = useState(false)
    const handleCheckUser = () => {
		const user = localStorage.getItem('loggedInUser')
		if (user) {
		  setLoggedInUser(user)
		} else {
		  //navigate('/login') // Если нет, перенаправляем на страницу логина
		}

	}
    const clearLog=()=>{
        const user = localStorage.getItem('loggedInUser')
		localStorage.removeItem('loggedInUser')
    }

    
    return (
        <div>
            <header>
				<div className='container'>
					<nav>
                    <Theme></Theme>
                    {isLogged ? <div> Hello {Login.GetCurrentUser} <Link to='/login' onClick={clearLog}>выйти?</Link></div> :null }{
								
                    }
                              
					</nav>
				</div>
			</header>
            <main>
				<div className='container'>
					<Outlet />
				</div>
			</main>
        </div>
    );
}

export default Layout;
