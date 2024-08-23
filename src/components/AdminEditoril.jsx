import React, { useRef } from 'react'
import { URL } from '../utils/url'

function AdminEditoril() {
    let desc = useRef()
    let img = useRef()
    async function handleSubmit(e){
        e.preventDefault()
        let ready = {
            description:desc.current.value,
            ImageLInk:img.current.value
        }
        await fetch(`${URL}/editoril/66a0d332d0be52c0e61a01b6`,{
            method:"PUT",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(ready)
        })
    }
  return (
    <div>
      <h2>admin editoril</h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input ref={desc} type="text"  placeholder='description'/>
        <input ref={img} type="text"  placeholder='img'/>
        <button type='submit'>update</button>
      </form>
    </div>
  )
}

export default AdminEditoril
