import React, { useEffect, useState } from 'react'
import { URL } from '../utils/url'

function Categories() {
    const [cat, setCat] = useState(null)
    useEffect(()=>{
        getCat()
      }, [])
      async function getCat(){
        let fetchCat = await fetch(`${URL}/category`)
        let json = await fetchCat?.json()
        setCat(json?.data)
      }
      console.log(cat);
  return (
    <div className="cats">
    <div className="cat__container">
    <div className='cat__wrapper'>
        <button>all</button>
      {cat?.map((item)=>{
        return(
            <h4 key={item?._id}>{item?.cat_name}</h4>
        )
      })}
    </div>
    </div>
    </div>
  )
}

export default Categories
