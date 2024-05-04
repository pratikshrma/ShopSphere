import React from 'react'
import { useGlobalContext } from '../context'

const EasySearch = () => {
    const {setSearchTerm,quickSearchTerms}=useGlobalContext()
    const handleSubmit=(term)=>{
        setSearchTerm(term)
    }
    
    return (
    <div >
        <ul className='easysearch'>
            {
                quickSearchTerms.map(each=>{
                    return(
                        <li onClick={()=>handleSubmit(each)}>{each}</li>
                    )
                })
            }
        </ul>
        <div>
        <img src="src/assets/Frame.svg" alt="Shopping Logo" height="60" />
        </div>
    </div>
  )
}

export default EasySearch