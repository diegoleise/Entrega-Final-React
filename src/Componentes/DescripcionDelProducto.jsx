import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../Context'
import NavBar from './NavBar'



const DescripcionDelProducto = () => {

    const { products } = useContext(Context)
    const { id } = useParams()

 

    const product = products.find(product=> product.id == id);
  if (!product) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ color: '#c00' }}>Detalle del producto: {id}</h1>
        <p style={{ fontSize: '1.2rem' }}>Producto no encontrado</p>
      </div>
    );
  }

    return (
        <>
        <NavBar/>
       
        <div style={{alignItems:'center'}}>
            <h2>Descripcion Del Producto:</h2>

            <h3>{product.nombre}</h3>
          
          <img
            src={product.imagen}
            alt={product.nombre}
            style={{
              width: '350px',
              maxHeight: '300px',
              borderRadius: '8px',
              marginBottom: '1.5rem',
            }}
          />
        
        </div>
        </>

    )
}


export default DescripcionDelProducto