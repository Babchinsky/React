import React, { createContext, useContext, useState } from 'react'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([
		{ id: 0, title: 'Example Product', price: 100 },
		// Начальные данные...
	])

	const addProduct = product => {
		const newProduct = {
			...product,
			id: products.length > 0 ? products[products.length - 1].id + 1 : 0,
		}
		setProducts([...products, newProduct])
	}

	const updateProduct = (id, updatedProduct) => {
		setProducts(
			products.map(product =>
				product.id === id ? { ...product, ...updatedProduct } : product
			)
		)
	}

	const deleteProduct = id => {
		setProducts(products.filter(product => product.id !== id))
	}

	return (
		<ProductContext.Provider
			value={{ products, addProduct, updateProduct, deleteProduct }}
		>
			{children}
		</ProductContext.Provider>
	)
}

export const useProducts = () => {
	const context = useContext(ProductContext)

	if (!context) {
		throw new Error('useProducts must be used within a ProductProvider')
	}

	return context
}
