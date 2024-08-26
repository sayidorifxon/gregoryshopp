import React, { useEffect, useState } from 'react'
import "../styles/hero.css"
import { URL } from '../utils/url'
function Hero() {
    const [hero, setHero]= useState()
    useEffect(()=>{
        getHero()
    },[])
    async function getHero(){
        let fetchHero = await fetch(`${URL}/headers`)
        let json = await fetchHero.json()
        setHero(json.data[0]);
    }
  return (
    <div className='hero' style={{backgroundImage:`url(${hero?.imageLink})`}}>
      <div className="container">
        <h1>{hero?.title}</h1>
        <a href="/shop">Shop Collection</a>
        
      </div>
    </div>
  )
}

export default Hero
