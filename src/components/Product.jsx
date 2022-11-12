import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Product = ({brand,title:name,discountPercentage,id,image,rating,stock,thumbnail,price}) => {
  const priceAfterDiscount=(price-price*(discountPercentage/100)).toFixed(1)
  const {addItemToCart}=useGlobalContext()
  const handleCartAdd=(e)=>{
    e.preventDefault()
    addItemToCart(id,name,priceAfterDiscount,thumbnail)
  }
  return (
    <article className="product">
      <div className="img-container">
        <img src={thumbnail} alt="Product Image" />
      </div>
      <div className='product-footer'>
        <h3>{name}</h3>
        <h5>Brand:{brand}</h5>
        <h4>Price:<s>{price}</s>$</h4>
        <h4>Discount: {discountPercentage}%</h4>
        <h4>Buy Now at: {priceAfterDiscount}</h4>
        <Link to={`/product/${id}`} className='btn btn-primary btn-details'>Details</Link>
        <button className='btn btn-primary' onClick={handleCartAdd}>Add To Cart</button>
      </div>
    </article>
  )
}

export default Product