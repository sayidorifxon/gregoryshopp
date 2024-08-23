import React, { useEffect, useState } from 'react'
import { URL } from '../utils/url'

function ProductsPdp() {
    const [pdp , setPdp] = useState(null)
    useEffect(()=>{
        getPdp()
    },[])
    async function getPdp(){
        let fetchpdp = await fetch(`${URL}/products`)
        let json = await fetchpdp.json()
        setPdp(json.data[0])
    }
    console.log(pdp);
    
  return (
    <div className='propdp'>
      <div className="procontainer">
        <div className="pro__wrapper">
            <div className="proleft">

            </div>
            <div className="proRight">

            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPdp
