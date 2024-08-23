import React, { useEffect, useReducer, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/admin.css"
import { URL } from '../utils/url'
function AdminProducts() {
  const [cat, setCat] = useState(null)
  const [product, setProduct] = useState(null)
  const [id, setId] = useState("")
  const [update, forceUpdate] = useReducer(x=>x+1, 0)
  let c_name = useRef()
  let c_count = useRef()
  let c_img = useRef()
  let c_price = useRef()
  let c_size = useRef()
  let c_description = useRef()
  let c_detail = useRef()
  let c_shipping = useRef()
  let c_cat = useRef()
  let up_name = useRef()
  let up_count = useRef()
  let up_img = useRef()
  let up_price = useRef()
  let up_size = useRef()
  let up_description = useRef()
  let up_detail = useRef()
  let up_shipping = useRef()
  let up_cat = useRef()
  let openedit = useRef()
  useEffect(()=>{
    getCat()
    getProduct()
  }, [update])
  async function getCat(){
    let fetchCat = await fetch(`${URL}/category`)
    let json = await fetchCat.json()
    setCat(json.data)
    forceUpdate()
  }
  async function getProduct(){
    let fetchCat = await fetch(`${URL}/products`)
    let json = await fetchCat.json()
    setProduct(json.data)
    forceUpdate()
  }
  async function createProduct(e){
    e.preventDefault()
    let ready = {
      name:c_name.current.value,
      count:c_count.current.value,
      imageLink:c_img.current.value,
      price:c_price.current.value,
      size:c_size.current.value,
      description:c_description.current.value,
      details:c_detail.current.value,
      shipping:c_shipping.current.value,
      cat_ref_id:c_cat.current.value,
    }
    await fetch(`${URL}/products`, {
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(ready)
    })
    forceUpdate()
  }
  async function updateProduct(e){
    e.preventDefault()
    let ready = {
      name:up_name.current.value,
      count:up_count.current.value,
      imageLink:up_img.current.value,
      price:up_price.current.value,
      size:up_size.current.value,
      description:up_description.current.value,
      details:up_detail.current.value,
      shipping:up_shipping.current.value,
      cat_ref_id:up_cat.current.value,
    }
    await fetch(`${URL}/products/${id}`, {
      method:"PUT",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(ready)
    })
    openedit.current.classList.remove("open")
    forceUpdate()
  }
  function openEditForm(e){
    setId(e.target.id)
    openedit.current.classList.add("open")
  }
  async function deleteEditForm(e){
    await fetch(`${URL}/products/${e.target.id}`,{
      method:"DELETE"
    })
    forceUpdate()
  }
  return (
    <div>
      <header className='adminheader'>
        <NavLink to="/admin">admin</NavLink><br />
        <NavLink to="/adminCategory">category</NavLink><br />
        <NavLink to="/adminProducts">products</NavLink><br />
      </header>
      <div className="admincatwrapper">
      <form onSubmit={(e)=>createProduct(e)}>
        <input ref={c_name} type="text" placeholder='name'/><br />
        <input ref={c_count} type="number" placeholder='count'/><br />
        <input ref={c_img} type="text" placeholder='img'/><br />
        <input ref={c_price} type="number" placeholder='price'/><br />
        <input ref={c_size} type="number" placeholder='size'/><br />
        <input ref={c_description} type="text" placeholder='description'/><br />
        <input ref={c_detail} type="text" placeholder='details'/><br />
        <input ref={c_shipping} type="text" placeholder='shipping'/><br />
        <select ref={c_cat}>
          {cat?.map((item)=>{
            return <option key={item?._id} value={item?._id}>{item?.cat_name}</option>
          })}
        </select>
        <button type="submit">create</button>
      </form>
      <div>
      <form ref={openedit} onSubmit={(e)=>updateProduct(e)} className='update_product'>
        <input ref={up_name} type="text" placeholder='name'/><br />
        <input ref={up_count} type="number" placeholder='count'/><br />
        <input ref={up_img} type="text" placeholder='img'/><br />
        <input ref={up_price} type="number" placeholder='price'/><br />
        <input ref={up_size} type="number" placeholder='size'/><br />
        <input ref={up_description} type="text" placeholder='description'/><br />
        <input ref={up_detail} type="text" placeholder='details'/><br />
        <input ref={up_shipping} type="text" placeholder='shipping'/><br />
        <select ref={up_cat}>
          {cat?.map((item)=>{
            return <option key={item?._id} value={item?._id}>{item?.cat_name}</option>
          })}
        </select>
        <button type="submit">update</button>
      </form>
      </div>
      <div className="grid">
        {product?.map((item)=>{
          return(
            <div className="card" key={item?._id}>
              <img width={50} src={item?.imageLink} alt="" />
              <h4>{item?.name}</h4>
              <button id={item?._id} onClick={(e)=>openEditForm(e)}>update</button>
              <button id={item?._id} onClick={(e)=>deleteEditForm(e)}>delete</button>
            </div>
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default AdminProducts
