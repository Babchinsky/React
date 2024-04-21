import React from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'

function Product() {

  const {id} = useParams() // ловим id из поисковой строки
  const products = useProducts()
  const product = products.find(item => item.id === parseInt(id, 10))

  if (!product) {
		return <div>Product not found</div>
	}

	const { title, price } = product

	return (
		<>
			<h2>{title}</h2>
			<p>Price: {price}</p>
		</>
	)
}

export default Product
