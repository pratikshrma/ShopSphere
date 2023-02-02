import React from 'react'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import CategoryHome from './CategoryHome'

const Title = () => {
  const base="src/assets/"
  function handleHover(img){
    setImage(base+`/${img}.svg`)
    // setIsEnter(v=>!v)
    if(img=="electronics"){
      setGradientColor(gradient[0])
      console.log("1")
    }
    else if(img=="furniture"){
      setGradientColor(gradient[1])
      console.log("2")
    }
    else setGradientColor(gradient[2])
  }
  const gradient=["#139CFF","#e77828","#ed55c2"]
  const [image,setImage]=useState(base+"/electronics.svg")
  // const [isEnter,setIsEnter]=useState(false)
  const [gradientColor,setGradientColor]=useState(gradient[0])
  return (
    <div className='Title'>
      <img src={image} alt="Image one" className="backImage" />
      {/* <CSSTransition 
      in={isEnter}
      timeout={500}
      classNames="myClass">
      </CSSTransition>     */}
      <div className="componentInImage" style={{background:`linear-gradient(to bottom,${gradientColor}, white )`}}>
      <div onMouseOver={()=>handleHover("electronics")} className="electro"><CategoryHome type="electronics"/></div>
      <div onMouseOver={()=>handleHover("furniture")} className="electro"><CategoryHome type="furniture"/></div>
      <div onMouseOver={()=>handleHover("toys")} className="electro"><CategoryHome type="toys"/></div>
      </div>
    </div>
  )
}

export default Title