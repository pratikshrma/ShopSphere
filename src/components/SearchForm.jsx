import React from 'react'
import { useGlobalContext } from '../context'


const SearchForm = () => {
  const {setSearchTerm}=useGlobalContext()
  const searchValue=React.useRef('');

  React.useEffect(()=>{
    searchValue.current.focus()
  ,[]})

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  
  const searchProduct=(e)=>{
    setSearchTerm(searchValue.current.value)
  }
  
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input type="text" ref={searchValue} id="name" onChange={searchProduct} placeholder="So what is it that you desire!!" />
        </div>
      </form>
    </section>
  )
}

export default SearchForm