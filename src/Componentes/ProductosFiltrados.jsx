import React, { useContext } from "react"
import Products from "./Products"
import { Context } from "../Context"


const ProductosFiltrados = () => {

    const { filtrado, setProducts, products, productosFiltrados, busqueda, setBusqueda } = useContext(Context);



    return (
        <>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div style={{ textAlign: 'center', gap: '10px', marginTop: '20pxp', width: '50%' }}><input style={{ borderRadius: '10px', marginTop: '10px', marginTop: '10px', padding: '5px', width: '100%', boxSizing: 'border-box' }}
                placeholder='Buscar productos...'
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)} />
                <button style={{ marginTop: '10px', borderRadius: '10px' }} onClick={() => setProducts(filtrado)}>Filtrar</button>
                <button style={{ marginTop: '10px', borderRadius: '10px' }} onClick={() => setProducts(productosFiltrados)}>Todos los Productos</button>
            </div>
        </div>


            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>

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