import React from 'react'
// import { useState } from 'react'

function MyButton({count, onClick}) {
  return (
		<>
			<p>{count}</p>
			<button onClick={onClick}>Click me</button>
		</>
	)
}

export default MyButton
