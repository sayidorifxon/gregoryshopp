import React, { useEffect, useRef, useState } from 'react'
import { URL } from '../utils/url'

function AdminProductFeature() {
    const[pro, setPro]= useState(null)
    let title =useRef()
    useEffect(()=>{
        getPro()
    },[])
    async function getPro(){
        let fetchPro = await fetch(`${URL}/products`)
        let json = await fetchPro?.json()
        setPro(json?.data);
    }
    async function handleSubmit(e){
        e.preventDefault()
        let AllSelectedPro = document.querySelectorAll(".selected")
        let selectedProId = []
        AllSelectedPro.forEach((item)=>{
            selectedProId.push(item.id);
        })
        console.log(selectedProId);
        let ready = {
            title:title.current.value,
            product_ref_id:selectedProId,
        }


        await fetch(`${URL}/product-features/669795e9be42387d8060942d`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(ready)
        })
    }
    function selectedPro(e){
        e.target.classList.add("selected")
    }
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)} >
        <h2>product features</h2>
        <input ref={title} type="text" placeholder='title' />
        <div className="wrapper">
        {pro?.map((item)=>{
            return(
                <div  onClick={(e)=>selectedPro(e)} className='card' key={item?._id} id={item?._id}>{item?.name}</div>
            )
        })}
        </div>
        <button type="submit">update</button>
      </form>
    </div>
  )
}

export default AdminProductFeature
