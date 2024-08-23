import React, { useEffect, useState } from 'react'
import { URL } from '../utils/url'
import "../styles/editoril.css"
function Editoril() {
    const [editoril, setEditoril]= useState()
    useEffect(()=>{
        getEditoril()
    },[])
    async function getEditoril(){
        let fetchEditoril = await fetch(`${URL}/editoril`)
        let json = await fetchEditoril.json()
        setEditoril(json.data[0]);
    }
    console.log(editoril);
  return (
    <div className='editoril' style={{backgroundImage:`url(${editoril?.imageLink})`}}>
      <div className="message">
        <h3>{editoril?.description}</h3>
        <p>Enter your Email</p>
      </div>
        <a href="#!">Sign up</a>
    </div>
  )
}

export default Editoril
