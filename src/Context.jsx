import { faAllergies } from "@fortawesome/free-solid-svg-icons";
import { createContext } from "react";
import { useState, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Context = createContext()
const ContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const [cargando, setCargando] = useState(false)

    function VaciarCarrito() { setCart([]) };

    const [products, setProducts] = useState([])

    const countProducts = cart.reduce((acc, el) => acc + el.cantidad, 0)

    const [active, setActive] = useState(false)

    const [busqueda, setBusqueda] = useState("")


    const [isAuthenticated, setIsAuth] = useState(false)
    
    const [productosFiltrados, setProducFilt] = useState([])

    const filtrado = productosFiltrados.filter((product) => product.nombre.toLowerCase().includes(busqueda.toLowerCase()))

    useEffect(() => {

        fetch('/Data.json')
            .then((res) => res.json())
            .then(datos => {
                setTimeout(() => {
                    setProducts(datos)
                    setProducFilt(datos)

                    setCargando(false)
                },
                    1000)
            })
    }, []

    )





    const deleteProductCart = (product) => {

        toast.success('El producto fue eliminado!', {
            position: "top-right",
            autoClose: 1400,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",

        });

        ;
        <ToastContainer />
        setCart(prevCart => {
            return prevCart.map(el => {
                if (el.id === product.id) {
                    if (el.cantidad > 1) {
                        return { ...el, cantidad: el.cantidad - 1 };
                    } else {
                        return null;
                    }
                } else {
                    return el;
                }
            }).filter(el => el !== null);
        });
        // setCart(cart.filter(item=> item.id !== product.id)) //("Para  borrar todos de una vez")
    };


    return (
        <Context.Provider value={{ setProducFilt, filtrado, cargando, setCargando, cart, setCart, VaciarCarrito, active, setActive, countProducts, products, setProducts, productosFiltrados, busqueda, setBusqueda, isAuthenticated, setIsAuth, deleteProductCart }}>
            {children}

        </Context.Provider>

    )
}

export default ContextProvider