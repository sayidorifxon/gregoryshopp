import React from 'react'
import "../styles/admin.css"
import { NavLink } from 'react-router-dom'
import AdminHero from '../components/AdminHero'
import AdminProductFeature from '../components/AdminProductFeature'
import AdminBg from '../components/AdminBg'
import AdminEditorial from '../components/AdminEditorial'
import AdminEditoril from '../components/AdminEditoril'
function Admin() {
  return (
    <div>
      <header className='adminheader'>
        <NavLink to="/admin">admin</NavLink><br />
        <NavLink to="/adminCategory">category</NavLink><br />
        <NavLink to="/adminProducts">products</NavLink><br />
        <NavLink to="/adminPlp">plp</NavLink><br />
      </header>
      <AdminHero/>
      <AdminProductFeature/>
      <AdminBg/>
      <AdminEditorial/>
      <AdminEditoril/>
    </div>
  )
}

export default Admin
