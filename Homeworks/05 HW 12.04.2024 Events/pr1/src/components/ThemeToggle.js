import React, { useState } from 'react'


function ThemeToggle() {
	const [darkTheme, setDarkTheme] = useState(false)

	const toggleTheme = () => {
		setDarkTheme(darkTheme => !darkTheme)
	}

	return (
		<div className={`theme ${darkTheme ? 'dark' : ''}`}>
			<label htmlFor='theme' className='theme__label'>
				<span className='theme__toggle-wrap'>
					<input
						id='theme'
						className='theme__toggle'
						type='checkbox'
						role='switch'
						name='theme'
						value='dark'
						checked={darkTheme}
						onChange={toggleTheme}
					/>
					<span className='theme__fill'></span>
					
				</span>
			</label>
		</div>
	)
}

export default ThemeToggle
