import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { URL } from '../utils/url'
import "../styles/prod.css"
import Designs from '../components/Designs'
function Product() {
    let id = useParams()
    let navigate = useNavigate()
    let modal = useRef()
    const [prod , setProd] = useState(null)
    useEffect(()=>{
        getProd()
    },[])
    async function getProd(){
        let fetchpdp = await fetch(`${URL}/products`)
        let json = await fetchpdp.json()
        setProd(json.data)
    }
    let foundProd = prod?.find((item)=>item?._id === id?.ID)
    let count = useRef()
    let user_ID = JSON.parse(localStorage.getItem("userID"))  
    async function handleSubmit(e){
      modal.current.classList.add("openMODAL")
      e.preventDefault()
      let ready = {
        product_ref_id:id.ID,
        user_ref_id:user_ID,
        count:count.current.value,
      }
      if(user_ID){
        await fetch(`${URL}/bookmark/`,{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(ready)
        })
      }else{
        navigate("/register")
      }
    }
    function closeModal(e){
      modal.current.classList.remove("openMODAL")
    }
  return (
    <div className='prod'>
      <div className="prod__container">
      <div className="prod__wrapper">
        <div className="prod__left">
          <img src={foundProd?.imageLink} alt="" />
        </div>
        <div className="prod__right">
          <p>{foundProd?.cat_ref_id[0]?.cat_name}</p>
          <h3>{foundProd?.name}</h3>
          <h4>{foundProd?.price}</h4>
          <form onSubmit={(e)=>handleSubmit(e)} >
          <input ref={count} type="text" placeholder='soni'/><br />
          <button className='little' type='submit'>add to cart</button>
          </form>
          <div ref={modal} className="modal">
            <button onClick={closeModal} >close</button>
            <div className="modal__wrapper">
            <div className="modal__card">
              <h4>mahsulot</h4>
            </div>
            <div className="modal__card">
              <h4>mahsulot</h4>
            </div>
            <button >buy</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Designs/>
    </div>
  )
}

export default Product
