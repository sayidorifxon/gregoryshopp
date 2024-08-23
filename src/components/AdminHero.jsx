import React, {  useRef } from 'react'
import { URL } from '../utils/url'
function AdminHero() {
    let title = useRef()
    let bg_image = useRef()
    async function handleSubmit(e){
        e.preventDefault()
        let ready = {
            "title":title.current.value,
            "imageLink":bg_image.current.value
        }
        await fetch(`${URL}/headers/66979fca46152823346309c4`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(ready)
        })
    }
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)} >
        <h1>hero</h1>
        <input ref={title} type="text" placeholder='title' />
        <input ref={bg_image} type="text" placeholder='bgimage' />
        <button type="submit">updatehero</button>
      </form>
    </div>
  )
}

export default AdminHero
