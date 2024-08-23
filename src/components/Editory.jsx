import React, { useEffect, useState } from 'react'
import "../styles/editory.css"
import { URL } from '../utils/url'

function Editory() {
    const [editory, setEditory]= useState()
    useEffect(()=>{
        getEditory()
    },[])
    async function getEditory(){
        let fetchEditory = await fetch(`${URL}/editorial`)
        let json = await fetchEditory.json()
        setEditory(json.data[0]);
    }
  return (
    <div className='editory'>
      <div className="editory__container">
        <div className="box">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        <div className="editory__wrapper">
            <div className="left">
                <img src={editory?.imageLink} alt="" />
            </div>
            <div className="right">
                <h2>{editory?.title}</h2>
                <h4>{editory?.description}</h4>
                <a href="#!">Shop the collection</a>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Editory
