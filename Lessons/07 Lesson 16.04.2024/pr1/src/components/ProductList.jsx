import React from 'react'
import ProductItem from './ProductItem'
import { useProducts } from '../context/ProductContext'


function ProductList() {
	const products = useProducts();
	console.log(products);

	return (
		<>
			<h1>ProductList</h1>
			<div className="row">
				{
					products.map(item => <ProductItem key={item.id} product={item}/>)
				}
			</div>
			<ProductItem />
		</>
	)
}

export default ProductList
