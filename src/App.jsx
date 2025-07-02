import './App.css'
import { useContext } from 'react'
import { Context } from './Context'
import Home from './Pages/Home'
import Contacto from './Pages/Contacto'
import QuienesSomos from './Pages/QuienesSomos'
import DescripcionDelProducto from './Componentes/DescripcionDelProducto'
import NotFound from './Pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import RutasProtegidas from './Auth/RutasProtegidas'

function App() {
 const { isAuthenticated } = useContext(Context)

  return (
    <>
   <Routes>

      <Route path='/' element={<Home />} />

      <Route path='/contacto' element={<Contacto/>} />

      <Route path='/quienes' element={<QuienesSomos />} />

      <Route path='/productos/:id' element={<DescripcionDelProducto />} />

      <Route path='/admin' element={<RutasProtegidas isAuthenticated={isAuthenticated}> <Admin /> </RutasProtegidas>} />

      <Route path='/login' element={<Login/>}/>

      <Route path='*' element={<NotFound />} />

    </Routes>
 

    </>
  )
}

export default App
