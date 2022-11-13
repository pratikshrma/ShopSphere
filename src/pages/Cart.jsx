import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import CartItem from '../components/CartItem'

import { useGlobalContext } from '../context'

const url="https://dummyjson.com/products/"

const Cart = () => {
  const {cart,total,clearCart}=useGlobalContext()
  
  const [loading,setLoading]=useState(true)
  const [data,setData]=useState([])
  useEffect(()=>{
    setLoading(true)
    try {
      console.log(cart)
      
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  },[])
  
  if(loading){
    return <Loading/>
  }  
  if(cart.length<1){
    return (
      <section className='cart'>
        <header>
          <h2>Your Bag</h2>
          <h4 className='empty-cart'>is currently Empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cart.map((item)=>{
          return <CartItem key={item.id} {...item}/>
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>Total <span>${total}</span></h4>
        </div>
        <button className='btn btn-primary' onClick={clearCart}>Clear Cart</button>
      </footer>
    </section>
  )
}

export default Cart