import React,{useEffect,useState} from 'react'
import Loading from '../components/Loading'
import { useParams,Link } from 'react-router-dom'


const url="https://dummyjson.com/products/"

const SingleProduct = () => {
  const {id}=useParams()
  const [loading,setLoading]=useState(false)
  const [product,setProduct]=useState(null)

  useEffect(()=>{
    setLoading(true)
    async function getProduct(){
      try {
        const res=await fetch(`${url}${id}`)
        const data=await res.json()
        setProduct(data)
        setLoading(false)
      }catch(error) {
        console.log(error)
        setLoading(false)
      }
    }
    getProduct()
  },[])
  if(loading){
    return <Loading/>
  }
  if(!product){
    return <h2 className="section-title">No Products Found</h2>
  }
  
  const {title,brand,category,description,discountPercentage,images,thumbnail,price,rating}=product
  return (
    <section className='section product-section'>
      <Link to='/' className='btn btn-primary'>Back to Home</Link>
      <h2 className="section-title">{title}</h2>
      <div className='drink'>
        <img src={thumbnail} alt={title} />
        <div className="drink-info">
          <p>
            <span className='drink-data'>Brand:</span>
            {brand}
          </p>
          <p>
            <span className='drink-data'>name:</span>
            data Component
          </p>
          <p>
            <span className='drink-data'>Original Price:</span>
            {price}$
          </p><p>
            <span className='drink-data'>Price after <b>{discountPercentage}%</b> Discount:</span>
            {(price-(price*discountPercentage/100)).toFixed(1)}$
          </p><p>
            <span className='drink-data'>Rating:</span>
            {rating}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct