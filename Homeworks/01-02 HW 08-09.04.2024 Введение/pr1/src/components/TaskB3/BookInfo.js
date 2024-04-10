import React from 'react'

function BookInfo() {
	const book = {
		title: 'To Kill a Mockingbird',
		author: 'Harper Lee',
		genre: 'Fiction',
		pageCount: 281,
		reviews: [
			'A classic that everyone should read at least once in their lifetime.',
			'Beautifully written with powerful themes that are still relevant today.',
			'Captivating story that keeps you hooked from beginning to end.',
		],
	}

	return (
		<>
			<h1>My Favorite Book: {book.title}</h1>
			<h2>Author: {book.author}</h2>
			<h3>Genre: {book.genre}</h3>
			<h3>Number of Pages: {book.pageCount}</h3>
			<h3>Reviews:</h3>
			<ul>
				{book.reviews.map((review, index) => (
					<li key={index}>{review}</li>
				))}
			</ul>
		</>
	)
}

export default BookInfo
