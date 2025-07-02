import { Context } from "../Context"
import { useContext } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'; 

const CartTotal = () => {
  const { cart, VaciarCarrito, countProducts} = useContext(Context)
  const total = cart.reduce((acc, el) => acc + el.cantidad * el.precio, 0)
  return (
    <div className={`cart-total ${countProducts === 0? 'cart-hiden' : ''}`}>

      <h5>Total a pagar: $ {total}</h5>
     <div > <button className="btn btn-secondary"  style={{fontWeight:'bold'}} onClick={VaciarCarrito}>Vaciar Carrito</button> </div>
     <div><button style={{marginTop:'5px', fontWeight:'bold'}} className="btn btn-secondary">Ver detalle y Confirmar Compra</button></div>
    </div>
  )
}

export default CartTotal