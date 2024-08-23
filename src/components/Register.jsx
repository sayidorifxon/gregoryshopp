import React, { useRef } from 'react'
import { URL } from '../utils/url'
import { useNavigate } from 'react-router-dom'

function Register() {
    let name = useRef()
    let email = useRef()
    let password = useRef()
    let date = useRef()
    let nav = useNavigate()
    async function createUser(e){
        e.preventDefault()
        let ready = {
            username:name.current.value,
            email:email.current.value,
            password:password.current.value,
            birth_date:date.current.value,
        }
        let res = await fetch(`${URL}/users/register`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(ready)
        })
        let result = await res?.json()
        if(result?.message === "success"){
            nav(`/user/${result.data._id}`)
            localStorage.setItem(`userID`,JSON.stringify(result.data._id))
        }else{
            nav(`/register`)
            alert("register bolmadi")
        }
    }
  return (
    <div>
      <form onSubmit={(e)=>createUser(e)} >
        <input ref={name} type="text" placeholder='username' />
        <input ref={email} type="text" placeholder='user email' />
        <input ref={password} type="text" placeholder='user password' />
        <input ref={date} type="text" placeholder='user date' />
        <button type="submit">register</button>
      </form>
    </div>
  )
}

export default Register
