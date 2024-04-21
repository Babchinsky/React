import React from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'

function Product() {
	const { id } = useParams() // ловим id из поисковой строки
	const products = useProducts()
	const product = products.find(item => item.id === parseInt(id, 10))

	if (!product) {
		return <div>Product not found</div>
	}

	const { title, price, description } = product

	return (
		<div className='item'>
			<h1>{title}</h1>
			<h2>{price} грн</h2>
			<p>{description}</p>
		</div>
	)
}

export default Product
