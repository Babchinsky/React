import React from 'react'
import User from './User'

function UserList() {
	const users = [
		{
			name: 'Alex',
			age: 35,
			group: 'f31',
		},
		{
			name: 'Ris',
			age: 22,
			group: 'p41',
		},
		{
			name: 'Jes',
			age: 45,
			group: 'p41',
		},
	]

	let usersEls = users.map(item => <User user={item} />)
	console.log(usersEls)

	return (
    <>
      <h2>UserList</h2>
      <div className='row'>{usersEls}</div>
    </>
  )
}

export default UserList
