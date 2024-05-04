import React from 'react'

const CategoryHome = ({type}) => {
  
  return (
    <div className='CategoryHome'>
        <div className='categoryTitle'>{type}</div>
          <div className='cateogryImage'>
          {
            [1,2,3,4,5,6].map(each=>{
              return(
                <img src={`src/assets/${type}/${each}.jpeg`}/>
              )
            })
            
          }

          
          </div>
        <div className='categoryDes'>Categorised by our {type} Experts</div>
    </div>
  )
}

export default CategoryHome