import React, { useState, useEffect } from 'react'

const ProductForm = ({ onSubmit, initialProduct }) => {
	const [title, setTitle] = useState(initialProduct?.title || '')
	const [price, setPrice] = useState(initialProduct?.price || '')

	useEffect(() => {
		setTitle(initialProduct?.title || '')
		setPrice(initialProduct?.price || '')
	}, [initialProduct])

	const handleSubmit = () => {
		if (title && price) {
			const product = {
				title,
				price: parseFloat(price),
			}
			onSubmit(product)
		}
	}

	return (
		<div>
			<h2>{initialProduct ? 'Edit Product' : 'Add Product'}</h2>
			<input
				type='text'
				placeholder='Title'
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			<input
				type='number'
				placeholder='Price'
				value={price}
				onChange={e => setPrice(e.target.value)}
			/>
			<button onClick={handleSubmit}>
				{initialProduct ? 'Update' : 'Add'}
			</button>
		</div>
	)
}

export default ProductForm
