import { Context } from "../Context"
import { useContext } from "react"
import './CartElement.css'
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Tooltip} from 'react-tooltip';


const CartElements = () => {
    const { cart, deleteProductCart } = useContext(Context)



    return cart.map((product) => {
  

        return (
          <div  style={{overflow:'auto'}}>
          
                <div className="product-card-container" key={product.id}>
                    <img className="product-card" src={product.imagen} alt="" />
                    <h6>{product.nombre}</h6>
                    <h6>$ {product.precio}</h6>
                    <h6 >Cantidad {product.cantidad}  <FontAwesomeIcon data-tooltip-id='tooltip' data-tooltip-content="Eliminar 1 Producto" onClick={() => deleteProductCart(product)} icon={faTrash} style={{ cursor: 'pointer', color: 'orange' }} /></h6>
                    <Tooltip id='tooltip' />
                </div>
               
           </div>
        )
       
    })

    




}

export default CartElements