import React, { useEffect, useRef, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import { URL } from '../utils/url'

function Login() {
  let email_input = useRef()
  let password_input = useRef()
  let nav = useNavigate()
  const[user , setUser] = useState(null)
  useEffect(()=>{
    getUsers()
  },[])
  async function getUsers() {
    let fetchUsers = await fetch(`${URL}/users`)
    let json = await fetchUsers.json()
    setUser(json.data)
  }
  async function handleSubmit(e) {
    e.preventDefault(e)
    let findUser = user?.find((item)=>item?.email === email_input.current.value)
    console.log(findUser);
    if(findUser?.password === password_input.current.value){
      nav(`/user/${findUser?._id}`)
    }else(
      nav(`/register`)
    )
  }
  
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)} >
        <input ref={email_input} type="text" placeholder='email'/>
        <input ref={password_input} type="text" placeholder='password'/>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default Login
