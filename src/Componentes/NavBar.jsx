import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './NavBar.css'
import Cart from "./Cart"
import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { Context } from "../Context"




const NavBar = () => {

  const { active, setActive, countProducts } = useContext(Context)



     return (

        <nav  style={{display:'flex', zIndex:'100', top:'0px', height:'100%', padding:'0' }} className="navbar navbar-expand-lg bg-body-tertiary">
            <div style={{ backgroundColor: 'chocolate'}} className="container-fluid">
                <Link style={{ textDecoration: 'none' }} to={'/'}><h4 className="nav-h2">Inicio</h4></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li >
                            <NavLink style={{ textDecoration: 'none' }} to={'/contacto'}><h4 className="nav-h2">Contacto</h4></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={{ textDecoration: 'none' }} to={'/quienes'}><h4 className="nav-h2">Quienes Somos</h4></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={{ textDecoration: 'none' }} to={'/login'}><h4 className="nav-h2">Login</h4></NavLink>
                        </li>

                    <li className="nav-item">
                            <NavLink style={{ textDecoration: 'none' }} to={'/admin'}><h4 className="nav-h2">Panel Admin</h4></NavLink>
                        </li>
                    </ul>
                    <div onClick={()=> setActive(!active)} onMouseOver={() => setActive(true)} onMouseOut={()=> setActive(false)} className="nav-cart"><FontAwesomeIcon icon={faCartShopping} /></div>
                    <span style={{marginRight:'15px'}} className={`count-products ${countProducts === 0 ? 'cart-hiden' : ''}`}>
                        {countProducts}
                    </span>
                    <Cart />
                </div>
            </div>
        </nav>
    )
}

export default NavBar