import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className="logo">
    <h1>JayShop</h1>

    
    <div className="navbar">
        <div className="links">
            <Link to="/">Shop</Link>
            <Link to="/cart"><ShoppingCart size={32}/></Link>
        </div>
    </div>
    </div>
  )
}

export default Navbar
