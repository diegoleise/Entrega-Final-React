import { useState, useContext} from "react"
import './Products.css'
import { Context } from "../Context"
import { Link } from "react-router-dom"




const Products = ({product}) => {




    
    const { setCart,cart } = useContext(Context)
   





    const buyProducts = (product) => {

        



            if (cart.find((item) => item.id === product.id)) {

                // Si el producto ya existe, incrementa la cantidad
                return setCart( cart.map((item) =>
                    item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
                ));
            };
            // Si el producto no existe, agrégalo al carrito con cantidad 1 
            return setCart([...cart, { ...product, cantidad: 1 }]);
        ;

    };



     

            return (
               
                <section className="card" key={product.id} >
                    
                    <div className="card-img" > 
                        <img src={product.imagen} alt="" />
                    </div>
                    <h5>{product.nombre}</h5>
                    <h4 className="card-precio">$ {product.precio}</h4>
                     <button onClick={() => buyProducts(product)} className="card-button">Agregar a mi carrito</button>
                     <Link to={`/productos/${product.id}`} style={{textDecoration:'none', margin:'10px', fontWeight:'bold'}}>Ver mas</Link>
               
               </section>
                
            )
        




}
export default Products