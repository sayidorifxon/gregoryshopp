import React, { useEffect, useReducer, useRef, useState } from 'react'
import { URL } from '../utils/url'

function AdminBg() {
    const [image, setImage] = useState(null)
    const [update, forceUpdate] = useReducer(x=>x+1, 0)
    const [id, setId] = useState("")
    let img = useRef()
    let up_img = useRef()
    let editor = useRef()
    useEffect(()=>{
      getImage()
    },[update])
    async function getImage(){
      let fetchImage = await fetch(`${URL}/bgImage`)
      let json = await fetchImage?.json()
      setImage(json?.data)
      forceUpdate()
    }
    async function createImage(e){
      e.preventDefault()
      let ready = {
        imageLink:img.current.value
      }
      await fetch(`${URL}/bgImage`,{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(ready)
      })
      forceUpdate()
      img.current.value = ""
  
    }
    async function updateImage(e){
      e.preventDefault()
      let ready = {
        imageLink:up_img.current.value
      }
      await fetch(`${URL}/${id}`,{
        method:"PUT",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(ready)
      })
      forceUpdate()
      editor.current.classList.remove("open")
      up_img.current.value = ""
  
  
    }
    function openEdit(e){
      editor.current.classList.add("open")
      setId(e.target.id)
    }
    async function deleteEdit(e){
      await fetch(`${URL}/${e.target.id}`, {
        method:"DELETE"
      })
      forceUpdate()
  
    }
    return (
      <main>
        <h1>bg</h1>
        <div className="form_wrapper">
          <form onSubmit={(e)=>createImage(e)} className='create'>
            <input ref={img} type="text" placeholder='img' />
            <button type="submit">create</button>
          </form>
          <div>
          <form onSubmit={(e)=>updateImage(e)} ref={editor} className='update'>
            <input ref={up_img} type="text" placeholder='img' />
            <button type="submit">update</button>
          </form>
          </div>
          <div className="grid">
            {image?.map((item)=>{
              return(
              <div className="card" key={item?._id}>
                <img width={100} src={item?.imageLink} alt="rasm yoq" />
                <button id={item?._id} onClick={(e)=>deleteEdit(e)}>delete</button>
                <button id={item?._id} onClick={(e)=>openEdit(e)} >update</button>
              </div>
              )
            })}
          </div>
        </div>
      </main>
    )
}

export default AdminBg
