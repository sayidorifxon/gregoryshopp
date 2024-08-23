import React, { useEffect, useRef, useState } from 'react'
import { URL } from '../utils/url'
import "../styles/adminplp.css"
function AdminPLP() {
    let c_title = useRef()
    let c_image = useRef()
    let u_title = useRef()
    let u_image = useRef()
    let plps = useRef()
    const [plp, setPlp]= useState(null)
    const [id, setId] = useState("")
    useEffect(()=>{
        getPlp()
    },[])
    
    async function getPlp(e){
        let fetchPlp = await fetch(`${URL}/plp`)
        let json =await fetchPlp.json()
        setPlp(json.data)
    }
    async function updatePlp(e){
        e.preventDefault()
        let ready = {
            title:u_title.current.value,
            imageLink:u_image.current.value,
        }
        await fetch(`${URL}/plp/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(ready)
        })
    }
    async function createPlp(e){
        e.preventDefault()
        let ready = {
            title:c_title.current.value,
            imageLink:c_image.current.value,
        }
        await fetch(`${URL}/plp`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(ready)
        })
    }
    function openplps(e){
        plps.current.classList.add("openplps")
        setId(e.target.id)
    }
    async function deleteplps(e){
        await fetch(`${URL}/plp/${e.target.id}`,{
            method:"DELETE"
        })
    }
  return (
    <div>
        <div className="plpwrapper">
      <form onSubmit={(e)=>createPlp(e)}>
        <input ref={c_title} type="text" placeholder='title' />
        <input ref={c_image} type="text" placeholder='img' />
        <button type="submit">create</button>
      </form>
      <div className="div">
      <form ref={plps} className='updateplps' onSubmit={(e)=>updatePlp(e)}>
        <input type="text" placeholder='title' />
        <input type="text" placeholder='img' />
        <button type="submit">update</button>
      </form>
      </div>
      <div className="plpgrid">
        {plp?.map((item)=>{
        return(
        <div className="plpcard">
            <h4>{item?.title}</h4>
            <img src={item?.imageLink} alt="" />
            <button id={item?._id} onClick={(e)=>openplps(e)} >update</button>
            <button id={item?._id} onClick={(e)=>deleteplps(e)} >delete</button>
        </div>
            )
        })}
      </div>
        </div>
    </div>
  )
}

export default AdminPLP
