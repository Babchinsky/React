import React from 'react'
import { Link } from 'react-router-dom'

function ProductItem(props) {
	const { product } = props

	// Проверяем наличие product перед деструктуризацией
	const title = product ? product.title : ''
	const price = product ? product.price : ''
	const id = product ? product.id : ''

	return (
		<Link to={`/product/${id}`}>
			<div className='item'>
				<h2>{title}</h2>
				<p>{price}</p>
			</div>
		</Link>
	)
}

export default ProductItem
