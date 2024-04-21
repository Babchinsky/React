import React from 'react'
import { useProducts } from '../context/ProductContext'



function ProductManagment() {
  const {products, addProduct} = useProducts();
  
const handleAddProduct = () =>{
  const newProduct = {
    title: 'prNew',
    price: 456,
    id: products.length + 1
  }
  addProduct(newProduct)
}

  return (
    <>
      <h2>Add Product</h2>
      <button onClick={handleAddProduct}>Add</button>
    </>
  )
}

export default ProductManagment
