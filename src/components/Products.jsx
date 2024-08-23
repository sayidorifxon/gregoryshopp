import React, { useEffect, useState } from 'react'
import "../styles/products.css"
import { URL } from '../utils/url'
import { useLocation } from 'react-router-dom'

function Products() {
  let location = useLocation()
    const [product, setProduct]= useState()
    useEffect(()=>{
        getProduct()
    },[])
    async function getProduct(){
        let fetchProduct = await fetch(`${URL}/product-features`)
        let json = await fetchProduct.json()
        setProduct(json.data[0]);
    }
  return (
    <div className={location.pathname === "/"?'products': "other_products"}>
      <div className="products_wrapper">
        <h2>{product?.title}</h2>
        <div className="products__grid">
            {product?.product_ref_id?.map((item)=>{
                return(
                <div className="products__card" key={item?._id}>
                    <img src={item?.imageLink} alt="" />
                    <h5>{item?.name}</h5>
                    <p>{item?.price}</p>
                    <span>new collection</span>
                </div>
                )
            })}
        </div>
        <a href="#!">shop all</a>
      </div>
    </div>
  )
}

export default Products
