import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function ProductItem(props) {
	const { product } = props

	// Проверяем наличие product перед деструктуризацией
	const title = product ? product.title : ''
	const price = product ? product.price : ''
	const id = product ? product.id : ''

	return (
		<Link to={`/product/${id}`} className='link'>
			<div className='item'>
				<h2>{title}</h2>
				<p>{price} грн</p>
			</div>
		</Link>
	)
}

export default ProductItem
