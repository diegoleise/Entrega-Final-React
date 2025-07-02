import React, { useContext } from "react"
import Products from "./Products"
import { Context } from "../Context"


const ProductosFiltrados = () => {

    const { productosFiltrados, busqueda, setBusqueda } = useContext(Context);

   
    
    return (
        <>
            
            <div style={{display:'flex', justifyContent:'center',marginTop: '20px', position:'sticky'}}><input style={{borderRadius:'5px'}}
                placeholder='Buscar productos...'
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)} /></div>
            <div style={{ display: 'flex',  justifyContent: 'space-evenly', flexWrap:'wrap' }}>
               {
                    productosFiltrados.map(product => (
                        <Products key={product.id} product={product} />
                    ))
                }
            </div>
            
        </>
    )
}

export default ProductosFiltrados