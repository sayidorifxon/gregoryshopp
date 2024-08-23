import React, { useEffect, useState } from 'react'
import { URL } from '../utils/url'
import "../styles/plpproduct.css"
function PLPProducts() {
  const [product, setProduct] = useState(null)
  const [plp, setPlp] = useState(null)
  useEffect(()=>{
    getProduct()
    getPlp()
  }, [])
  
  async function getProduct(){
    let fetchCat = await fetch(`${URL}/products`)
    let json = await fetchCat.json()
    setProduct(json.data)
  }
  async function getPlp(){
    let fetchCat = await fetch(`${URL}/plp`)
    let json = await fetchCat.json()
    setPlp(json.data)
  }
  return (
    <div className='plpproduct'>
      <div className="plpproduct__container">
        <div className="plpproduct__wrapper">
          {plp?.map((item)=>{
            return(
              <div className="big_item">
                <img src={item?.imageLink} alt="" />
                <div className="content">
                  <p>{item?.title}</p>
                  <a href="#!">CTA button</a>
                </div>
              </div>
            )
          })}
          {product?.map((item)=>{
            return(
              <div className="item">
                <img src={item?.imageLink} alt="" />
                <h4>{item?.name}</h4>
                <p>{item?.price}</p>
                <span>new collection</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PLPProducts
