import React from 'react'
import Product from './Product'

function Product_list() {
	const products = [
		{ title: 'Cabbage', isFruit: false, id: 1 },
		{ title: 'Garlic', isFruit: false, id: 2 },
		{ title: 'Apple', isFruit: true, id: 3 },
	]
  const content = products.map(item => 
	<Product key={item.id} product={item}/>
)

	return (
		<section className='wrap-products'>
			<h2>Products</h2>
			<div>
        {content}
      </div>
		</section>
	)
}

export default Product_list
