import React, { useEffect, useReducer, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/admin.css"
import { URL } from '../utils/url'
function AdminCategory() {
  const [cat, setCat] = useState(null)
  const [id, setId] = useState("")
  const [update, forceUpdate] = useReducer(x=>x+1, 0)
  let create_name = useRef() 
  let update_name = useRef() 
  let openform = useRef()
  useEffect(()=>{
    getCat()
  }, [update])
  async function getCat(){
    let fetchCat = await fetch(`${URL}/category`)
    let json = await fetchCat?.json()
    setCat(json.data)
    forceUpdate()
  }
  async function crateCategory(e){
    e.preventDefault()
    let ready = {
      cat_name:create_name.current.value
    }
    await fetch(`${URL}/category`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(ready)
    })
    forceUpdate()
    create_name.current.value = ""
  }
  async function updateCategory(e){
    e.preventDefault()
    let ready = {
      cat_name:update_name.current.value
    }
    await fetch(`${URL}/category/${id}`,{
      method:"PUT",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(ready)
    })
    openform.current.classList.remove("open")
    forceUpdate()
    create_name.current.value = ""
  }
  function openForm(e){
    openform.current.classList.add("open")
    setId(e.target.id)
  }
  async function deleteCat(e){
    await fetch(`${URL}/category/${e.target.id}`,{
      method:"DELETE"
    })
  }
  return (
    <div>
      <header className='adminheader'>
        <NavLink to="/admin">admin</NavLink><br />
        <NavLink to="/adminCategory">category</NavLink><br />
        <NavLink to="/adminProducts">products</NavLink><br />
      </header>
      <div className="admincatwrapper">
      <form onSubmit={(e)=>crateCategory(e)}>
        <input ref={create_name} type="text" placeholder='category name' />
        <button type="submit">create category</button>
      </form>
      <div>
      <form onSubmit={(e)=>updateCategory(e)} ref={openform} className='updateform' >
        <input ref={update_name} type="text" placeholder='category name' />
        <button type="submit">update category</button>
      </form>
      </div>
      <div className="grid">
        {cat?.map((item)=>{
          return(
          <div className="card" key={item?._id}>
            <h4>{item?.cat_name}</h4>
            <button id={item?._id} onClick={(e)=>openForm(e)}>update</button>
            <button id={item?._id} onClick={(e)=>deleteCat(e)}>delete</button>
          </div>
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default AdminCategory