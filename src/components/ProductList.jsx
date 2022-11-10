import React from 'react'
import { useGlobalContext } from '../context'


const ProductList = () => {
    const {demo}=useGlobalContext();
    console.log(demo)
    return (
    <div>ProductList</div>
  )
}

export default ProductList