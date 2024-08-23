import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { URL } from '../utils/url'

function User() {
    let id = useParams()
    const [user , setUser] = useState(null)
    const [prod , setProd] = useState(null)
    useEffect(()=>{
        getUser()
        getProd()
    },[])
    async function getUser(){
        let fetchUser = await fetch(`${URL}/users`)
        let json = await fetchUser.json()
        setUser(json.data)
    }
    async function getProd(){
        let fetchUser = await fetch(`${URL}/products`)
        let json = await fetchUser.json()
        setProd(json.data)
    }
    let foundUser = user?.find((item)=>item?._id === id?.ID)

  return (
    <div className='userwrapper'>
      <h1>user</h1>
      <h3>{foundUser?.username}</h3>
      <h3>{foundUser?.email}</h3>
      <div className="pro__wrapper">
        {prod?.map((item)=>{
            return(
                <div className="pro__card" key={item?._id}>
                    <NavLink to={`/product/${item?._id}`}>{item?.name}</NavLink>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default User
