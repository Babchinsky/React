import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    //
    navigate('/')
  }

  return (
		<>
			<h1>Login</h1>
			<form onSubmit='handleSubmit'>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' />
				</div>

				<div>
					<label htmlFor='pass'>Email</label>
					<input type='password' id='pass' />
				</div>
				<button type='submit'>Login</button>
			</form>
		</>
	)
}

export default Login
