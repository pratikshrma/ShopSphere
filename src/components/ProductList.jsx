import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import Product from './Product'

const ProductList = () => {
    const {result,loading}=useGlobalContext();
    if(loading){
      return <Loading/>
    }
    if(result.length<1){
      return (
        <h2 className='section-title'>
          No Result Found !! Sorry
        </h2>
      )
    }
    return (
      <section className="section">
        <div className="products-center">
          {result.map((item)=>{
            return <Product key={item.id} {...item}/>
          })}
        </div>
      </section>
  
  )
}

export default ProductList