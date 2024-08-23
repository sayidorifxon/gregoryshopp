import React, { useEffect, useState } from 'react'
import { URL } from '../utils/url'
import "../styles/big.css"
function BigBg() {
    const [big, setBig]= useState()
    useEffect(()=>{
        getBig()
    },[])
    async function getBig(){
        let fetchBig = await fetch(`${URL}/bgImage`)
        let json = await fetchBig.json()
        setBig(json?.data[0]);
    }
  return (
    <div className='big' style={{backgroundImage:`url(${big?.imageLink})`}}>
      
    </div>
  )
}

export default BigBg
