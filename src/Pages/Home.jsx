import Banner from "../Componentes/Banner"
import NavBar from "../Componentes/NavBar"
import '../Componentes/Products.css'
import ProductosFiltrados from "../Componentes/ProductosFiltrados"
import Loading from "../assets/Loading.gif"
import { useContext, useEffect } from "react"
import { Context } from "../Context"
import Footer from "../Componentes/Footer"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavResponsive from "../Componentes/NavResponsive"





const Home = () => {
  const { cargando } = useContext(Context)
  const mensaje = () => {
toast.success('🦄 Wow so easy!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",

});
  }
  return (
     <>

      <NavBar />
      <NavResponsive/>
      <Banner />
      
    

      {
        cargando ? <div style={{ display: 'flex', justifyContent: 'center' }}><img src={Loading} alt='loading' /></div> :

          <ProductosFiltrados />

      }
      <Footer />


    </>
  )
}

export default Home