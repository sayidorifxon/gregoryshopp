import React, { useRef } from 'react'
import { URL } from '../utils/url'

function AdminEditorial() {
    let title = useRef()
    let desc = useRef()
    let img = useRef()
    async function handleSubmit(e){
        e.preventDefault()
        let ready = {
            title:title.current.value,
            description:desc.current.value,
            ImageLInk:img.current.value
        }
        await fetch(`${URL}/editorial/66a0cf90d0be52c0e619df9d`,{
            method:"PUT",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(ready)
        })
    }
  return (
    <div>
      <h2>admin editorial</h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input ref={title} type="text"  placeholder='title'/>
        <input ref={desc} type="text"  placeholder='description'/>
        <input ref={img} type="text"  placeholder='img'/>
        <button type='submit'>update</button>
      </form>
    </div>
  )
}

export default AdminEditorial
