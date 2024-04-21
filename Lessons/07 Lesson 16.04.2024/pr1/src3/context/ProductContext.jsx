import React, { createContext, useContext, useState } from 'react'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([
		{
			title: 'Сумка',
			price: 600,
			id: 0,
		},
		{
			title: 'Барсетка',
			price: 800,
			id: 1,
		},
		{
			title: 'Саквояж',
			price: 1800,
			id: 2,
		},
	])

	const addProduct = (newProduct) => {
		setProducts([...products, newProduct])
		// setProducts(products.push(newProduct)) не получится
	}
	const deleteProduct = (productId) => {
		setProducts(products.filter(product => product.id !== productId));
	}

	return (
		<ProductContext.Provider value={{products, addProduct, deleteProduct}}>
			{children}
		</ProductContext.Provider>
	)
}

export const useProducts = () => {
	return useContext(ProductContext)
}
