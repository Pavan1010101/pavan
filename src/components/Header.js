import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        
      <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"#"}><h3> eInfochips</h3></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"to="/Inventory">INVENTORY</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AddPO">AddPO</Link>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        
        <button className="btn btn-outline-success" type="submit">LogOut</button>
      </form>
    </div>
  </div>
</nav>

  </div>


  )
}

export default Header
