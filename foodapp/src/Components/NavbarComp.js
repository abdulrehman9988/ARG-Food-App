import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Modal from '../Modal'
import Cart from '../screens/Cart'
import { useCart } from './ContextReducer'

export default function NavbarComp() {
  let data=useCart();
  const [cartView, setCartView]=useState(false)
  const navigate=useNavigate()
  const handleLogout=()=>{
     localStorage.removeItem("authToken")
     navigate("/login")
  }
  return (
    <>

<nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">
      ARG FoodApp
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">
            Home
          </Link>
        </li>

        {(localStorage.getItem("authToken")) ?
            <li className="nav-item">
              <Link className="nav-link fs-5 mx-3 active text-light rounded" aria-current="page" to="/myOrder" >My Orders</Link> 
          </li> : ""
        }



      {(!localStorage.getItem("authToken")) ?
        <div className='d-flex'>
          <Link className="nav-link active fs-5" to="/login">
            Login
          </Link>
          <Link className="nav-link active fs-5" to="/createuser">
            SignUp
          </Link>
        
        </div>
        :
        <div>
          <div className='btn bg-success text-light fs-5 mx-2' onClick={()=>{setCartView(true)}}>
            My Cart {" "} <span class="badge text-bg-light">{data.length===0?null:data.length}</span></div>

          {cartView ? <Modal onClose={() => setCartView(false)}><Cart/></Modal> : null}
          <div className='btn bg-danger text-light fs-5 mx-2' onClick={handleLogout}>Logout</div>
        </div>
        }
      </ul>
    </div>
  </div>
</nav>


    </>
  )
}
