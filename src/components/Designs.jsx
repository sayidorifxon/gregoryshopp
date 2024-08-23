import React, { useEffect, useState } from 'react'
import { URL } from '../utils/url'
import "../styles/design.css"
function Designs() {
    const[design , setDesign] = useState(null)
  useEffect(()=>{
    getDesigns()
  },[])
  async function getDesigns() {
    let fetchDesigns = await fetch(`${URL}/pdp`)
    let json = await fetchDesigns.json()
    setDesign(json.data[0])
  }
  return (
    <div className='design' style={{backgroundImage:`url(${design?.bg_image})`}}>
      <div className="design__container">
        <div className="design__wrapper">
            <div className="design__l">
                <img src={design?.imageLink} alt="" />
            </div>
            <div className="design__r">
                <h3>{design?.title}</h3>
                <h4>{design?.description}</h4>
                <img src={design?.signature_image} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Designs
