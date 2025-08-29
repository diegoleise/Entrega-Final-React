import React, { useContext } from "react"
import Products from "./Products"
import { Context } from "../Context"


const ProductosFiltrados = () => {

    const {  filtrado,setProducts, products, productosFiltrados, busqueda, setBusqueda } = useContext(Context);

   
    
    return (
        <>
            
            <div style={{gap:'10px', display:'flex', justifyContent:'center',marginTop: '20pxp', }}><input style={{borderRadius:'5px', marginTop:'10px', marginTop:'10px', padding:'5px', flexWrap:'wrap'}}
                placeholder='Buscar productos...'
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)} />
                <button style={{marginTop:'10px'}} onClick={()=>setProducts(filtrado) }>Filtrar</button>
                   <button style={{marginTop:'10px'}} onClick={()=>setProducts(productosFiltrados) }>Todos los Productos</button>
                </div>
            <div style={{ display: 'flex',  justifyContent: 'space-evenly', flexWrap:'wrap' }}>
                
               {
                    products.map(product => (
                        <Products key={product.id} product={product} />
                    ))
                }
            </div>
            
        </>
    )
}

export default ProductosFiltrados