import { Context } from '../Context'
import './Cart.css'
import CartElements from './CartElements'
import CartTotal from './CartTotal'
import { useContext } from 'react'





const Cart = () => {
    const { active, countProducts} = useContext(Context)

    return (
        <div className={`cart-drawer ${active ? '' : 'cart-hiden'}`}>

            <section className='cart-header'>
                
                <h2>Mi Carrito</h2>
                
            </section>
            <span className={`cart-header ${countProducts > 0? 'cart-hiden' : ''}`} >El carrito esta vao</span>

            <CartElements />
            <CartTotal />

        </div>
    )
}

export default Cart