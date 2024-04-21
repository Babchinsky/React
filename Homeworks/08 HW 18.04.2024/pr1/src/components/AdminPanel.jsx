import React, { useState } from 'react'
import { useProducts } from '../context/ProductContext'
import ProductForm from './ProductForm'

function AdminPanel() {
	// Извлекаем продукты и функции для добавления, обновления и удаления из пользовательского хука
	const { products, addProduct, updateProduct, deleteProduct } = useProducts()
	const [editingProduct, setEditingProduct] = useState(null)

	return (
		<div>
			{/* Используем ProductForm для добавления или редактирования */}
			<ProductForm
				onSubmit={
					editingProduct
						? product => {
								updateProduct(editingProduct.id, product)
								setEditingProduct(null) // Очистить поле редактирования после обновления
						  }
						: addProduct
				}
				initialProduct={editingProduct}
			/>

			{/* Список продуктов с возможностью удаления и редактирования */}
			<h2>Product List</h2>
			<ul>
				{products.map(product => (
					<li key={product.id}>
						{product.title} - {product.price} грн
						<button onClick={() => deleteProduct(product.id)}>Delete</button>
						<button onClick={() => setEditingProduct(product)}>Edit</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default AdminPanel
