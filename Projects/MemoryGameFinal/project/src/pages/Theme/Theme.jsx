import React from 'react'
import { useState } from 'react'
const Theme = () => {
	const [darkTheme, setDark] = useState(false)
	const handleCheck = () => {
		setDark(!darkTheme)
		toggleTheme()
	}
	const toggleTheme = () => {
		const themeToggle = document.getElementById('theme-toggle')
		const body = document.body
		body.classList.toggle('dark-mode')
	}

	return (
		<div>
			<div class='checkbox-wrapper-5'>
				<div class='check'>
					<input
						id='check-5'
						type='checkbox'
						checked={!darkTheme}
						onChange={handleCheck}
					/>
					<label for='check-5'></label>
				</div>
			</div>
		</div>
	)
}

export default Theme
