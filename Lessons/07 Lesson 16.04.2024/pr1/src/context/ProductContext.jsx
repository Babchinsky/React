import React, { createContext, useContext } from 'react'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
	const products = [
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
	]

	return (
		<ProductContext.Provider value={products}>
			{children}
		</ProductContext.Provider>
	)
}

export const useProducts = () => {
	return useContext(ProductContext)
}
