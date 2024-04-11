import React from 'react'

import Product from './Product'
import styles from './ProductList.module.css' 
import products from './products'

function ProductList() {
  // Переменная productsEls: С помощью метода map создается массив productsEls, который содержит компоненты Product, созданные из массива products. Каждый компонент Product получает свойство product, содержащее информацию о каждом продукте.
	let productsEls = products.map(product => <Product product={product} />)
  console.log(productsEls);

  let totalBillPrice = 0
	products.forEach(product => {
		totalBillPrice += product.price * product.quantity
	})

	return (
		<div className={styles.userListContainer}>
		  <h2 className={styles.title}>Ваш чек на сумму {totalBillPrice}</h2>
		  <div className={styles.row}>{productsEls}</div>
		</div>
	)
}

export default ProductList
