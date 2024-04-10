import React from 'react'
import styles from './ProductList.module.css'; // Подключаем модульные стили


function Product(props) {
	let totalProductPrice = props.product.price * props.product.quantity;
	return (
		<div className={styles.productContainer}>
			<h2 className={styles.productName}>{props.product.name}</h2>
			<p className={styles.productPrice}>Цена за 1шт.: {props.product.price}</p>
			<p className={styles.productCategory}>
				Категория: {props.product.category}
			</p>
			<p className={styles.productQuantity}>
				Количество: {props.product.quantity}
			</p>
			<p className={styles.totalProductPrice}>Цена: {totalProductPrice}</p>
		</div>
	)
}

export default Product
