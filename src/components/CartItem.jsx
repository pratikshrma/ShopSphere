import React from 'react'
import Up from '../assets/up.svg'
import Down from '../assets/down.svg'
import { useGlobalContext } from '../context'

const CartItem = ({id,name,price,image,amount}) => {
  const {increase,decrease,remove}=useGlobalContext()
  return (
    <article className='cart-item'>
      <img src={image} alt={name} className="img-main"/>
      <div>
        <h4>{name}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button
          className='remove-btn'
          onClick={() => remove(id)}
        >
          remove
        </button>
      </div>
      <div>
        <button className='price-btn' onClick={() => increase(id)}>
          <img src={Up} alt="Up Arrow" height="30px"/>
        </button>
        <h3 className='price'>{amount}</h3>
        <button className='price-btn' onClick={() => decrease(id)}>
          <img src={Down} alt="Down Arrow" height="30px"/>
        </button>
      </div>
    </article>
  )
}

export default CartItem